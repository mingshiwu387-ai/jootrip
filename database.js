const JOOTRIP_DATABASE = [
  { id: "tw-ch-1", city: "彰化", category: "景點", name: "八卦山大佛風景區", price: 0, rating: "4.4 (18,500+)", notice: "天空步道傍晚17:30後燈光最美，夏季建議攜帶防蚊液。", desc: "彰化經典地標，漫步空中步道俯瞰彰化平原與夕陽夜景。" },
  { id: "tw-ch-2", city: "彰化", category: "美食", name: "阿泉控肉飯", price: 85, rating: "4.3 (4,120)", notice: "早上07:00開賣，中午前常提前售完，建議早起排隊。", desc: "皮Q肉嫩、滷汁甘甜不死鹹的彰化靈魂控肉飯。" },
  { id: "tw-ch-3", city: "彰化", category: "景點", name: "鹿港老街與天后宮", price: 0, rating: "4.5 (26,300+)", notice: "假日老街巷弄禁止汽車進入，建議停外圍停車場步行。", desc: "紅磚古厝巷弄漫步，順道品嚐麵線糊、牛舌餅與芋丸。" },
  { id: "tw-ch-4", city: "彰化", category: "住宿", name: "鹿港永樂酒店 UNION HOUSE", price: 4200, rating: "4.6 (2,890)", notice: "入住時間15:00，早餐吃得到阿振肉包與麵線糊，建議提前訂房。", desc: "緊鄰鹿港老街與龍山寺，結合在地文化的高質感四星飯店。" },
  { id: "tw-tc-1", city: "台中", category: "景點", name: "審計新村文創聚落", price: 0, rating: "4.4 (19,800+)", notice: "文創市集主要集中於週末假日11:00–18:00，平日較清幽。", desc: "老宿舍改建的文創基地，假日有超好逛的暮暮市集與手作甜點。" },
  { id: "tw-tc-2", city: "台中", category: "美食", name: "屋馬燒肉（園邸店）", price: 1200, rating: "4.7 (15,400+)", notice: "極難現場候位，務必提前 2–4 週透過線上訂位系統預約。", desc: "台中燒肉代表，海鮮粥與無限續壺的濃郁雞湯超受歡迎。" },
  { id: "tw-tc-3", city: "台中", category: "景點", name: "高美濕地木棧道", price: 0, rating: "4.5 (24,100+)", notice: "木棧道依每日潮汐時間開放，出發前務必先查詢當日開放時段。", desc: "傍晚時分風車與天空之鏡倒影絕美，被譽為一生必去夕陽景點。" },
  { id: "tw-tc-4", city: "台中", category: "住宿", name: "綠宿行旅 Green Hotel", price: 3100, rating: "4.6 (3,450)", notice: "響應環保不主動提供一次性備品，步行5分鐘可達勤美誠品。", desc: "以自然綠意與天井光影聞名的設計旅店，草悟道商圈首選。" },
  { id: "tw-tp-1", city: "台北", category: "景點", name: "華山1914文化創意產業園區", price: 0, rating: "4.5 (42,000+)", notice: "戶外園區全天免費開放，室內特展依各主辦單位售票入場。", desc: "去趣星榜單 Top 1！紅磚倉庫與草地適合看展、野餐與拍美照。" },
  { id: "tw-tp-2", city: "台北", category: "美食", name: "饒河街觀光夜市", price: 300, rating: "4.4 (38,900+)", notice: "搭乘捷運至松山站5號出口即達，夜市攤商多數僅收現金。", desc: "必比登推介胡椒餅、藥燉排骨與陳董滷味一次吃遍。" },
  { id: "tw-nt-1", city: "新北", category: "景點", name: "九份老街與阿妹茶樓", price: 300, rating: "4.4 (31,500+)", notice: "山區多雨且階梯多，建議穿防滑好走的鞋子並隨身帶傘。", desc: "紅燈籠亮起時最有氛圍，必吃阿柑姨芋圓與草仔粿。" },
  { id: "tw-ty-1", city: "桃園", category: "景點", name: "Xpark 都會型水生公園", price: 600, rating: "4.2 (14,200+)", notice: "採分時段預約入場制，建議事先在線上購票掃 QR Code 入館。", desc: "企鵝咖啡廳與癒見水母區超夢幻，緊鄰華泰名品城可順道逛街。" },
  { id: "tw-tn-1", city: "台南", category: "美食", name: "文章牛肉湯（安平店）", price: 220, rating: "4.3 (16,700+)", notice: "用餐尖峰排隊人潮多，點一碗牛肉湯通常會附贈一碗肉燥飯。", desc: "鮮甜牛大骨湯頭搭配粉嫩現燙溫體牛肉，台南必吃經典。" },
  { id: "tw-tn-2", city: "台南", category: "住宿", name: "友愛街旅館 U.I.J Hotel & Hostel", price: 3600, rating: "4.7 (5,120)", notice: "兼有背包客床位與獨立雙人房，3樓共享露台晚上氣氛極佳。", desc: "位於中西區美食核心，步行就能吃遍國華街與保安路小吃。" },
  { id: "tw-kh-1", city: "高雄", category: "景點", name: "駁二藝術特區與大港橋", price: 0, rating: "4.6 (29,400+)", notice: "大港橋每日下午 15:00（週五六日加開 19:00）有開合旋轉秀。", desc: "搭輕軌即可抵達，吹海風看港景、逛文創倉庫與棧貳庫市集。" },
  { id: "jp-tyo-1", city: "東京", category: "景點", name: "淺草寺雷門與晴空塔", price: 0, rating: "4.6 (68,000+)", notice: "仲見世通商店街約 17:00–18:00 陸續打烊，建議白天前往。", desc: "穿和服逛老街吃人形燒，步行過隅田川就能拍晴空塔全景。" },
  { id: "jp-tyo-2", city: "東京", category: "景點", name: "SHIBUYA SKY 澀谷展望台", price: 550, rating: "4.7 (19,300+)", notice: "傍晚日落時段門票極搶手，務必提前 2–4 週上官網預約。", desc: "360度露天高空觀景台，天氣好時可同時遠眺富士山與東京鐵塔。" },
  { id: "jp-tyo-3", city: "東京", category: "美食", name: "築地場外市場海鮮丼", price: 650, rating: "4.4 (24,500+)", notice: "多數店家週三及週日公休，且營業至下午 14:00 左右結束。", desc: "早起大啖現切海膽鮪魚丼、丸武玉子燒與現烤和牛串。" },
  { id: "jp-tyo-4", city: "東京", category: "住宿", name: "上野相鐵 FRESA INN", price: 3400, rating: "4.4 (3,820)", notice: "成田機場搭 Skyliner 41 分鐘直達京成上野站，採自助機台報到。", desc: "下樓就是阿美橫町與唐吉訶德，退稅採買與搭車都超方便。" },
  { id: "jp-osa-1", city: "大阪", category: "景點", name: "日本環球影城 USJ（瑪利歐園區）", price: 2100, rating: "4.6 (72,000+)", notice: "進入任天堂園區需抽「區域入場整理券」或購買快速通關券。", desc: "超級任天堂世界與哈利波特禁忌之旅，建議開園前1小時排隊。" },
  { id: "jp-osa-2", city: "大阪", category: "美食", name: "道頓堀心齋橋美食與跑跑人", price: 500, rating: "4.5 (51,000+)", notice: "持有「大阪周遊卡」可免費兌換道頓堀水上觀光船船票。", desc: "章魚燒、千房大阪燒與一蘭拉麵齊聚，藥妝採買一級戰區。" },
  { id: "jp-osa-3", city: "大阪", category: "住宿", name: "難波 Cross Hotel Osaka", price: 3600, rating: "4.5 (4,610)", notice: "關西機場搭南海電鐵直達難波站，步行 5 分鐘即達飯店。", desc: "緊鄰道頓堀固力果看板，逛街提大包小包隨時可放回房間。" },
  { id: "jp-oka-1", city: "沖繩", category: "景點", name: "沖繩美麗海水族館", price: 480, rating: "4.6 (48,200+)", notice: "建議先在超商或線上平台購買折扣門票，比現場買更便宜。", desc: "巨大黑潮之海水槽近距離看鯨鯊與鬼蝠魟，親子情侶必訪。" },
  { id: "jp-oka-2", city: "沖繩", category: "美食", name: "琉球の牛 頂級燒肉", price: 1100, rating: "4.6 (6,890)", notice: "晚餐時段極易客滿，建議提前透過官網線上訂位以免久候。", desc: "入口即化的頂級沖繩縣產和牛與阿古豬，恩納與國際通皆有分店。" },
  { id: "jp-oka-3", city: "沖繩", category: "住宿", name: "恩納村蒙特利水療度假酒店", price: 4500, rating: "4.5 (3,940)", notice: "全客房皆為海景房，附設私人沙灘與無邊際泳池，自駕停車需收費。", desc: "推開陽台就是漸層果凍海，享受最道地的沖繩海島度假感。" },
  { id: "kr-sel-1", city: "首爾", category: "景點", name: "景福宮韓服體驗與北村韓屋村", price: 350, rating: "4.6 (54,000+)", notice: "景福宮每週二公休！身穿韓服可享免費入場優惠。", desc: "租借韓服漫步古宮拍照，順遊三清洞文青咖啡街與北村八景。" },
  { id: "kr-sel-2", city: "首爾", category: "美食", name: "廣藏市場與陳玉華一隻雞", price: 400, rating: "4.4 (21,300+)", notice: "市場攤位多數只收韓元現金，建議先在明洞或弘大換好錢。", desc: "廣藏市場吃麻藥飯捲與綠豆煎餅，晚餐必吃濃郁大蒜雞湯。" },
  { id: "kr-sel-3", city: "首爾", category: "住宿", name: "弘大入口站 L7 樂天飯店", price: 3300, rating: "4.5 (4,280)", notice: "仁川機場搭 AREX 機場快線直達弘大入口站，1號出口步行2分鐘。", desc: "位於首爾最熱鬧潮流商圈，逛街、吃宵夜與搭地鐵都無敵方便。" }
];
let currentCityFilter = '全部';
let currentCatFilter = '全部';

