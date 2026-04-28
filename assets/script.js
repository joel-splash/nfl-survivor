const page = document.body.dataset.page;
const map = { home: 'index.html', pyp: 'pick-your-path.html', play: 'play.html' };
const href = map[page];
if (href) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === href) a.classList.add('is-active');
  });
}
