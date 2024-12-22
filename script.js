document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
          const description = button.previousElementSibling.previousElementSibling;
          description.style.display = description.style.display === 'none' ? 'block' : 'none';
      });
  });
});
