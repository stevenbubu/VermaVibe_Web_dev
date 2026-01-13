
(function () {
  // 保持與 topbar 高度一致的滾動位移校正
  function scrollToHash() {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (!el) return;
    const TOPBAR_HEIGHT = 60; // 對應 --topbar-h
    const y = el.getBoundingClientRect().top + window.scrollY - TOPBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  window.addEventListener("hashchange", scrollToHash);
  window.addEventListener("load", scrollToHash);
})();
