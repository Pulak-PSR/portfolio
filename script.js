(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var current = stored || (prefersDark ? 'dark' : 'light');

  applyTheme(current);

  toggle.addEventListener('click', function () {
    current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(current);
    localStorage.setItem('theme', current);
  });

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
