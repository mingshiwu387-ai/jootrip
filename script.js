const firebaseConfig = {
  apiKey: "AIzaSyBwcrslI-bdYZt4ISA-xaB8ri6pmyJpURs",
  authDomain: "://firebaseapp.com",
  projectId: "travel-planner-87805",
  storageBucket: "travel-planner-87805.firebasestorage.app",
  messagingSenderId: "132591205804",
  appId: "1:132591205804:web:24e7c4ed57cbc248140e09",
  measurementId: "G-RMGWG0RFYD"
};

let db = null;
let globalSpots = [
    { id: "local1", name: "東京晴空塔 & 淺草寺", desc: "經典必訪地標，俯瞰市景並體驗傳統雷門文化氛圍。", votes: 2 },
    { id: "local2", name: "澀谷 SKY 高空觀景台", desc: "360度露天展望台，黃昏夕陽與百萬夜景絕美必拍。", votes: 1 },
    { id: "local3", name: "築地場外市場美食巡禮", desc: "新鮮海鮮丼、玉子燒與在地人氣小吃一次滿足。", votes: 0 }
];
let globalPackages = [
    { id: "pkg1", title: "精選深度五日跟團遊（含專車與導遊）", desc: "精選市區四星飯店、全程專車接送與專業中文導遊，輕鬆出遊免規劃。", price: 18500 }
];

let currentSwipeIndex = 0;
let selectedDayFilter = 1;
let currentCity = "日本東京";
let currentScheduleState = {
    daysData: [],
    baseTransport: 3500,
    budgetLimit: 15000,
    people: 4,
    totalCostPerPerson: 0
};

try {
    if (typeof firebase !== "undefined") {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    }
} catch (e) {
    console.error("Firebase 初始化異常：", e);
}

window.onload = function() {
    renderSwipeCard();
    renderPackagesUI();

    const statusEl = document.getElementById('db-status');
    if (!db) {
        statusEl.innerText = "⚠️ 離線展示模式";
        statusEl.style.background = "#f59e0b";
        return;
    }

    db.collection("spots").onSnapshot(function(snapshot) {
        statusEl.innerText = "✅ 雲端已連線";
        statusEl.style.background = "#10b981";

        if (snapshot.empty) {
            seedInitialData();
            return;
        }

        globalSpots = [];
        snapshot.forEach(function(doc) {
            globalSpots.push({ id: doc.id, ...doc.data() });
        });
        globalSpots.sort(function(a, b) { return b.votes - a.votes; });
        renderSwipeCard();
    }, function(error) {
        statusEl.innerText = "⚠️ 離線模式";
        statusEl.style.background = "#f59e0b";
    });

    db.collection("packages").onSnapshot(function(snapshot) {
        if (snapshot.empty) {
            db.collection("packages").add(globalPackages[0]);
            return;
        }
        globalPackages = [];
        snapshot.forEach(function(doc) {
            globalPackages.push({ id: doc.id, ...doc.data() });
        });
        renderPackagesUI();
    });
};

function goToPage(pageId) {
    var pages = document.querySelectorAll('.app-page');
    pages.forEach(function(p) { p.classList.remove('active'); });
    var target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    var navs = document.querySelectorAll('.nav-item');
    navs.forEach(function(n) { n.classList.remove('active'); });
    var activeNav = document.getElementById('nav-' + pageId);
    if (activeNav) activeNav.classList.add('active');

    window.scrollTo(0, 0);
}

function switchTripSubTab(tabName) {
    document.getElementById('trip-sub-schedule').style.display = tabName === 'schedule' ? 'block' : 'none';
    document.getElementById('trip-sub-budget').style.display = tabName === 'budget' ? 'block' : 'none';
    document.getElementById('trip-sub-b2c').style.display = tabName === 'b2c' ? 'block' : 'none';

    document.getElementById('sub-tab-schedule').classList.toggle('active', tabName === 'schedule');
    document.getElementById('sub-tab-budget').classList.toggle('active', tabName === 'budget');
    document.getElementById('sub-tab-b2c').classList.toggle('active', tabName === 'b2c');
}

function renderSwipeCard() {
    if (globalSpots.length === 0) return;
    if (currentSwipeIndex >= globalSpots.length) currentSwipeIndex = 0;

    var item = globalSpots[currentSwipeIndex];
    document.getElementById('swipe-title').innerText = item.name;
    document.getElementById('swipe-desc').innerText = item.desc;
    document.getElementById('swipe-votes-pill').innerText = "❤️ 目前 " + item.votes + " 票";
    document.getElementById('swipe-counter').innerText = (currentSwipeIndex + 1) + " / " + globalSpots.length;
}

