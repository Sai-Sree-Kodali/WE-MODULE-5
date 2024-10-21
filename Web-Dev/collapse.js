// Toggle collapsible sections on header click
document.querySelectorAll('.collapsible h2').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.parentElement;
    section.classList.toggle('open');
  });
});

// Generate Table of Contents dynamically
const tocList = document.getElementById('toc-list');
document.querySelectorAll('section h2').forEach(header => {
  const tocItem = document.createElement('li');
  tocItem.textContent = header.textContent;
  tocItem.addEventListener('click', () => {
    header.scrollIntoView({ behavior: 'smooth' });
  });
  tocList.appendChild(tocItem);
});
