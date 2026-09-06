/* 配色方案：暖陶（默认）与黛青，存于本机并即时切换。 */
(function initPalette(){
  const apply=p=>{
    if(p==='indigo') document.documentElement.dataset.palette='indigo';
    else delete document.documentElement.dataset.palette;
    try{localStorage.setItem('shiyulu-palette',p)}catch(e){}
    document.querySelectorAll('[data-palette-btn]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.paletteBtn===p)));
  };
  let stored=null;
  try{stored=localStorage.getItem('shiyulu-palette')}catch(e){}
  if(stored==='indigo') document.documentElement.dataset.palette='indigo';
  document.querySelectorAll('[data-palette-btn]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.paletteBtn===(stored||'warm'))));
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-palette-btn]');
    if(b) apply(b.dataset.paletteBtn);
  });
})();
