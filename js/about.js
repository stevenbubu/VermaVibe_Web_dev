
// Sticky header 平滑捲動補償（可選）
// 讓點擊錨點（#hero/#evolution/#quantum）時，考慮頂欄高度做平滑捲動。
(function(){
  function scrollToHash(){
    if(!location.hash) return;
    const el = document.querySelector(location.hash);
    if(!el) return;
    const headerOffset = 60; // 頂欄高度（與 .topbar-inner 相同）
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({top:y, behavior:'smooth'});
  }
  window.addEventListener('hashchange', scrollToHash);
  window.addEventListener('load', scrollToHash);
})();