function nextSwipeCard() {
    if (globalSpots.length === 0) return;
    currentSwipeIndex = (currentSwipeIndex + 1) % globalSpots.length;
    renderSwipeCard();
}

function likeCurrentSwipeCard() {
    if (globalSpots.length === 0) return;
    var item = globalSpots[currentSwipeIndex];
    if (db && !item.id.startsWith("local")) {
        db.collection("spots").doc(item.id).update({ votes: item.votes + 1 });
    } else {
        item.votes += 1;
        globalSpots.sort(function(a, b) { return b.votes - a.votes; });
    }
    nextSwipeCard();
}

function addNewSpot() {
    var name = document.getElementById('new-spot-name').value.trim();
    var desc = document.getElementById('new-spot-desc').value.trim() || "旅伴推薦必訪熱門打卡地標";
    if (!name) return alert("請先輸入景點名稱！");

    if (db) {
        db.collection("spots").add({ name: name, desc: desc, votes: 1 });
    } else {
        globalSpots.unshift({ id: "local_" + Date.now(), name: name, desc: desc, votes: 1 });
        currentSwipeIndex = 0;
        renderSwipeCard();
    }
    document.getElementById('new-spot-name').value = "";
    document.getElementById('new-spot-desc').value = "";
    alert("🎉 已加入雲端投票池！");
}

function seedInitialData() {
    if (!db) return;
    globalSpots.forEach(function(item) {
        db.collection("spots").add({ name: item.name, desc: item.desc, votes: item.votes });
    });
}

function getTopVotedSpot() {
    if (globalSpots.length === 0) return "市區人氣地標";
    return globalSpots[0].name + "（最高票 " + globalSpots[0].votes + " 票）";
}

