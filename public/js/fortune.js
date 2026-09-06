/* 今日一签：24 支温暖签文，每天按日期固定一签，可再抽随机签。 */
const fortuneSticks=[
 {no:1,title:'春信',text:'风从南边来，好消息在路上。',solve:'你最近等的那件事，正在悄悄靠近。别催，把今天过稳。',do:'宜散步',dont:'忌多想'},
 {no:2,title:'晚灯',text:'有人为你留了一盏灯，天黑也走得稳。',solve:'被惦记是一种隐形的力量，今晚记得回应那份牵挂。',do:'宜报平安',dont:'忌晚归'},
 {no:3,title:'热茶',text:'事情再急，也急不过一杯温热的茶。',solve:'先照顾好手温，再照顾好事情。你稳了，局面就稳了。',do:'宜慢用',dont:'忌赶路'},
 {no:4,title:'纸船',text:'放出去的心事，不必一条条追回来。',solve:'有些担忧说出口、写下来，就可以顺水放走。',do:'宜倾诉',dont:'忌硬扛'},
 {no:5,title:'晒被',text:'把发潮的日子拿到太阳底下翻个面。',solve:'换洗床单、开窗通风、出门晒十分钟——运气从清爽开始。',do:'宜整理',dont:'忌闷屋'},
 {no:6,title:'绿芽',text:'土里没动静，不代表根没努力。',solve:'你最近看不到的付出，正在地下扎根。继续浇灌。',do:'宜坚持',dont:'忌否定自己'},
 {no:7,title:'顺风',text:'今天适合开口，风会替你把话送到。',solve:'憋了很久的那句话，今天说出口，阻力最小。',do:'宜表达',dont:'忌拖延'},
 {no:8,title:'旧友',text:'一句「在吗」，能接上一整段岁月。',solve:'想起谁就联系谁吧，老朋友那边，一直给你留着座。',do:'宜叙旧',dont:'忌客气'},
 {no:9,title:'晚霞',text:'忙不是错，错过今天的晚霞才可惜。',solve:'抬头三分钟，你会发现生活一直在给你发糖。',do:'宜抬头',dont:'忌埋头'},
 {no:10,title:'暖炉',text:'冷是暂时的，你身上有自己发热的零件。',solve:'眼前的难关冻不坏你，你的热情就是随身携带的炉子。',do:'宜自信',dont:'忌自我怀疑'},
 {no:11,title:'站台',text:'错过一班不要紧，你要去的地方总有车。',solve:'这次没赶上，不是命运的拒绝，是让你等一趟更好的。',do:'宜耐心',dont:'忌钻牛角尖'},
 {no:12,title:'煮面',text:'深夜的一碗面，胜过一千句道理。',solve:'照顾好胃，情绪就稳了一半。今晚给自己煮点热的。',do:'宜好好吃饭',dont:'忌将就'},
 {no:13,title:'顺风车',text:'有人顺路，就别一个人硬走夜路。',solve:'开口求助不丢人，接受好意也是一种能力。',do:'宜求助',dont:'忌逞强'},
 {no:14,title:'存钱罐',text:'今天的每一分认真，都在给明天上锁。',solve:'你看不见回报的那些坚持，都在给未来的你攒底气。',do:'宜记账',dont:'忌比较'},
 {no:15,title:'旧书',text:'重读一页旧时光，会有新的批注。',solve:'过去的事再翻一遍，你已不是当年那个读者，答案自现。',do:'宜回忆',dont:'忌自责'},
 {no:16,title:'风筝',text:'线在你手里，天空不会跑。',solve:'梦想放得再远也断不了，该收收，该放放，主动权在你。',do:'宜规划',dont:'忌心慌'},
 {no:17,title:'雨停',text:'雨停之前，先学会欣赏屋檐的风景。',solve:'等不来的天晴，就先享受此刻的安静，雨会自己走。',do:'宜休息',dont:'忌硬闯'},
 {no:18,title:'回头',text:'身后那声喊你的，都是善意。',solve:'有人关心你的近况，别嫌烦，那是你人缘的存款。',do:'宜回应',dont:'忌冷淡'},
 {no:19,title:'口袋',text:'摸摸口袋，除了钥匙还有一点甜。',solve:'今天适合给自己买个小东西，日子需要一点点甜头续命。',do:'宜犒劳自己',dont:'忌亏待自己'},
 {no:20,title:'萤火',text:'光不大，但足够让夜里的人安心。',solve:'你的善意比你想的更亮，今天照谁一下，都会被记住。',do:'宜善良',dont:'忌计较'},
 {no:21,title:'新鞋',text:'换条路走，风景会替你翻新。',solve:'最近的闷，来自走腻了的路线。换一条上班路，换一种心情。',do:'宜尝新',dont:'忌守旧'},
 {no:22,title:'月亮',text:'月亮圆缺都有人喜欢，何况是你。',solve:'不必等「状态最好的自己」才出场，此刻的你就值得被喜欢。',do:'宜自洽',dont:'忌挑剔自己'},
 {no:23,title:'闹钟',text:'明天叫醒你的不是焦虑，是期待。',solve:'睡前把明天安排一件小期待，起床就有理由不赖床。',do:'宜早睡',dont:'忌熬夜'},
 {no:24,title:'万事',text:'此签大吉：万事遂心，福至心灵。',solve:'难得的顺遂日，把搁置的事推进一步，好运会对认真的人加倍。',do:'宜行动',dont:'忌犹豫'}
];
(function initFortune(){
  const escLocal=(typeof esc==='function')?esc:(t=>String(t));
  function pickByDate(){
    const now=new Date();
    const seed=now.getFullYear()*372+now.getMonth()*31+now.getDate();
    return fortuneSticks[seed%fortuneSticks.length];
  }
  function renderStick(stick,isDaily){
    const host=document.querySelector('#fortuneResult');
    if(!host) return;
    host.innerHTML=`<div class="fortune-card">
      <span class="fortune-no">${isDaily?'今日一签':'手气之签'} · 第 ${stick.no} 签</span>
      <b class="fortune-title">${escLocal(stick.title)}</b>
      <blockquote class="fortune-text">「${escLocal(stick.text)}」</blockquote>
      <p class="fortune-solve">${escLocal(stick.solve)}</p>
      <div class="fortune-tags"><span class="do">${escLocal(stick.do)}</span><span class="dont">${escLocal(stick.dont)}</span></div>
      <div class="fortune-actions">
        <button class="sort-button" id="fortuneAgain" type="button">再抽一支 <span>↻</span></button>
        <button class="sort-button" id="fortuneCopy" type="button">抄下这支签 <span>↗</span></button>
      </div></div>`;
    const again=document.querySelector('#fortuneAgain');
    const copy=document.querySelector('#fortuneCopy');
    if(again) again.addEventListener('click',()=>{
      const s=fortuneSticks[Math.floor(Math.random()*fortuneSticks.length)];
      renderStick(s,false);
    });
    if(copy) copy.addEventListener('click',()=>{
      if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(`今日一签 · 第 ${stick.no} 签「${stick.title}」\n${stick.text}\n${stick.solve}\n${stick.do} · ${stick.dont}`).catch(()=>{});
      if(typeof showToast==='function') showToast('签文已抄下');
    });
  }
  function openFortune(){
    const modal=document.querySelector('#fortuneModal');
    if(!modal) return;
    renderStick(pickByDate(),true);
    modal.showModal();
  }
  document.querySelector('#fortuneBtn')?.addEventListener('click',openFortune);
  document.querySelector('#fortuneOpen2')?.addEventListener('click',openFortune);
  window.openFortune=openFortune;
})();
