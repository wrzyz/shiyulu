/* 时令笺：二十四节气短笺，按日期自动定位当前节气，可切换浏览并拾取对应分类的句子。 */
const solarTerms=[
 {name:'小寒',m:1,d:6,label:'岁末 · 一月',cn:'最冷的日子，适合把心里的火拨旺一点。',tip:'给通讯录里最想念的人发条消息',cat:'勇气'},
 {name:'大寒',m:1,d:20,label:'岁末 · 一月',cn:'冰点之下，所有悄悄发生的好事都在攒着开春的惊喜。',tip:'睡前泡一次脚，把疲惫交给热水',cat:'治愈'},
 {name:'立春',m:2,d:4,label:'早春 · 二月',cn:'风变了方向，事就有了新的开头。',tip:'立一个不为难自己的小目标',cat:'希望'},
 {name:'雨水',m:2,d:19,label:'早春 · 二月',cn:'雨教大地慢下来，也请你别催自己。',tip:'听十分钟雨声，什么都不想',cat:'治愈'},
 {name:'惊蛰',m:3,d:6,label:'仲春 · 三月',cn:'一声春雷是世界的闹钟——该醒的，都醒。',tip:'把拖延已久的第一步迈出去',cat:'勇气'},
 {name:'春分',m:3,d:21,label:'仲春 · 三月',cn:'昼与夜打了个平手，日子正好不偏不倚。',tip:'晒晒被子，顺便晒晒自己',cat:'生活'},
 {name:'清明',m:4,d:5,label:'暮春 · 四月',cn:'山上烟雨，是人间替我们保管思念的日子。',tip:'给走远的亲人写几行字',cat:'时光'},
 {name:'谷雨',m:4,d:20,label:'暮春 · 四月',cn:'雨生百谷，你的努力也在悄悄拔节。',tip:'给阳台的植物浇水',cat:'成长'},
 {name:'立夏',m:5,d:6,label:'初夏 · 五月',cn:'万物至此皆长大——你也是。',tip:'傍晚散步，看晚霞铺满天空',cat:'梦想'},
 {name:'小满',m:5,d:21,label:'初夏 · 五月',cn:'小满未满，是人间最好的刻度。',tip:'记录三件值得感谢的小事',cat:'哲思'},
 {name:'芒种',m:6,d:6,label:'仲夏 · 六月',cn:'有芒之谷可种，忙而不乱是本事。',tip:'列一张清单，把焦虑写下来',cat:'工作'},
 {name:'夏至',m:6,d:21,label:'仲夏 · 六月',cn:'白昼最长的一天，适合把喜欢的事做久一点。',tip:'和重要的人看一次日落',cat:'时光'},
 {name:'小暑',m:7,d:7,label:'季夏 · 七月',cn:'热归热，西瓜要吃冰的，日子要过甜的。',tip:'切一个西瓜，配一部老电影',cat:'生活'},
 {name:'大暑',m:7,d:23,label:'季夏 · 七月',cn:'酷暑是季节的考验，熬过去，秋风已在路上。',tip:'午后小睡二十分钟',cat:'治愈'},
 {name:'立秋',m:8,d:8,label:'初秋 · 八月',cn:'一叶知秋，成长总是先从细微处开始。',tip:'整理这半年的照片与心情',cat:'成长'},
 {name:'处暑',m:8,d:23,label:'初秋 · 八月',cn:'暑气至此而止，心里的燥也该停一停了。',tip:'泡一壶茶，关掉手机一小时',cat:'禅意'},
 {name:'白露',m:9,d:8,label:'仲秋 · 九月',cn:'露从今夜白，夜风开始替你盖被子。',tip:'早睡一次，睡足八小时',cat:'夜晚'},
 {name:'秋分',m:9,d:23,label:'仲秋 · 九月',cn:'昼夜再次均分，提醒你：生活也要劳逸各半。',tip:'清理相册和桌面',cat:'哲思'},
 {name:'寒露',m:10,d:8,label:'深秋 · 十月',cn:'露寒了，别忘了提醒家人添衣。',tip:'给家里打一通不谈事的电话',cat:'亲情'},
 {name:'霜降',m:10,d:23,label:'深秋 · 十月',cn:'霜落无声，岁月也是——善待每个平常日子。',tip:'手写一封信或一张卡片',cat:'时光'},
 {name:'立冬',m:11,d:7,label:'初冬 · 十一月',cn:'收藏起秋天的收获，冬天适合把自己养好。',tip:'炖一锅热汤',cat:'治愈'},
 {name:'小雪',m:11,d:22,label:'初冬 · 十一月',cn:'天冷了，正好和朋友围一桌热气。',tip:'约朋友吃一顿火锅',cat:'友谊'},
 {name:'大雪',m:12,d:7,label:'仲冬 · 十二月',cn:'雪把世界调成了静音，正好听见自己。',tip:'一个人散步，踩踩落叶',cat:'孤独'},
 {name:'冬至',m:12,d:22,label:'仲冬 · 十二月',cn:'最长夜过后，光会一天天回来；饺子要趁热。',tip:'和家人吃一顿团圆饭',cat:'亲情'}
];

