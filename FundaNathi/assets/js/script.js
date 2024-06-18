//Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

//Resources Filter
const filterOptions = document.querySelector('.filter-optons');
const resourcesList = document.querySelector('.resources-container ul');

filterOptions.addEventListener('change', (e) => {
  const filterValue = e.target.value;
  resourcesList.classList.add('filtered');
  resourcesList.innerHTML = '';
  //Filter resources based on folter value
});

//Search Bar
const searchInput = document.querySelector('.serach-bar');

searchInput.addEventListener('input',(e) => {
  const searchQuery = e.tagert.value.toLowerCase();
  //Search resources based on search query
});

//Mode Toggle
const modeToggle = document.querySelector('.mode-toggle');

modeToggle.addEventListener('click',() => {
  document.querySelector('body').classList.toggle('dark-mode');
});

//Loading Animation
const loadingAnimation = document.querySelector('.loading-animation');

window.addEventListener('load', () => {
  loadingAnimation.classList.add('hidden');
});

//date and time
function updateDateTime(){
  const currentDateElement = document.getElementById('currentDate');
  const currentTimeElement = document.getElementById('currentTime');

  const now = new Date();

  const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
  const formattedDate = now.toLocaleDateString('en-US',options);
  const formattedTime = now.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'});

  currentDateElement.textContent = formattedDate;
  currentTimeElement.textContent = formattedTime;
}
setInterval(updateDateTime, 1000);
updateDateTime();

const themeSwitchBtn = document.getElementById('theme-switch-btn');
const body = document.body;

themeSwitchBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});