function fmt(h, m) {
    return (h < 10 ? "0" + h : h) + ":" + (m === 0 ? "00" : m);
}
function generatePrecisionSchedule() {
    var city = document.getElementById('dest-city').value.trim() || "日本東京";
    var days = parseInt(document.getElementById('trip-days').value) || 2;
    var startHour = parseInt(document.getElementById('start-time').value) || 9;
    var style = document.getElementById('trip-style').value;
    var budgetLimit = parseFloat(document.getElementById('budget-limit').value) || 15000;
    var people = parseInt(document.getElementById('people-count').value) || 4;

    currentCity = city;
    selectedDayFilter = 1;
    var topVoted = getTopVotedSpot();
    var daysData = [];

    for (var d = 1; d <= days; d++) {
        var h = startHour;
        var dayItems = [];

        if (d === 1) {
            dayItems.push({ time: fmt(h, 0), title: "📍 " + city + "｜" + topVoted, desc: "順路導航出發，預留充足拍照緩衝。", transit: "🚆 地鐵直達 • 約 15 分", cost: 600 });
            dayItems.push({ time: fmt(h + 2, 30), title: "🍜 " + city + " 在地人氣名店午餐", desc: "精選距離景點步行 8 分鐘內 4.5 星餐廳。", transit: "🚶 步行前往 • 約 8 分", cost: 550 });
            dayItems.push({
                time: fmt(h + 4, 0),
                title: style === "culture" ? "🏛️ " + city + " 文化藝術館與歷史街區" : (style === "nature" ? "🌿 " + city + " 自然風景公園漫步" : "🛍️ " + city + " 潮流商圈與甜點下午茶"),
                desc: "深度體驗當地氛圍，建議停留 180 分鐘。",
                transit: "🚇 搭乘地鐵 • 約 20 分",
                cost: 800
            });
            dayItems.push({ time: fmt(h + 7, 0), title: "🌃 " + city + " 夜景展望台 & 在地晚餐", desc: "欣賞迷人城市夜景並享用晚餐。", transit: "🚕 計程車/地鐵 • 約 15 分", cost: 650 });
        } else if (d === 2) {
            dayItems.push({ time: fmt(h, 0), title: "⛩️ " + city + " 經典老街與文創市集", desc: "避開人潮高峰，享受悠閒早晨。", transit: "🚆 電車前往 • 約 18 分", cost: 900 });
            dayItems.push({ time: fmt(h + 3, 0), title: "🍱 " + city + " 隱藏版高 CP 值食堂", desc: "在地人推薦平價美味料理。", transit: "🚶 步行 • 約 5 分", cost: 500 });
            dayItems.push({ time: fmt(h + 4, 30), title: "🎡 " + city + " 主題樂園 / 購物中心自由行", desc: "彈性分組行動時間。", transit: "🚇 地鐵轉乘 • 約 25 分", cost: 1200 });
        } else {
            dayItems.push({ time: fmt(h, 0), title: "🚄 " + city + " 近郊秘境半日遊", desc: "體驗不同於市區的自然人文風光。", transit: "🚄 觀光列車 • 約 40 分", cost: 1800 });
            dayItems.push({ time: fmt(h + 3, 30), title: "☕ " + city + " 景觀咖啡廳輕食午餐", desc: "距離車站步行 5 分鐘內。", transit: "🚶 步行 • 約 5 分", cost: 600 });
            dayItems.push({ time: fmt(h + 5, 0), title: "🎁 " + city + " 車站商圈最後採買 & 返程", desc: "距離機場/車站僅 12 分鐘車程。", transit: "🚆 機場快線 • 約 12 分", cost: 700 });
        }

                daysData.push({
            day: d,
            items: dayItems,
            hotelCost: d < days ? (budgetLimit <= 2000 ? 0 : 2200) : 0
        });
    }

    // 智慧預算自適應：依使用者輸入的 budgetLimit 自動調整合理花費與交通費
    var smartTransport = budgetLimit <= 1000 ? 50 : (budgetLimit <= 3000 ? 300 : 3500);
    var rawSum = smartTransport;
    daysData.forEach(function(dObj) {
        rawSum += dObj.hotelCost;
        dObj.items.forEach(function(it) { rawSum += it.cost; });
    });

    if (rawSum > budgetLimit && budgetLimit > 0) {
        var targetForItems = Math.max(0, (budgetLimit * 0.88) - smartTransport);
        var currentItemsSum = 0;
        daysData.forEach(function(dObj) {
            dObj.hotelCost = 0;
            dObj.items.forEach(function(it) { currentItemsSum += it.cost; });
        });
        var ratio = currentItemsSum > 0 ? (targetForItems / currentItemsSum) : 0;
        daysData.forEach(function(dObj) {
            dObj.items.forEach(function(it) {
                it.cost = Math.max(0, Math.round((it.cost * ratio) / 10) * 10);
            });
        });
    }

    currentScheduleState = {
        daysData: daysData,
        baseTransport: smartTransport,
        budgetLimit: budgetLimit,
        people: people,
        totalCostPerPerson: 0
    };


    document.getElementById('home-trip-title').innerText = city + " " + days + " 日遊";
    document.getElementById('home-trip-sub').innerText = "👥 " + people + " 位旅伴 • 雲端即時共編中";
    document.getElementById('trip-overview-title').innerText = city + " " + days + " 日遊";

    document.getElementById('ai-result-panel').style.display = "block";
    renderScheduleAndBudget(true);
}

function selectDayPill(dayNum) {
    selectedDayFilter = dayNum;
    renderScheduleAndBudget(false);
}

