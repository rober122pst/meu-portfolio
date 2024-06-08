
const artMode = document.querySelector('.art-mode');


/*let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

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
}*/

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

if(scrollY >= 80){
    header.style.background = '#191919'
}else {
    header.style.background = 'transparent'
}

const btnMobile = document.querySelector('.burguer');

function toggleMenu() {
    const nav = document.querySelector('.navbar-geral');
    if(header.style.background === 'transparent' || scrollY >= 80) {
        header.style.background = '#191919'
        console.log('Fechou');
    }else {
        header.style.background = 'transparent'
    }
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

const _name = document.querySelector('.name');

function nameAnim() {
    _name.style.color = 'var(--color-pink)'
}
_name.addEventListener('animationend', nameAnim); 


function initialObserver() {
    // FAZER APARECER QUANDO SCROLLAR
    const sections = document.querySelectorAll('.section-hidden');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
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


