/* 语录日历：一年 365 页每日一签，色块对应当天语录的分类情绪色，点击翻看。 */
(function initCalendar(){
  const escLocal=(typeof esc==='function')?esc:(t=>String(t));
  const catColor=c=>(typeof categoryAccents!=='undefined'&&categoryAccents[c])||(typeof defaultAccent!=='undefined'?defaultAccent:'#8a8a8a');
  const dayIndexFor=(y,m,d)=>Math.floor(Date.UTC(y,m-1,d)/86400000)%(typeof quotes!=='undefined'?quotes.length:1);
  const quoteFor=(y,m,d)=>(typeof quotes!=='undefined')?quotes[dayIndexFor(y,m,d)]:null;
  let selected=null;

  function renderYear(){
    const host=document.querySelector('#calendarYear');
    if(!host) return;
    const now=new Date();
    const y=now.getFullYear();
    const todayKey=`${y}-${now.getMonth()+1}-${now.getDate()}`;
    let html='';
    for(let m=1;m<=12;m++){
      const days=new Date(y,m,0).getDate();
      let cells='';
      for(let d=1;d<=days;d++){
        const q=quoteFor(y,m,d);
        const key=`${y}-${m}-${d}`;
        const isToday=key===todayKey;
        cells+=`<button type="button" class="cal-day${isToday?' today':''}${selected===key?' selected':''}" data-date="${key}" data-qi="${q?q.id:''}" style="--qcat:${catColor(q?q.category:'')}" title="${q?escLocal(q.cn):''}"><i>${d}</i></button>`;
      }
      html+=`<div class="cal-month"><b>${m} 月</b><div class="cal-days">${cells}</div></div>`;
    }
    host.innerHTML=html;
  }
  function renderDetail(){
    const host=document.querySelector('#calendarDetail');
    if(!host||!selected) return;
    const [y,m,d]=selected.split('-').map(Number);
    const q=quoteFor(y,m,d);
    if(!q){host.innerHTML='';return}
    const savedNow=(typeof saved!=='undefined')&&saved.includes(q.id);
    host.innerHTML=`<div class="cal-detail-card">
      <span class="cal-detail-date">${y} 年 ${m} 月 ${d} 日 · ${escLocal(q.category)} · ${escLocal(q.tag)}</span>
      <blockquote>“${escLocal(q.cn)}”</blockquote>
      <p class="cal-detail-en">${escLocal(q.en)}</p>
      <p class="cal-detail-from">此句心解 · ${escLocal(typeof getExplanation==='function'?getExplanation(q):'')}</p>
      <div class="cal-detail-actions">
        <button class="sort-button" id="calSave" data-id="${escLocal(q.id)}" type="button">${savedNow?'♥ 已收藏':'♡ 收藏这一签'}</button>
        <button class="sort-button" id="calOpen" type="button">细读这句 ↗</button>
      </div></div>`;
  }
  function openCalendar(){
    const modal=document.querySelector('#calendarModal');
    if(!modal) return;
    const now=new Date();
    if(!selected) selected=`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
    renderYear();renderDetail();
    modal.showModal();
  }
  function bind(){
    const year=document.querySelector('#calendarYear');
    if(!year||year.dataset.bound) return;
    year.dataset.bound='1';
    year.addEventListener('click',e=>{
      const day=e.target.closest('.cal-day');
      if(!day) return;
      selected=day.dataset.date;
      year.querySelectorAll('.cal-day.selected').forEach(el=>el.classList.remove('selected'));
      day.classList.add('selected');
      renderDetail();
    });
    const detail=document.querySelector('#calendarDetail');
    if(detail) detail.addEventListener('click',e=>{
      if(e.target.closest('#calSave')){
        const btn=e.target.closest('#calSave');
        if(typeof toggleSave==='function') toggleSave(btn.dataset.id);
        const q=(typeof quotes!=='undefined')?quotes.find(x=>x.id===btn.dataset.id):null;
        const savedNow=q&&(typeof saved!=='undefined')&&saved.includes(q.id);
        btn.textContent=savedNow?'♥ 已收藏':'♡ 收藏这一签';
      }
      if(e.target.closest('#calOpen')){
        const [yy,mm,dd]=selected.split('-').map(Number);
        const target=quoteFor(yy,mm,dd);
        if(target&&typeof openQuote==='function') openQuote(target.id);
      }
    });
    document.querySelector('#openCalendar')?.addEventListener('click',openCalendar);
    document.querySelector('[data-open-calendar]')?.addEventListener('click',e=>{e.preventDefault();openCalendar();});
    document.querySelector('#calendarOpenFromHero')?.addEventListener('click',openCalendar);
  }
  bind();
  window.openCalendar=openCalendar;
})();
