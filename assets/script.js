const page = document.body.dataset.page;
const map = { home: 'index.html', strategy: 'strategy.html', pyp: 'pick-your-path.html' };
const href = map[page];
if (href) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === href) a.classList.add('is-active');
  });
}