(function initSolarTerms(){
  const escLocal=(typeof esc==='function')?esc:(t=>String(t));
  const now=new Date();
  const md=(now.getMonth()+1)*100+now.getDate();
  let current=solarTerms[solarTerms.length-1];
  for(const t of solarTerms){ if(md>=t.m*100+t.d) current=t; }
  let active=current.name;

  function renderCard(){
    const host=document.querySelector('#termCard');
    if(!host) return;
    const t=solarTerms.find(x=>x.name===active);
    const isNow=t.name===current.name;
    host.innerHTML=`<div class="term-main">
        <span class="term-stamp">${isNow?'现在':'节气'}</span>
        <div class="term-name-wrap"><b class="term-name">${escLocal(t.name)}</b><span class="term-date">${escLocal(t.label)} · ${t.m}月${t.d}日前后</span></div>
        <blockquote class="term-cn">${escLocal(t.cn)}</blockquote>
        <p class="term-tip"><span>这时节，宜</span>${escLocal(t.tip)}。</p>
      </div>
      <div class="term-side">
        <span class="term-side-label">SOLAR TERM · ${escLocal(t.name).toUpperCase()}</span>
        <p>把时节过成日子，把日子过成句子。</p>
        <button class="term-pick" type="button">拾起 · ${escLocal(t.cat)}的句子 <b>↗</b></button>
      </div>`;
    const btn=host.querySelector('.term-pick');
    if(btn&&!btn.dataset.bound){
      btn.dataset.bound='1';
      btn.addEventListener('click',()=>{
        const card=document.querySelector(`.category-card[data-category="${t.cat}"]`);
        if(card) card.click();
        const col=document.querySelector('#collection');
        if(col) window.scrollTo({top:col.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'});
      });
    }
  }
  function renderChips(){
    const host=document.querySelector('#termGrid');
    if(!host) return;
    host.innerHTML=solarTerms.map(t=>`<button type="button" class="term-chip${t.name===active?' active':''}${t.name===current.name?' now':''}" data-term="${escLocal(t.name)}"><b>${escLocal(t.name)}</b><span>${t.m}/${t.d}${t.name===current.name?' · 现在':''}</span></button>`).join('');
  }
  function bind(){
    const grid=document.querySelector('#termGrid');
    if(!grid||grid.dataset.bound) return;
    grid.dataset.bound='1';
    grid.addEventListener('click',e=>{
      const chip=e.target.closest('.term-chip');
      if(!chip) return;
      active=chip.dataset.term;
      renderCard();renderChips();
    });
  }
  renderCard();renderChips();bind();
})();
