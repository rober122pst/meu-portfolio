
const artMode = document.querySelector('.art-mode');




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

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

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

// Função para recriar o Swiper
function updateSwiper() {
    if (swiper) {
        swiper.destroy(true, true);
    }
    swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
}

// Adiciona um listener para o evento resize
window.addEventListener('resize', function() {
    updateSwiper();
});

// Executa a função uma vez ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    updateSwiper();
});

let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    navbarColor();
})

function navbarColor() {
    if(window.scrollY >= 80){
        header.style.background = '#191919';
        header.style.boxShadow = '0px 5px 9px 0px #000';
    }else {
        header.style.background = 'transparent';
        header.style.boxShadow = '0px 0px 0px 0px transparent';
    }
}

const btnMobile = document.querySelector('.burguer');

function toggleMenu() {
    const nav = document.querySelector('.navbar-geral');
    if(header.style.background === 'transparent' || window.scrollY >= 80) {
        header.style.background = '#191919'
        header.style.boxShadow = '0px 5px 9px 0px #000';
        console.log('Fechou');
    }else {
        header.style.background = 'transparent'
        header.style.boxShadow = '0px 0px 0px 0px transparent';
    }
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

const _name = document.querySelector('.name');

function nameAnim() {
    _name.style.color = 'var(--color-main)'
}
_name.addEventListener('animationend', nameAnim); 


function initialObserver() {
    // FAZER APARECER QUANDO SCROLLAR
    const sections = document.querySelectorAll('.section-hidden');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    // Cria o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-show');
                entry.target.classList.remove('section-hidden');              
                hidden = true;
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Cria o Intersection Observer
    const observerProjects = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-show');
                entry.target.classList.remove('section-hidden');              
                hidden = true;
                observer.unobserve(entry.target);
            }
        });
    });
    
    let projects = document.querySelectorAll('.swiper');

    projects.forEach( (element) => {
        observerProjects.observe(element);
    });
    
    // Observa cada seção
    sections.forEach( (element) => {
        observer.observe(element);
    });
}

initialObserver();
/////////////////////////////////////////////////////////////////

////////////////////////////MODOS///////////////////////////////
const btnArt = document.querySelector('.art-btn');
const btnProgrammer = document.querySelector('.programmer-btn');
const btn3d = document.querySelector('.cube-btn');

const html = document.querySelector('html');


var hidden = false;
let currentMode = btnProgrammer;
function toggleMode(event) {
    const buttonClicked = event.target;

    if(buttonClicked === currentMode) {
        return;
    }
    
    hidden = false;
    
    const aboutText = document.querySelector('.text-about');

    if (buttonClicked === btnArt) {
        html.classList.add('art-mode');
        html.classList.remove('programmer-mode');
        html.classList.remove('cube-mode');

        currentMode = btnArt;

        aboutText.innerHTML = `
        Sou um Artista de
        <p>Pixel Art e Desenho Tradicional</p>
        `;
    } else if (buttonClicked === btnProgrammer) {
        html.classList.add('programmer-mode');
        html.classList.remove('art-mode');
        html.classList.remove('cube-mode');

        currentMode = btnProgrammer;

        aboutText.innerHTML = `
        Sou um Desenvolvedor de Jogos com esperiências em
        <p>Java, C#, GML, Unity e Game Maker</p>
        `;
    } else if (buttonClicked === btn3d) {
        html.classList.add('cube-mode');
        html.classList.remove('art-mode');
        html.classList.remove('programmer-mode');

        currentMode = btn3d;
    }

    if(!hidden) {
        document.querySelectorAll('.section-show').forEach(section => {
            section.classList.remove('section-show');
            section.classList.add('section-hidden');
        });
        initialObserver();
    }
}

btnArt.addEventListener('click', toggleMode);
btnProgrammer.addEventListener('click', toggleMode);
btn3d.addEventListener('click', toggleMode); 


