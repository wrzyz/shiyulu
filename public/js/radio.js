/* 拾光电台：深夜独白与人间信箱，全部支持朗读与复制。 */
const radioEpisodes=[
 {id:'ep1',no:'R·01',topic:'失眠',cat:'治愈',minutes:2,text:'凌晨两点还醒着的朋友，今晚的电波只为你一个人打开。不用数羊，也不用逼自己睡。你可以把白天没说的话，在心里慢慢过一遍——那件没做好的事、那句没接住的话，它们不是你的错，只是今天的份量重了一点。把台灯调暗，把手机扣过去，听我说：你已经很努力了，剩下的，交给枕头和明天。风会把你的心事带远的，放心睡吧。'},
 {id:'ep2',no:'R·02',topic:'加班',cat:'生活',minutes:2,text:'写字楼的灯一盏盏熄了，你的那盏还亮着。我知道你不是喜欢加班，你只是不想让在乎的事掉在地上。但今晚我想提醒你一句：文件可以明天改，外卖要趁热吃，脖子要记得转一转。工作是把日子过好的工具，别让它反过来把你用旧。回家的路上买一杯热的，抬头看看月亮——它也在加班，但它从不焦虑，因为它知道自己发光就够。'},
 {id:'ep3',no:'R·03',topic:'失恋',cat:'治愈',minutes:3,text:'心里空了一块的朋友，今晚不劝你想开。想不开就先不想，难过是爱过的收据，你可以慢慢读。我还想告诉你一件事：那个人的离开，并没有拿走你被爱的资格。你还是会被认真对待，还是可以理直气壮地喜欢别人，也理直气壮地喜欢自己。哭完了记得喝口温水。等哪天你再想起这段日子，不再心口发紧，而是轻轻叹一口气，那时你就自由了。不着急，我们电台每晚都在。'},
 {id:'ep4',no:'R·04',topic:'想家',cat:'亲情',minutes:2,text:'在外面的第几年了？你嘴上说着这边挺好的，但我知道，你只是把想念调成了静音。今晚不妨破个例，给家里打个电话，不聊工作，不聊工资，就问问妈妈最近的血压，问爸爸的茶还够不够。你会发现，他们等的从来不是你混出什么样子，是你那句「我挺好的」，和你偶尔的碎碎念。家不在远方，家在你拿起电话的那一秒，就到了。'},
 {id:'ep5',no:'R·05',topic:'社恐',cat:'成长',minutes:2,text:'聚会提前离场的那个，群消息永远不回的那个，我看见你了。你不是不合群，你只是把电量留给了真正重要的人和事。安静不是缺陷，是一种稀缺的能力——这个世界的噪音已经够多了，而你是自带静音键的人。以后遇到热闹，去或不去都可以；但遇到让你舒服的人，请试着多说一句话。你的世界不需要很大，有几个能一起安静的人，就是豪华配置。'},
 {id:'ep6',no:'R·06',topic:'攒钱',cat:'生活',minutes:2,text:'记账软件上那条最长的曲线，是你悄悄努力的样子。我知道你想给生活多攒一点底气：一场说走就走的旅行，一次不慌不忙的生病，一份敢说「不」的勇气。今晚想告诉你：省下来的每一块钱都算数，但别把日子省瘦了。该吃的水果要买，该见的朋友要见。存款是安全感的下限，把今天过好，才是生活感的上限。慢慢来，你的小金库和你，都在好好长大。'},
 {id:'ep7',no:'R·07',topic:'变老',cat:'哲思',minutes:2,text:'又长了一岁的朋友，别慌。你害怕的不是变老，是怕辜负时间。可你看，树不会因为多一圈年轮而难过，它只是站得更稳了。二十岁有二十岁的莽撞，三十岁有三十岁的清醒，每个年纪都在负责一种美。那些你以为「来不及」的事——学一样乐器、去一座城市、认真爱一个人——从来没有截止日期。时间的意义不是收走什么，是把更从容的你，送到更好的风景面前。'},
 {id:'ep8',no:'R·08',topic:'没考好',cat:'成长',minutes:2,text:'成绩出来的那个晚上，天没有塌，只是你的心情下雨了。我想陪你坐一会儿。分数能衡量这一次的答卷，衡量不了你这个人的全部：你熬过的夜、你咬牙的瞬间、你心里那股不服输的劲，它们都在，谁也拿不走。人生的考场很多，这一次只是其中一张卷子。收拾好情绪，下次再战；或者换一条路走，条条大路都通向「好好生活」这四个字。你已经很棒了，真的。'},
 {id:'ep9',no:'R·09',topic:'异地',cat:'爱情',minutes:2,text:'隔着屏幕说晚安的两位，今晚的电波替你们牵个线。异地最难的，不是距离，是那些具体到疼的时刻：生病时递不到的一杯水，难过时缺一个的拥抱。但我想说，你们正在做一件了不起的事——用信任对抗地图，用等待练习深情。把想念存进每一次「路上小心」，把耐心花在每一次好好说话。总有一天，跨城的高铁会变成同一个屋檐下的「饭好了」。熬过去，你们就是彼此的终点站。'},
 {id:'ep10',no:'R·10',topic:'告别宠物',cat:'治愈',minutes:3,text:'今晚为抱着空猫窝的你，放一首很轻的歌。它来过这件事，不会因为离开而作废。那些踩着你的肚子上床的清晨、等你回家的脚步声、把毛蹭在你裤腿上的瞬间，都被你好好收着，这就是它的一生——被爱着的一生。动物不像人会说再见，但它用尽全力陪伴过你，你也用尽全力爱过它，这个结已经系得很圆满了。想它的时候，就替它多看看窗外的太阳。它没有走远，它只是换了一种方式，继续赖在你心里。'},
 {id:'ep11',no:'R·11',topic:'三十岁',cat:'成长',minutes:2,text:'三十岁这年，如果你还没活成期待的样子，先别急着给自己打分。谁规定三十岁必须有房有车、事业有成？那些标准是别人印的考卷，不必全对。你可以三十岁刚开始学画画，三十岁才遇到对的人，三十岁重新选一座城市。人生不是火车，错过了这一站就完了；人生是散步，你随时可以停下来买杯咖啡，也可以掉头去更喜欢的方向。三十岁，恭喜你，终于开始按自己的活法来。'},
 {id:'ep12',no:'R·12',topic:'普通',cat:'哲思',minutes:2,text:'最后这一期，送给觉得自己「很普通」的你。没有惊天动地的成就，没有万人瞩目的高光，但你每天按时醒来，认真吃饭，把该扛的责任扛起来，偶尔还分出温柔给别人——这不叫普通，这叫了不起。这世界是由无数个「普通」撑起来的：普通的外卖员送来了热饭，普通的医生守着深夜，普通的你把生活过出了体温。不必发光给谁看，你活着、爱着、努力着，就已经是这颗星球上，不可替代的一道微光。晚安，我们下期再会。'}
];
const mailboxLetters=[
 {id:'m1',from:'总是很累的星星',cat:'成长',q:'你好。我每天都觉得很累，上班、通勤、加班，回到家什么都不想干。看着别人都在进步，只有我在原地打转。是不是我不够努力，也不够好？',a:'亲爱的星星：先抱抱你。一个「原地打转」的人，是不会觉得累的——累恰恰说明你一直在转。你说的「别人都在进步」，多半是朋友圈里的剪辑版，没有人把崩溃和摸鱼发出来。你不是不够好，你只是把自己放进了别人的时区里比较。从今晚开始，试着把「我为什么这么差」换成「我今天做了什么」：做了一顿饭、回了一封邮件、早睡了半小时，都算数。生活的进度条不在别人手里，在自己脚下。'},
 {id:'m2',from:'口香糖',cat:'爱情',q:'我喜欢一个人快两年了，一直不敢说。怕说出口连朋友都做不成，也怕对方其实早就有喜欢的人了。这份喜欢要不要说出口？',a:'亲爱的口香糖：喜欢两年还没说，说明这份感情很重，也说明你把「被拒绝」想得比「错过」更可怕。我们算一笔账：不说，结果是确定的——大概率错过；说了，至少有一半机会换一个确定的答案。被拒绝当然疼，但比起多年后想起「当年差一点就说了」，这点疼是值得的。说之前不需要多隆重，一句真诚的话就够。祝你有勇气，也有好运气。'},
 {id:'m3',from:'半块橡皮',cat:'友谊',q:'我和最好的朋友渐行渐远了。以前无话不谈，现在聊天只剩「哈哈」和表情包。是我做错了什么吗？还是友情本来就会过期？',a:'亲爱的半块橡皮：先说结论——你们都没有做错，这只是两个「人生进度条」在走不同的路。渐行渐远不是背叛，是生活在把你们送往不同的考场。真正的老友情分两种续费方式：一种是天天见面，另一种是关键时刻都在。你可以试着主动一次：不打招呼，直接约她吃顿饭，像从前一样。如果一次约不动就两次。如果确实回不去了，也请把这段友情收进感谢里——它真真切切地陪伴过你，这就够了。'},
 {id:'m4',from:'屋顶的风筝',cat:'亲情',q:'过年回家，爸妈又开始催婚，说什么「再晚就没人要你了」。我知道他们是为我好，但每次听完都特别窒息，有时候会忍不住吵起来。我该怎么办？',a:'亲爱的风筝：爸妈那句话的翻译是「我们怕你以后一个人孤单」，只是这门外语他们说得急了点，听起来像指责。吵架解决不了翻译问题，回避也不行，试试「接住情绪、守住边界」：先接住——「我知道你们担心我」；再守住——「但婚姻是我的大事，我想按自己的节奏来，你们放心，我过得很好」。催婚的背后是牵挂，把牵挂接住了，冲突就小了一半。风筝飞得再远，线在你们俩手里，都别用力过猛。'},
 {id:'m5',from:'一支没水的笔',cat:'成长',q:'工作三年了，工资没涨多少，活倒是越干越多。看着同期都升职的升职、跳槽的跳槽，我很焦虑，又不知道该往哪使劲。',a:'亲爱的笔：先说一个可能有用的视角：工作三年最重要的不是涨了多少工资，而是攒下了什么「可带走的能力」。试着把焦虑写成两张清单——「我会什么」和「我还差什么」。第一张会比你想象的长，这是你的底气；第二张挑一件最值钱的，用三个月去补。跳槽不是逃跑，是带着筹码换筹码。实在没方向时，就把手头的活干到无可挑剔，机会来的时候，是挑「靠谱的人」下手，而不是挑「焦虑的人」。'},
 {id:'m6',from:'安静的演唱会',cat:'成长',q:'我不敢发朋友圈。每次编辑好又删掉，觉得我的生活这么普通，没人想看。有时候很孤独，又不知道跟谁说。',a:'亲爱的演唱会：我想先告诉你一个秘密——朋友圈里那些精彩，都是普通人普通生活的「精选集」，你拿自己的幕后去比别人的台前，当然会输。发不发朋友圈从来不是重点，重点是：你的生活值不值得被你自己记录。值得。今天云很好看、面很好吃、你很难过或者很开心，都可以说。如果觉得没处说，我们电台的信箱永远为你开着。另外，孤独的时候，试着先做自己的观众——为自己鼓掌的人，永远不会冷场。'},
 {id:'m7',from:'没寄出的信',cat:'治愈',q:'爷爷走了三个月了。家里人都在往前走，只有我还会突然想他想到掉眼泪。大家劝我想开点，可我觉得不敢难过，好像难过了就是不坚强。',a:'亲爱的没寄出的信：请允许我认真回答你——三个月，还这么短。悲伤没有截止日期，掉眼泪也不是不坚强，那是因为爱得太满，而接住你的人暂时缺席了。家人往前走，不代表他们不想他，只是每个人消化思念的速度不一样。你可以用自己的方式纪念：把他教你的拿手菜做一遍，把他常坐的椅子的样子画下来，或者像现在这样，把想念写下来。他会知道的。想他的时候不用躲，爱一个离开的人，是可以光明正大的事。'},
 {id:'m8',from:'半颗糖',cat:'爱情',q:'我喜欢上了一个很优秀的人。但我学历一般、长相普通、也没什么拿得出手的成绩。我总觉得配不上，连靠近都不敢。我该怎么办？',a:'亲爱的半颗糖：先纠正一个误区——感情不是擂台赛，不存在「配不配」，只存在「合不合适」。你眼里的「优秀」，是他的一面；而他喜欢一个人时，看的是另一面：跟他在一起舒不舒服、你笑起来的样子、你看待世界的角度。这些都是你身上真实存在的。别急着把自己摆在货架下等人挑选，先把自己活亮堂一点：把日子过好、把喜欢的事做起来。靠近他不是面试，是认识。最坏的结果也不过是做朋友，而最好的结果，从你敢打这声招呼开始。'}
];
(function initRadio(){
  const escLocal=(typeof esc==='function')?esc:(t=>String(t));
  let mode='ep';
  let radioSpeech=null;
  const grid=document.querySelector('#radioGrid');
  if(!grid) return;
  function epCard(e,i){
    return `<article class="radio-card" data-id="${e.id}">
      <div class="radio-top"><span class="radio-no">${escLocal(e.no)}</span><span class="radio-topic">${escLocal(e.topic)}</span><span class="radio-meta">${e.minutes} 分钟 · ${escLocal(e.cat)}</span></div>
      <p class="radio-text">${escLocal(e.text)}</p>
      <div class="radio-actions">
        <button class="radio-btn radio-play" type="button" data-act="play">收听本期 <span>♪</span></button>
        <button class="radio-btn" type="button" data-act="copy">抄进手记 <span>↗</span></button>
      </div></article>`;
  }
  function mailCard(m,i){
    return `<article class="mail-card" data-id="${m.id}">
      <div class="mail-top"><span class="mail-from">来信 · ${escLocal(m.from)}</span><span class="mail-cat">${escLocal(m.cat)}</span></div>
      <blockquote class="mail-q">${escLocal(m.q)}</blockquote>
      <div class="mail-answer"><span class="mail-stamp">拾光回信</span>
      <p class="mail-a">${escLocal(m.a)}</p>
      <div class="radio-actions">
        <button class="radio-btn radio-play" type="button" data-act="play">读给我听 <span>♪</span></button>
        <button class="radio-btn" type="button" data-act="copy">收藏回信 <span>↗</span></button>
      </div></div></article>`;
  }
  function render(){
    if(mode==='ep'){
      grid.innerHTML=radioEpisodes.map(epCard).join('');
    }else{
      grid.innerHTML=mailboxLetters.map(mailCard).join('');
    }
  }
  function stopSpeech(){ if(radioSpeech){try{speechSynthesis.cancel()}catch(e){};radioSpeech=null;} grid.querySelectorAll('.radio-btn.playing').forEach(b=>{b.classList.remove('playing');const s=b.querySelector('span');if(s)s.textContent='♪';}); }
  function bind(){
    grid.addEventListener('click',e=>{
      const btn=e.target.closest('.radio-btn');
      const card=e.target.closest('[data-id]');
      if(!btn||!card) return;
      const act=btn.dataset.act;
      if(mode==='ep'){ var item=radioEpisodes.find(x=>x.id===card.dataset.id); var body=item.text; var label=`拾光电台 ${item.no}《${item.topic}》`; }
      else { var m=mailboxLetters.find(x=>x.id===card.dataset.id); var body=`${m.a}`; var label=`拾光回信 · 回${m.from}`; }
      if(act==='copy'){
        if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(`${label}\n${body}`).catch(()=>{});
        if(typeof showToast==='function') showToast('已复制，收进手记吧');
        return;
      }
      if(act==='play'){
        if(radioSpeech){stopSpeech();return}
        if(!('speechSynthesis' in window)){if(typeof showToast==='function')showToast('当前浏览器不支持朗读');return}
        const u=new SpeechSynthesisUtterance(body);
        u.lang='zh-CN';u.rate=.92;
        u.onend=()=>stopSpeech();
        speechSynthesis.speak(u);radioSpeech=u;
        btn.classList.add('playing');
        const s=btn.querySelector('span');if(s)s.textContent='■';
      }
    });
    document.querySelectorAll('.radio-tab').forEach(t=>t.addEventListener('click',()=>{
      document.querySelectorAll('.radio-tab').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
      mode=t.dataset.mode;
      stopSpeech();render();
      if(typeof observeReveal==='function')observeReveal();
    }));
  }
  render();bind();
})();
