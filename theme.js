/* Review-only palette switcher.
   Usage: ?theme=clay | ?theme=navy | ?theme=oxblood  (default: clay)
   Delete this file and the .theme-switch block in index.html before launch. */
(function () {
  var THEMES = ['clay', 'navy', 'oxblood'];
  var root = document.documentElement;

  function current() {
    var q = new URLSearchParams(location.search).get('theme');
    if (THEMES.indexOf(q) > -1) return q;
    try {
      var saved = localStorage.getItem('ssw-theme');
      if (THEMES.indexOf(saved) > -1) return saved;
    } catch (e) {}
    return 'clay';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('ssw-theme', theme); } catch (e) {}
    document.querySelectorAll('[data-theme-set]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.themeSet === theme));
    });
  }

  apply(current());

  document.querySelectorAll('[data-theme-set]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.themeSet;
      apply(t);
      var url = new URL(location.href);
      url.searchParams.set('theme', t);
      history.replaceState(null, '', url);
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