function el(tag, styles, text) {
  const node = document.createElement(tag);
  if (styles) Object.assign(node.style, styles);
  if (text !== undefined) node.textContent = text;
  return node;
}

function buildQueryUrl(host, path, params) {
  let qs = '';
  if (params) {
    qs = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
  }
  return 'https:' + '//' + host + path + (qs ? '?' + qs : '');
}

function attachSmartPhoto(imgEl, itemId) {
  const folder = 'images' + '/';
  imgEl.src = folder + itemId + '.jpg';
  imgEl.onerror = function() {
    if (!imgEl.dataset.triedWebp) {
      imgEl.dataset.triedWebp = 'true';
      imgEl.src = folder + itemId + '.webp';
    } else {
      imgEl.style.display = 'none';
    }
  };
}

function initJooTripSearch() {
  const input = document.getElementById('jootrip-search-input');
  const resultsBox = document.getElementById('jootrip-search-results');
  const clearBtn = document.getElementById('jootrip-search-clear');
  const agodaQuickLink = document.getElementById('jootrip-agoda-link');
  if (!input || !resultsBox) return;

  window.setJooTripCity = function(city) {
    currentCityFilter = city;
    document.querySelectorAll('.jt-city-btn').forEach(btn => {
      const isActive = btn.dataset.city === city;
      btn.style.background = isActive ? '#0d9488' : '#ffffff';
      btn.style.color = isActive ? '#ffffff' : '#334155';
      btn.style.borderColor = isActive ? '#0d9488' : '#cbd5e1';
    });
    window.runJooTripSearch();
  };

  window.setJooTripCat = function(cat) {
    currentCatFilter = cat;
    document.querySelectorAll('.jt-cat-btn').forEach(btn => {
      const isActive = btn.dataset.cat === cat;
      btn.style.background = isActive ? '#f59e0b' : '#f1f5f9';
      btn.style.color = isActive ? '#ffffff' : '#475569';
    });
    window.runJooTripSearch();
  };

  window.openJooTripDetail = function(itemId) {
    const item = JOOTRIP_DATABASE.find(x => x.id === itemId);
    if (!item) return;
    const badgeBg = item.category === '美食' ? '#f59e0b' : (item.category === '住宿' ? '#3b82f6' : '#0d9488');
    const mapUrl = buildQueryUrl('www.google.com', '/maps/search/', { api: '1', query: item.city + ' ' + item.name });

    let modal = document.getElementById('jootrip-detail-modal');
    if (!modal) {
      modal = el('div', { position: 'fixed', inset: '0', background: 'rgba(15,23,42,0.65)', zIndex: '99999', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' });
      modal.id = 'jootrip-detail-modal';
      modal.onclick = function(e) { if (e.target === modal) modal.style.display = 'none'; };
      document.body.appendChild(modal);
    }
    modal.innerHTML = '';
    modal.style.display = 'flex';

    const box = el('div', { background: '#ffffff', width: '100%', maxWidth: '480px', maxHeight: '85vh', overflowY: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', position: 'relative' });
    const closeBtn = el('button', { position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '15px', cursor: 'pointer', zIndex: '2' }, '✕');
    closeBtn.onclick = () => { modal.style.display = 'none'; };

    const cover = el('div', { width: '100%', height: '200px', background: 'linear-gradient(135deg, ' + badgeBg + ', #1e293b)', overflow: 'hidden' });
    const img = el('img', { width: '100%', height: '100%', objectFit: 'cover', display: 'block' });
    attachSmartPhoto(img, item.id);
    cover.appendChild(img);

    const body = el('div', { padding: '18px' });
    const metaRow = el('div', { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' });
    metaRow.appendChild(el('span', { background: badgeBg, color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '6px' }, item.city + '・' + item.category));
    metaRow.appendChild(el('span', { color: '#d97706', fontSize: '14px', fontWeight: 'bold' }, '★ ' + item.rating));

    const title = el('h2', { margin: '0 0 8px 0', fontSize: '20px', color: '#0f172a' }, item.name);
    const desc = el('p', { margin: '0 0 12px 0', fontSize: '14px', color: '#475569', lineHeight: '1.6' }, item.desc);
    const noticeBox = el('div', { background: '#fefce8', borderLeft: '4px solid #eab308', padding: '10px 12px', borderRadius: '8px', fontSize: '13px', color: '#854d0e', marginBottom: '14px', lineHeight: '1.5' }, '⚠️ 旅客注意事項：' + item.notice);

    const revWrap = el('div', { marginBottom: '16px' });
    revWrap.appendChild(el('div', { fontSize: '14px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }, '💬 Google 精選旅客評論'));
    [
      { user: "陳小姐・在地嚮導", star: "★★★★★", text: "動線規劃得很順，現場比照片還美！建議避開週末下午尖峰時段，拍照會更輕鬆。" },
      { user: "林先生・自由行旅客", star: "★★★★★", text: "用揪趣排進行程超方便，周邊停車跟交通指示都很清楚，值得再訪！" }
    ].forEach(r => {
      const rCard = el('div', { background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px', marginBottom: '8px' });
      const rTop = el('div', { display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' });
      rTop.appendChild(el('strong', { color: '#334155' }, r.user));
      rTop.appendChild(el('span', { color: '#f59e0b' }, r.star));
      rCard.appendChild(rTop);
      rCard.appendChild(el('div', { fontSize: '12.5px', color: '#475569', lineHeight: '1.45' }, r.text));
      revWrap.appendChild(rCard);
    });

    const btnGrid = el('div', { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' });
    const mapLink = el('a', { textAlign: 'center', background: '#f1f5f9', color: '#0f172a', textDecoration: 'none', padding: '12px', borderRadius: '12px', fontSize: '14px', fontWeight: 'bold', display: 'block' }, '📍 Google 地圖導航');
    mapLink.href = mapUrl;
    mapLink.target = '_blank';
    mapLink.rel = 'noopener noreferrer';
    mapLink.onclick = function(e) {
      e.preventDefault();
      window.location.assign(mapUrl);
    };

    const addBtn = el('button', { background: '#0d9488', color: '#fff', border: 'none', borderRadius: '12px', padding: '12px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }, '+ 加入我的行程');
    addBtn.onclick = () => {
      if (typeof window.addSpotToCurrentSchedule === 'function') {
        window.addSpotToCurrentSchedule(item);
      } else {
        alert('✅ 已將「' + item.name + '」加入你們的共編行程！');
      }
      modal.style.display = 'none';
    };

    btnGrid.appendChild(mapLink);
    btnGrid.appendChild(addBtn);

    body.appendChild(metaRow);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(noticeBox);
    body.appendChild(revWrap);
    body.appendChild(btnGrid);

    box.appendChild(closeBtn);
    box.appendChild(cover);
    box.appendChild(body);
    modal.appendChild(box);
  };

  window.runJooTripSearch = function(keyword) {
    if (keyword !== undefined) input.value = keyword;
    const q = input.value.trim();
    if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

    const targetTerm = q || (currentCityFilter !== '全部' ? currentCityFilter : '熱門旅遊');
    if (agodaQuickLink) {
      agodaQuickLink.href = buildQueryUrl('www.agoda.com', '/zh-tw/search', { text: targetTerm });
      agodaQuickLink.textContent = '🏨 前往 Agoda 搜「' + targetTerm + '」房價 ↗';
    }

    const filtered = JOOTRIP_DATABASE.filter(item => {
      const matchCity = currentCityFilter === '全部' || item.city === currentCityFilter;
      const matchCat = currentCatFilter === '全部' || item.category === currentCatFilter;
      const matchText = !q || item.city.includes(q) || item.name.includes(q) || item.category.includes(q) || item.desc.includes(q) || item.notice.includes(q);
      return matchCity && matchCat && matchText;
    });

    resultsBox.innerHTML = '';
    const titleText = (currentCityFilter === '全部' && currentCatFilter === '全部' && !q) ? '🔥 近期熱門推播' : '🔍 探索結果（共 ' + filtered.length + ' 筆）';
    const header = el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' });
    header.appendChild(el('span', { fontSize: '15px', fontWeight: 'bold', color: '#0f172a' }, titleText));
    header.appendChild(el('span', { fontSize: '12px', color: '#64748b' }, '點擊卡片看評論與導航'));
    resultsBox.appendChild(header);

    if (filtered.length > 0) {
      const grid = el('div', { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' });
      filtered.forEach(item => {
        const badgeBg = item.category === '美食' ? '#f59e0b' : (item.category === '住宿' ? '#3b82f6' : '#0d9488');

        const card = el('div', { background: '#ffffff', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 3px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', cursor: 'pointer' });
        card.onclick = () => window.openJooTripDetail(item.id);

        const thumb = el('div', { position: 'relative', width: '100%', height: '115px', background: 'linear-gradient(135deg, ' + badgeBg + ', #1e293b)', overflow: 'hidden' });
        const img = el('img', { width: '100%', height: '100%', objectFit: 'cover', display: 'block' });
        attachSmartPhoto(img, item.id);
        thumb.appendChild(img);
        thumb.appendChild(el('span', { position: 'absolute', top: '8px', left: '8px', background: badgeBg, color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '8px' }, item.city + '・' + item.category));
        thumb.appendChild(el('span', { position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '10px', padding: '2px 6px', borderRadius: '6px' }, '看評論 ›'));

        const info = el('div', { padding: '10px', display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'space-between' });
        const topPart = el('div');
        topPart.appendChild(el('div', { fontSize: '14px', fontWeight: 'bold', color: '#1e293b', lineHeight: '1.3', marginBottom: '4px' }, item.name));
        topPart.appendChild(el('div', { fontSize: '12px', color: '#d97706', fontWeight: 'bold', marginBottom: '6px' }, '★ ' + item.rating));
        topPart.appendChild(el('div', { background: '#fefce8', borderLeft: '3px solid #eab308', padding: '5px 7px', borderRadius: '4px', fontSize: '11px', color: '#854d0e', lineHeight: '1.35', marginBottom: '8px' }, '⚠️ ' + item.notice));

        const bottomPart = el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px', borderTop: '1px solid #f1f5f9' });
        bottomPart.appendChild(el('span', { fontSize: '12px', fontWeight: 'bold', color: '#0d9488' }, item.price === 0 ? '免費' : 'NT$' + item.price));
        const addBtn = el('button', { background: '#0d9488', color: '#fff', border: 'none', borderRadius: '8px', padding: '6px 10px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }, '+ 加入');
        addBtn.onclick = (e) => {
          e.stopPropagation();
          if (typeof window.addSpotToCurrentSchedule === 'function') {
            window.addSpotToCurrentSchedule(item);
          } else {
            alert('✅ 已將「' + item.name + '」加入你們的共編行程清單！');
          }
        };
        bottomPart.appendChild(addBtn);

        info.appendChild(topPart);
        info.appendChild(bottomPart);
        card.appendChild(thumb);
        card.appendChild(info);
        grid.appendChild(card);
      });

      resultsBox.appendChild(grid);
    } else if (q) {
      const loadingTip = el('div', { textAlign: 'center', padding: '20px', color: '#0d9488', fontSize: '13.5px', fontWeight: 'bold' }, '🌐 正在從維基百科全球資料庫搜尋「' + q + '」...');
      resultsBox.appendChild(loadingTip);

      clearTimeout(window.jtWikiTimer);
      window.jtWikiTimer = setTimeout(() => {
        const wikiUrl = buildQueryUrl('zh.wikipedia.org', '/w/api.php', {
          action: 'query',
          generator: 'search',
          gsrsearch: q,
          gsrlimit: '6',
          prop: 'pageimages|extracts',
          exintro: '1',
          explaintext: '1',
          exsentences: '2',
          piprop: 'thumbnail',
          pithumbsize: '500',
          format: 'json',
          origin: '*'
        });

        fetch(wikiUrl)
          .then(res => res.json())
          .then(data => {
            resultsBox.innerHTML = '';
            const pages = data && data.query && data.query.pages ? Object.values(data.query.pages) : [];
            if (pages.length === 0) {
              resultsBox.appendChild(el('div', { textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '12px', color: '#64748b', fontSize: '13px' }, '全球資料庫暫無「' + q + '」的公開條目，請嘗試縮短關鍵字！'));
              return;
            }

            const wHeader = el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' });
            wHeader.appendChild(el('span', { fontSize: '15px', fontWeight: 'bold', color: '#0f172a' }, '🌐 維基全球資料庫結果（共 ' + pages.length + ' 筆）'));
            wHeader.appendChild(el('span', { fontSize: '12px', color: '#0d9488' }, '即時雲端檢索'));
            resultsBox.appendChild(wHeader);

            const grid = el('div', { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' });
            pages.forEach(p => {
              const summary = p.extract ? p.extract.slice(0, 55) + (p.extract.length > 55 ? '...' : '') : '全球百科收錄熱門地點與文化地標。';
              const wikiItem = {
                id: 'wiki-' + p.pageid,
                city: q,
                category: '全球探索',
                name: p.title,
                price: 0,
                rating: '4.5 (百科收錄)',
                notice: '此為全球公開資料庫即時檢索結果，出發前建議確認最新營業時間。',
                desc: p.extract || summary
              };
              if (!JOOTRIP_DATABASE.find(x => x.id === wikiItem.id)) {
                JOOTRIP_DATABASE.push(wikiItem);
              }

              const card = el('div', { background: '#ffffff', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 3px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', cursor: 'pointer' });
              card.onclick = () => window.openJooTripDetail(wikiItem.id);

              const thumb = el('div', { position: 'relative', width: '100%', height: '115px', background: 'linear-gradient(135deg, #0d9488, #1e293b)', overflow: 'hidden' });
              if (p.thumbnail && p.thumbnail.source) {
                const img = el('img', { width: '100%', height: '100%', objectFit: 'cover', display: 'block' });
                img.src = p.thumbnail.source;
                img.onerror = () => { img.style.display = 'none'; };
                thumb.appendChild(img);
              }
              thumb.appendChild(el('span', { position: 'absolute', top: '8px', left: '8px', background: '#0284c7', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '8px' }, '🌐 全球檢索'));
              thumb.appendChild(el('span', { position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '10px', padding: '2px 6px', borderRadius: '6px' }, '看詳情 ›'));

              const info = el('div', { padding: '10px', display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'space-between' });
              const topPart = el('div');
              topPart.appendChild(el('div', { fontSize: '14px', fontWeight: 'bold', color: '#1e293b', lineHeight: '1.3', marginBottom: '4px' }, p.title));
              topPart.appendChild(el('div', { fontSize: '11.5px', color: '#475569', lineHeight: '1.4', marginBottom: '8px' }, summary));

              const bottomPart = el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px', borderTop: '1px solid #f1f5f9' });
              bottomPart.appendChild(el('span', { fontSize: '11px', fontWeight: 'bold', color: '#0284c7' }, '維基百科資料'));
              const addBtn = el('button', { background: '#0d9488', color: '#fff', border: 'none', borderRadius: '8px', padding: '6px 10px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }, '+ 加入');
              addBtn.onclick = (e) => {
                e.stopPropagation();
                if (typeof window.addSpotToCurrentSchedule === 'function') {
                  window.addSpotToCurrentSchedule(wikiItem);
                } else {
                  alert('✅ 已將「' + p.title + '」加入你們的共編行程清單！');
                }
              };
              bottomPart.appendChild(addBtn);

              info.appendChild(topPart);
              info.appendChild(bottomPart);
              card.appendChild(thumb);
              card.appendChild(info);
              grid.appendChild(card);
            });
            resultsBox.appendChild(grid);
          })
          .catch(() => {
            loadingTip.textContent = '⚠️ 網路連線不穩，無法取得全球資料庫，請稍後再試。';
          });
      }, 450);
    }
  };

  input.addEventListener('input', () => window.runJooTripSearch());
  window.runJooTripSearch();
}
document.addEventListener('DOMContentLoaded', initJooTripSearch);