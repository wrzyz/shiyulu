/* 沉浸阅读（禅模式）：全屏暖色背景，自动轮播随机语录，Esc 退出。 */
(function initZenMode(){
  function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  let pool=[],idx=0,timer=null,typing=false,paused=false;

  function ensureOverlay(){
    let overlay=document.querySelector('#zenOverlay');
    if(overlay) return overlay;
    overlay=document.createElement('div');
    overlay.id='zenOverlay';
    overlay.className='zen-overlay';
    overlay.setAttribute('aria-hidden','true');
    overlay.innerHTML=`<button class="zen-close" type="button" aria-label="退出沉浸模式" title="退出 (Esc)">×</button>
      <div class="zen-stage"><p class="zen-quote" id="zenQuote"></p><p class="zen-en" id="zenEn"></p><p class="zen-from" id="zenFrom"></p></div>
      <div class="zen-foot">
        <span class="zen-index" id="zenIndex"></span>
        <div class="zen-actions">
          <button class="zen-act" id="zenSave" type="button">♡ 收藏</button>
          <button class="zen-act" id="zenPause" type="button">暂停</button>
          <button class="zen-act" id="zenNext" type="button">换一句 ↻</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.zen-close').addEventListener('click',closeZen);
    overlay.querySelector('#zenNext').addEventListener('click',()=>{showZen(true)});
    overlay.querySelector('#zenPause').addEventListener('click',e=>{
      paused=!paused;
      e.currentTarget.textContent=paused?'继续':'暂停';
    });
    overlay.querySelector('#zenSave').addEventListener('click',e=>{
      const q=pool[idx];
      if(!q) return;
      if(typeof toggleSave==='function'){toggleSave(q.id);}
      const savedNow=(typeof saved!=='undefined')&&saved.includes(q.id);
      e.currentTarget.innerHTML=(savedNow?'♥ 已收藏':'♡ 收藏');
    });
    return overlay;
  }

  function typeText(el,text){
    el.textContent='';
    typing=true;
    let i=0;
    const step=()=>{ if(!typing) return;
      i+=1; el.textContent=text.slice(0,i);
      if(i<text.length) setTimeout(step,52); else typing=false;
    };
    step();
  }

  function showZen(manual){
    const overlay=ensureOverlay();
    if(!pool.length||manual){ if(!pool.length||pool.length-idx<=1){pool=shuffle((typeof quotes!=='undefined')?quotes:[]);idx=0;} }
    const q=pool[idx%pool.length];
    if(!q) return;
    const quoteEl=overlay.querySelector('#zenQuote');
    const enEl=overlay.querySelector('#zenEn');
    const fromEl=overlay.querySelector('#zenFrom');
    overlay.querySelector('.zen-stage').classList.remove('zen-in');
    void overlay.offsetWidth;
    overlay.querySelector('.zen-stage').classList.add('zen-in');
    typeText(quoteEl,q.cn);
    enEl.textContent=q.en;
    fromEl.textContent=(q.from?`出处 · ${q.from}`:`拾语录 · ${q.category} · ${q.tag}`);
    const saveBtn=overlay.querySelector('#zenSave');
    const savedNow=(typeof saved!=='undefined')&&saved.includes(q.id);
    saveBtn.innerHTML=savedNow?'♥ 已收藏':'♡ 收藏';
    overlay.querySelector('#zenIndex').textContent=`${String((idx%pool.length)+1).padStart(2,'0')} / ${pool.length}`;
    idx=(idx+1)%pool.length;
    clearTimeout(timer);
    if(!paused) timer=setTimeout(()=>showZen(false),9000);
  }

  function openZen(){
    const overlay=ensureOverlay();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.documentElement.classList.add('zen-open');
    idx=0;pool=shuffle((typeof quotes!=='undefined')?quotes:[]);paused=false;
    showZen(false);
  }
  function closeZen(){
    const overlay=document.querySelector('#zenOverlay');
    if(!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.documentElement.classList.remove('zen-open');
    typing=false;
    clearTimeout(timer);
  }

  window.openZen=openZen;
  window.closeZen=closeZen;
  document.querySelector('#zenBtn')?.addEventListener('click',openZen);
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&document.querySelector('#zenOverlay.open')) closeZen();
  });
  /* 故事朗读：在故事弹窗内注入「朗读这篇」按钮 */
  const storyModal=document.querySelector('#storyModal');
  if(storyModal&&'speechSynthesis' in window){
    let storySpeech=null;
    const ensureBtn=()=>{
      if(!storyModal.open) return;
      const collect=storyModal.querySelector('#storyModalCollect');
      if(!collect||storyModal.querySelector('#storyListen')) return;
      const btn=document.createElement('button');
      btn.className='form-submit';
      btn.id='storyListen';
      btn.type='button';
      btn.innerHTML='朗读这篇 <span>♪</span>';
      btn.addEventListener('click',()=>{
        const body=storyModal.querySelector('#storyModalBody');
        if(!body) return;
        if(storySpeech){try{speechSynthesis.cancel()}catch(e){};storySpeech=null;btn.innerHTML='朗读这篇 <span>♪</span>';return}
        const u=new SpeechSynthesisUtterance(body.innerText.slice(0,1200));
        u.lang='zh-CN';u.rate=.92;
        u.onend=()=>{storySpeech=null;btn.innerHTML='朗读这篇 <span>♪</span>'};
        speechSynthesis.speak(u);
        storySpeech=u;
        btn.innerHTML='停止朗读 <span>■</span>';
      });
      collect.parentNode.insertBefore(btn,collect);
    };
    new MutationObserver(ensureBtn).observe(storyModal,{attributes:true,attributeFilter:['open']});
  }
})();
