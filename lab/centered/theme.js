/* Review-only palette switcher for the centered layout experiment.
   Usage: ?theme=indigo | juniper | azure | magenta | ember   (default: indigo)
   Delete this file and the .theme-switch block in index.html before launch. */
(function () {
  var THEMES = ['indigo', 'juniper', 'azure', 'magenta', 'ember'];
  var root = document.documentElement;

  function current() {
    var q = new URLSearchParams(location.search).get('theme');
    if (THEMES.indexOf(q) > -1) return q;
    try {
      var saved = localStorage.getItem('jds-lab-theme');
      if (THEMES.indexOf(saved) > -1) return saved;
    } catch (e) {}
    return 'indigo';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('jds-lab-theme', theme); } catch (e) {}
    document.querySelectorAll('[data-theme-set]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.themeSet === theme));
    });
  }

  apply(current());

  document.querySelectorAll('[data-theme-set]').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.dataset.themeSet);
      var url = new URL(location.href);
      url.searchParams.set('theme', b.dataset.themeSet);
      history.replaceState(null, '', url);
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
