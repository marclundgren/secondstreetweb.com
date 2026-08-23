/* Review-only palette switcher.
   Usage: ?theme=<name>  (default: clay)
   clay | crimson | oxblood | brass | teal | cobalt | plum | graphite | ink
   Delete this file and the .theme-switch block in index.html before launch. */
(function () {
  var THEMES = ['clay', 'crimson', 'oxblood', 'brass', 'teal',
                'cobalt', 'plum', 'graphite', 'ink'];

  // Earlier round's names, so shared links keep working.
  var ALIASES = { navy: 'brass', slate: 'teal', bone: 'crimson',
                  harbor: 'clay', mustard: 'brass' };
  var root = document.documentElement;

  function current() {
    var q = new URLSearchParams(location.search).get('theme');
    if (q && ALIASES[q]) q = ALIASES[q];
    if (THEMES.indexOf(q) > -1) return q;
    try {
      var saved = localStorage.getItem('ssw-theme');
      if (saved && ALIASES[saved]) saved = ALIASES[saved];
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
