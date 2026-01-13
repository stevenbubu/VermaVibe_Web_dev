(function () {
  function scrollToHash() {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  window.addEventListener("hashchange", scrollToHash);
  window.addEventListener("load", scrollToHash);
})();
