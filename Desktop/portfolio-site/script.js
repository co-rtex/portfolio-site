window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
  });
  
  const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle button text
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Light Mode';
  } else {
    toggle.textContent = '🌙 Dark Mode';
  }
});