function renderScheduleAndBudget(isInitial) {
    var totalCostPerPerson = currentScheduleState.baseTransport;
    var pillsHTML = "";

    currentScheduleState.daysData.forEach(function(dayObj) {
        var dayTotal = dayObj.hotelCost;
        dayObj.items.forEach(function(item) { dayTotal += item.cost; });
        totalCostPerPerson += dayTotal;

        var activeCls = dayObj.day === selectedDayFilter ? "day-pill active" : "day-pill";
        pillsHTML += '<button class="' + activeCls + '" onclick="selectDayPill(' + dayObj.day + ')">Day ' + dayObj.day + '</button>';
    });

    document.getElementById('day-pills-bar').innerHTML = pillsHTML;

    var currentDayObj = currentScheduleState.daysData.find(function(d) { return d.day === selectedDayFilter; });
    var timelineHTML = "";
    if (currentDayObj) {
        currentDayObj.items.forEach(function(item) {
            timelineHTML +=
                '<div class="timeline-card">' +
                    '<div class="timeline-top"><span>⏰ ' + item.time + '</span><span>預估 $' + item.cost + '</span></div>' +
                    '<h4>' + item.title + '</h4>' +
                    '<p>' + item.desc + '</p>' +
                '</div>' +
                '<div class="transit-connector">' + (item.transit || "🚆 順路交通移動") + '</div>';
        });
        if (currentDayObj.hotelCost > 0) {
            timelineHTML +=
                '<div class="timeline-card" style="border-left-color:#0284c7;">' +
                    '<div class="timeline-top"><span>🏨 晚間入住</span><span>預估 $' + currentDayObj.hotelCost + '</span></div>' +
                    '<h4>' + currentCity + ' 市區精選設計旅店</h4>' +
                    '<p>距離地鐵站步行 5 分鐘內，雙人房分攤。</p>' +
                '</div>';
        }
    }
    document.getElementById('timeline-container').innerHTML = timelineHTML;

    currentScheduleState.totalCostPerPerson = totalCostPerPerson;
    var groupTotalCost = totalCostPerPerson * currentScheduleState.people;
    var groupTotalBudget = currentScheduleState.budgetLimit * currentScheduleState.people;

    document.getElementById('split-total-budget').innerText = "NT$ " + groupTotalBudget.toLocaleString();
    document.getElementById('split-total-spent').innerText = "NT$ " + groupTotalCost.toLocaleString();
    document.getElementById('split-per-person').innerText = "NT$ " + totalCostPerPerson.toLocaleString();

    var alertBox = document.getElementById('budget-alert-box');
    if (totalCostPerPerson > currentScheduleState.budgetLimit) {
        alertBox.className = "alert-box alert-danger";
        alertBox.innerHTML = '<strong>⚠️ 預算超支預警！</strong>每人預估 <strong>$' + totalCostPerPerson + '</strong>，超出上限 <strong>$' + (totalCostPerPerson - currentScheduleState.budgetLimit) + ' 元</strong>。快請下方 AI 顧問幫您協調壓低費用！';
    } else {
        alertBox.className = "alert-box alert-safe";
        alertBox.innerHTML = '<strong>✅ 預算安全過關！</strong>每人預估 <strong>$' + totalCostPerPerson + '</strong>，尚有餘裕 <strong>$' + (currentScheduleState.budgetLimit - totalCostPerPerson) + ' 元</strong>。';
    }

    var latestPkg = globalPackages.length > 0 ? globalPackages[globalPackages.length - 1] : { title: "精選深度跟團方案", price: 18500 };
    var pkgPrice = parseFloat(latestPkg.price);
    var diff = Math.abs(pkgPrice - totalCostPerPerson);
    var betterText = totalCostPerPerson < pkgPrice
        ? '💡 <strong>自由行更划算！</strong>比旅行社「' + latestPkg.title + '」($' + pkgPrice + ') 每人省下 <strong>$' + diff + ' 元</strong>。'
        : '💡 <strong>跟團更划算！</strong>旅行社「' + latestPkg.title + '」($' + pkgPrice + ') 比目前自由行每人便宜 <strong>$' + diff + ' 元</strong>。';

    document.getElementById('compare-box').innerHTML =
        '<h4>⚖️ 自由行 vs 旅行社智慧比價</h4>' +
        '<p style="margin-top:6px;">' + betterText + '</p>';

    if (isInitial) {
        var chatHistory = document.getElementById('ai-chat-history');
        chatHistory.innerHTML = "";
        if (totalCostPerPerson > currentScheduleState.budgetLimit) {
            appendChatMessage("ai", "您好！我已排好 " + currentCity + " 行程，但每人花費 <strong>$" + totalCostPerPerson + "</strong> 超出預算 <strong>$" + (totalCostPerPerson - currentScheduleState.budgetLimit) + "</strong>。要我幫您把付費門票改為免費景點、住宿換高 CP 值商旅嗎？");
        } else {
            appendChatMessage("ai", "您好！" + currentCity + " 行程已生成，預算還剩 <strong>$" + (currentScheduleState.budgetLimit - totalCostPerPerson) + "</strong>！想<strong>排輕鬆一點、多加美食、或升級豪華團</strong>都可以直接跟我商量！");
        }
    }
}

