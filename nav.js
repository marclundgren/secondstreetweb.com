/* Mobile navigation. Ships with the site. */
(function () {
  var toggle = document.getElementById('nav-toggle');
  var panel  = document.getElementById('mobile-nav');
  var header = document.querySelector('.site-header');
  if (!toggle || !panel || !header) return;

  function open()  { setState(true); }
  function close() { setState(false); }

  function setState(isOpen) {
    panel.hidden = !isOpen;
    header.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    panel.hidden ? open() : close();
  });

  // Jumping to a section should dismiss the menu.
  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { close(); toggle.focus(); }
  });

  document.addEventListener('click', function (e) {
    if (!panel.hidden && !header.contains(e.target)) close();
  });

  // The desktop nav takes over at 900px; don't leave a stale panel behind.
  var wide = window.matchMedia('(min-width: 900px)');
  var onChange = function (e) { if (e.matches) close(); };
  wide.addEventListener ? wide.addEventListener('change', onChange)
                        : wide.addListener(onChange);

  close();
})();
