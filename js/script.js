const trigger = document.querySelector('.trigger');
const sidebar = document.querySelector('.sidebar');

trigger.addEventListener('click', () => {
  trigger.classList.toggle('active');
  sidebar.classList.toggle('show');
});