function appendChatMessage(sender, htmlText) {
    var chatHistory = document.getElementById('ai-chat-history');
    var msgDiv = document.createElement('div');
    msgDiv.className = sender === 'ai' ? 'chat-msg chat-ai' : 'chat-msg chat-user';
    msgDiv.innerHTML = sender === 'ai' ? '🤖 <strong>AI 顧問：</strong>' + htmlText : htmlText;
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function quickNegotiate(text) {
    document.getElementById('ai-user-input').value = text;
    sendNegotiation();
}

function sendNegotiation() {
    var inputEl = document.getElementById('ai-user-input');
    var userText = inputEl.value.trim();
    if (!userText) return;

    appendChatMessage("user", userText);
    inputEl.value = "";

    setTimeout(function() {
        var reply = "";
        if (userText.includes("省錢") || userText.includes("貴") || userText.includes("預算") || userText.includes("便宜")) {
            currentScheduleState.daysData.forEach(function(d) {
                if (d.hotelCost > 0) d.hotelCost = 1300;
                d.items.forEach(function(item) {
                    if (item.cost >= 800) {
                        item.title = item.title.replace(/展望台|主題樂園|近郊秘境|文化藝術館/, "免費人氣公園與地標散步");
                        item.desc = "【AI 預算協調】改為免門票景點與平價美食。";
                        item.cost = 300;
                    } else {
                        item.cost = Math.max(250, item.cost - 150);
                    }
                });
            });
            renderScheduleAndBudget(false);
            reply = "已為您重新協調預算！改為<strong>免費地標與高 CP 值住宿</strong>後，每人總花費降至 <strong>$" + currentScheduleState.totalCostPerPerson + " 元</strong>！";
        } else if (userText.includes("累") || userText.includes("趕") || userText.includes("輕鬆") || userText.includes("慢")) {
            currentScheduleState.daysData.forEach(function(d) {
                if (d.items.length > 3) d.items.pop();
                d.items.forEach(function(item, idx) {
                    if (idx === 0) item.time = "10:30";
                    if (idx === 1) item.time = "13:00";
                    if (idx === 2) item.time = "15:30";
                    item.desc += "（已放慢步調）";
                });
            });
renderScheduleAndBudget(false);
reply = "收到！已切換為「慢活悠閒模式」，改為 10:30 出發並減少趕場，時間軸已同步更新！";
} else if (userText.includes("吃") || userText.includes("美食") || userText.includes("餐廳")) {
currentScheduleState.daysData.forEach(function(d) {
d.items.push({ time: "20:30", title: "🍢 " + currentCity + " 深夜食堂 / 夜市美食續攤", desc: "【AI 協調加碼】精選在地消夜街區。", transit: "🚶 步行逛街 • 約 5 分", cost: 450 });
});
renderScheduleAndBudget(false);
reply = "吃貨模式啟動！已在每天晚上加排「在地夜市與深夜食堂」並重新精算餐費！";
} else if (userText.includes("豪華") || userText.includes("升級")) {
currentScheduleState.daysData.forEach(function(d) {
if (d.hotelCost > 0) d.hotelCost = 4500;
d.items.forEach(function(item) { item.cost += 600; item.desc = "【AI 尊榮升級】升等專車接送與景觀料理。"; });
});
renderScheduleAndBudget(false);
reply = "已升級為「尊榮豪華版」！住宿升等市中心五星飯店，每人總費用為 $" + currentScheduleState.totalCostPerPerson + " 元！";
} else {
if (currentScheduleState.daysData.length > 0) {
currentScheduleState.daysData[0].items.splice(1, 0, {
time: "14:00", title: "✨ " + currentCity + "｜客製：" + userText, desc: "【AI 動態安插】已自動重排順路交通。", transit: "🚆 自動優化交通 • 約 15 分", cost: 500
});
renderScheduleAndBudget(false);
reply = "好的！已把「" + userText + "」安插進 Day 1 行程並自動重新計算交通與費用！";
}
}
appendChatMessage("ai", reply);
}, 250);
}
function triggerRainPlan() {
var box = document.getElementById('emergency-alert');
box.style.display = "block";
box.innerHTML = '☔ 已啟動雨天室內備案（' + currentCity + '）：已將戶外步行改為「室內美術館 / 大型地下街百貨」，備案預算約 $250 元。';
}
function triggerAngryRescue() {
var box = document.getElementById('emergency-alert');
box.style.display = "block";
box.innerHTML = '🤬 旅伴安撫救援：已鎖定 200 公尺內冷氣強、有沙發的 4.6 星咖啡廳，建議立即入座冷卻情緒 2 分鐘並休息 40 分鐘！';
}
function renderPackagesUI() {
    var b2cListEl = document.getElementById('b2c-package-list');
    var b2bListEl = document.getElementById('b2b-package-list');
    if (!b2cListEl || !b2bListEl) return;
    b2cListEl.innerHTML = "";
    b2bListEl.innerHTML = "";
    globalPackages.forEach(function(data) {
        b2cListEl.innerHTML +=
            '<div class="pkg-item-card">' +
                '<span class="badge-green">旅行社認證</span>' +
                '<h4 style="margin:6px 0 4px 0;">' + data.title + '</h4>' +
                '<p style="color:#64748b;margin-bottom:6px;">' + data.desc + '</p>' +
                '<strong style="color:#0d9488;">跟團直購價：NT$ ' + Number(data.price || 0).toLocaleString() + ' / 人</strong>' +
            '</div>';
        b2bListEl.innerHTML +=
            '<div class="pkg-item-card">' +
                '<h4 style="margin:0 0 4px 0;">' + data.title + '</h4>' +
                '<p style="color:#64748b;margin-bottom:6px;">' + data.desc + '</p>' +
                '<strong style="color:#0f172a;">對外售價：NT$ ' + Number(data.price || 0).toLocaleString() + ' / 人</strong>' +
            '</div>';
    });
}

window.addSpotToCurrentSchedule = function(spotObj) {
    if (!spotObj) return;
    if (!currentScheduleState.daysData || currentScheduleState.daysData.length === 0) {
        var days = parseInt(document.getElementById('trip-days') && document.getElementById('trip-days').value, 10) || 2;
        var budgetLimit = parseFloat(document.getElementById('budget-limit') && document.getElementById('budget-limit').value) || 15000;
        var people = parseInt(document.getElementById('people-count') && document.getElementById('people-count').value, 10) || 4;
        var cityInput = (document.getElementById('dest-city') && document.getElementById('dest-city').value.trim()) || currentCity || "日本東京";
        currentCity = spotObj.city || cityInput;
        var builtDays = [];
        for (var d = 1; d <= days; d++) {
            builtDays.push({
                day: d,
                items: [],
                hotelCost: d < days ? (budgetLimit <= 2000 ? 0 : 2200) : 0
            });
        }
        currentScheduleState = {
            daysData: builtDays,
            baseTransport: budgetLimit <= 1000 ? 50 : (budgetLimit <= 3000 ? 300 : 3500),
            budgetLimit: budgetLimit,
            people: people,
            totalCostPerPerson: 0
        };
    }

    var targetDay = currentScheduleState.daysData[0];
    var idx = targetDay.items.length;
    var baseHour = parseInt(document.getElementById('start-time') && document.getElementById('start-time').value, 10) || 9;
    var slotHour = baseHour + idx * 2;
    var timeStr = (slotHour % 24 < 10 ? "0" + (slotHour % 24) : (slotHour % 24)) + ":00";
    var costVal = Number(spotObj.price) || 0;

    targetDay.items.push({
        time: timeStr,
        title: "📌 " + (spotObj.city ? spotObj.city + "｜" : "") + spotObj.name,
        desc: spotObj.desc || "由首頁探索清單加入的行程景點。",
        transit: "🗺️ 依地圖順路前往",
        cost: costVal
    });

    selectedDayFilter = 1;
    document.getElementById('home-trip-title').innerText = currentCity + " " + currentScheduleState.daysData.length + " 日遊";
    document.getElementById('home-trip-sub').innerText = "👥 " + currentScheduleState.people + " 位旅伴 • 已加入「" + spotObj.name + "」";
    document.getElementById('trip-overview-title').innerText = currentCity + " " + currentScheduleState.daysData.length + " 日遊";
    renderScheduleAndBudget(false);
    alert('✅ 已將「' + spotObj.name + '」加入 Day 1 行程並重算費用！可到「旅程」頁查看。');
};
function publishPackage() {
var title = document.getElementById('pkg-title').value.trim();
var price = parseFloat(document.getElementById('pkg-price').value);
var desc = document.getElementById('pkg-desc').value.trim() || "專業團隊規劃，含食宿交通全包服務。";
if (!title || isNaN(price)) return alert("請填寫方案名稱與售價！");
if (db) {
db.collection("packages").add({ title: title, desc: desc, price: price }).then(function() {
alert("🚀 已發布至雲端資料庫！");
});
} else {
globalPackages.push({ id: "pkg_" + Date.now(), title: title, desc: desc, price: price });
renderPackagesUI();
alert("🚀 方案已上架！");
}
document.getElementById('pkg-title').value = "";
document.getElementById('pkg-cost').value = "";
document.getElementById('pkg-price').value = "";
document.getElementById('pkg-desc').value = "";
document.getElementById('pkg-profit').innerText = "$ 0";
}