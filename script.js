document.addEventListener('DOMContentLoaded', function () {
        const toggleBtn = document.querySelector('.toggle-btn');
        const navMenu = document.querySelector('.nav-menu');

        toggleBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active')
        });
})

document.addEventListener('DOMContentLoaded', function () {
    const mainMenu = document.querySelector('.main-head');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            mainMenu.classList.add('slidedown');
        } else {
            mainMenu.classList.remove('slidedown');
        }
    });
});

let current = 0;
const slides = document.querySelectorAll('.showcase .container');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
function prevSlide() {
  current = (current - 1) % slides.length;
  showSlide(current);
}

function showSection(id) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function () {
        window.open('https://www.youtube.com/watch?v=VyRXUnCSXUM', '_blank');
    });
});