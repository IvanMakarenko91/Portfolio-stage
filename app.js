// Opacity vidéo background
const loader = document.querySelector('.loader');
const main = document.querySelector('main');
const body = document.querySelector('body');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    body.style.overflowY = "visible";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 1500);
}

init();


// Size bar loading
const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
const good = document.querySelector("#good");

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 1);
  } else {
    good.style.opacity = 1;
  }
}


// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('activer') ;
  menu.classList.toggle('responsive') ;
})

var menuSelect = document.querySelectorAll('.links');

// Remove responsive menu au click
for(i = 0; i < menuSelect.length; i++) {
  menuSelect[i].addEventListener('click', () => {
    toggle_menu.classList.remove('activer') ;
    menu.classList.remove('responsive');
  })
}


// Menu class active
const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section');

function activeMenu() {
  let len = sec.length;
  if(window.innerHeight < 1410) {
  while(--len && window.scrollY + 47 < sec[len].offsetTop);
  li.forEach(ltx => ltx.classList.remove('activerr'));
  li[len].classList.add('activerr');
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    li[5].classList.add('activerr');
    li[4].classList.remove('activerr');
    li[3].classList.remove('activerr');
    li[2].classList.remove('activerr');
    li[1].classList.remove('activerr');
    li[0].classList.remove('activerr');
  }
  } else {
    while(--len && window.scrollY + 480 < sec[len].offsetTop);
  li.forEach(ltx => ltx.classList.remove('activerr'));
  li[len].classList.add('activerr');
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    li[5].classList.add('activerr');
    li[4].classList.remove('activerr');
    li[3].classList.remove('activerr');
    li[2].classList.remove('activerr');
    li[1].classList.remove('activerr');
    li[0].classList.remove('activerr');
  }
  }
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
        updateProgressBar(myProgressBar4, 90)
        updateProgressBar(myProgressBar5, 50)
    }
})


// Couleur telachargement CV
let telechargers = document.getElementById('telecharger');
let downloads = document.getElementById('download');
telechargers.addEventListener("click", () => {
  downloads.style.color = "#52BB32";
});


// Scroll animation opacité page + Rotation animation fleche de remonter
const bgImageEl = document.getElementById("bg-image");
const remonter = document.getElementById('remonter');

window.addEventListener("scroll", () => {
  bgImageEl.style.opacity = 1 - window.pageYOffset / window.innerHeight;
  if(scrollY > (window.innerHeight * 0.99)) {
    remonter.style.transform = 'rotate(180deg)';
  }
  else {
    remonter.style.transform = 'rotate(0deg)';
  }
});

// Animation boutton
window.addEventListener("scroll", () => {
  if(scrollY > 10) {
    remonter.style.animation = 'none';
  }
  else {
    remonter.style.animation = 'glowing 2000ms infinite';
  }
})

remonter.addEventListener('click', () => {
  window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth"
  })
})


// Effet ripple au survol
// const btnEl = document.querySelector(".btns");

// btnEl.addEventListener("mouseover", (event) => {
//   const x = event.pageX - btnEl.offsetLeft;
//   const y = event.pageY - btnEl.offsetTop;

//   btnEl.style.setProperty("--xPos", x + "px");
//   btnEl.style.setProperty("--yPos", y + "px");
// });


// Animation scrollReveal apparition
const sr = ScrollReveal();

sr.reveal('.pour-vous',{
  origin: 'top',
  distance: '-350px',
  duration: 1000,
  interval: 100,
  delay:200,
  easing: 'ease-out',
  viewOffset: {
    bottom: 100
},
  mobile:false
});