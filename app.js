// Opacity vidéo background
const loader = document.querySelector('.loader');
const main = document.querySelector('main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 100);
}

init();


// Size bar loading
const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 20);
  }
}


// Boutton play
const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
  }
});


// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('activer') ;
  menu.classList.toggle('responsive') ;
})


// Menu class active
const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section');

function activeMenu() {
  let len = sec.length;
  while(--len && window.scrollY + 150 < sec[len].offsetTop);
  li.forEach(ltx => ltx.classList.remove('activerr'));
  li[len].classList.add('activerr');
}
activeMenu();
window.addEventListener('scroll', activeMenu)


// ScrollBar Animation
const ecole = document.querySelector('#competences');
const myProgressBar1 = document.querySelector(".progress1");
const myProgressBar2 = document.querySelector(".progress2");
const myProgressBar3 = document.querySelector(".progress3");
const myProgressBar4 = document.querySelector(".progress4");
const myProgressBar5 = document.querySelector(".progress5");

function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = ecole.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.6){
        updateProgressBar(myProgressBar1, 90)
        updateProgressBar(myProgressBar2, 90)
        updateProgressBar(myProgressBar3, 60)
        updateProgressBar(myProgressBar4, 80)
        updateProgressBar(myProgressBar5, 40)
    }
})


// Couleur telachargement CV
let telechargers = document.getElementById('telecharger');
let downloads = document.getElementById('download');
telechargers.addEventListener("click", () => {
  downloads.style.color = "#52BB32";
});