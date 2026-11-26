(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('elena-theme');
  root.dataset.theme = savedTheme === 'light' ? 'light' : 'dark';

  const navWrap = document.querySelector('.nav-wrap');
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu-button');

  if (navWrap) {
    const themeButton = document.createElement('button');
    themeButton.className = 'theme-toggle';
    themeButton.type = 'button';

    const setLabel = () => {
      const dark = root.dataset.theme === 'dark';
      themeButton.textContent = dark ? 'Switch to light mode' : 'Switch to dark mode';
      themeButton.setAttribute('aria-label', themeButton.textContent);
    };

    themeButton.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('elena-theme', root.dataset.theme);
      setLabel();
    });

    setLabel();
    navWrap.appendChild(themeButton);

  }

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
