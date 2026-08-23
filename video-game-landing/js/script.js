document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');

  const setNavBackground = () => {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(5, 5, 8, 0.95)';
    } else {
      nav.style.background = 'rgba(5, 5, 8, 0.7)';
    }
  };
  setNavBackground();
  window.addEventListener('scroll', setNavBackground);

  const navMenu = document.getElementById('navMenu');
  document.querySelectorAll('#navMenu .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
      playBtn.style.opacity = '0.7';
    });
  }
});
