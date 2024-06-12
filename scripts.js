
const artMode = document.querySelector('.art-mode');


let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

function createSwiper(container, pagination, nextButton, prevButton) {
    return new Swiper(container, {
        slidesPerView: handleWidth(),
        spaceBetween: 30,
        pagination: {
        el: pagination,
        clickable: true,
        },
        navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
        },
    });
}

function handleWidth() {
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    let slideShow = 3;

    if (getWidth < 1001) {
        slideShow = 2;
    }

    if (getWidth < 700) {
        slideShow = 1;
    }

    return slideShow;
}

let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 80){
        header.style.background = '#191919'
    }else {
        header.style.background = 'transparent'
    }
})

const btnMobile = document.querySelector('.burguer');

function toggleMenu() {
    const nav = document.querySelector('.navbar-geral');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

const btnArt = document.querySelector('.art-btn');
const btnProgrammer = document.querySelector('.programmer-btn');
const btn3d = document.querySelector('.cube-btn');

const html = document.querySelector('html');

function toggleMode(event) {
    const buttonClicked = event.target;
    const aboutText = document.querySelector('.text-about');

    if (buttonClicked === btnArt) {
        html.classList.add('art-mode');
        html.classList.remove('programmer-mode');
        html.classList.remove('cube-mode');

        aboutText.innerHTML = `
        Sou um Artista de
        <p>Pixel Art e Desenho Tradicional</p>
        `;
    } else if (buttonClicked === btnProgrammer) {
        html.classList.add('programmer-mode');
        html.classList.remove('art-mode');
        html.classList.remove('cube-mode');
        aboutText.innerHTML = `
        Sou um Desenvolvedor de Jogos com esperiências em
        <p>Java, C#, GML, Unity e Game Maker</p>
        `;
    } else if (buttonClicked === btn3d) {
        html.classList.add('cube-mode');
        html.classList.remove('art-mode');
        html.classList.remove('programmer-mode');
    }
}

btnArt.addEventListener('click', toggleMode);
btnProgrammer.addEventListener('click', toggleMode);
btn3d.addEventListener('click', toggleMode); 

const _name = document.querySelector('.name');

function nameAnim() {
    _name.style.color = 'var(--color-pink)'
}
_name.addEventListener('animationend', nameAnim); 


// FAZER APARECER QUANDO SCROLLAR
const sections = document.querySelectorAll('.section-hidden');

const options = {
    threshold: 0.1
}

// Cria o Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-show');
        }else {
            entry.target.classList.remove('section-show');
        }
    });
    }, options);

// Observa cada seção
sections.forEach( (element) => {
    observer.observe(element);
});

