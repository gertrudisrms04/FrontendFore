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
  // Sembunyikan semua section
  document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));

  // Tampilkan section sesuai ID
  const target = document.getElementById(id);
  target.classList.add('active');

  // Sembunyikan demo-text jika ada
  document.querySelectorAll('.demo-text, .news-section, .menu-section').forEach(el => el.classList.add('hide'));

  // Jika section yang ditampilkan sudah aktif, sembunyikan demo-text
  if (target.classList.contains('active')) {
      document.querySelectorAll('.demo-text').forEach(el => el.classList.add('hide'));
  }

  if(target.id === 'home'){
    document.querySelectorAll('.demo-text , news-section').forEach(el => el.classList.remove('hide'));
    document.querySelectorAll('.our-story-section').forEach(el => el.classList.add('active'));
    document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('active'));
  }

  if(target.id === 'about'){
    document.querySelectorAll('')
  }
}


  document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function () {
        window.open('https://www.youtube.com/watch?v=VyRXUnCSXUM', '_blank');
    });
});

