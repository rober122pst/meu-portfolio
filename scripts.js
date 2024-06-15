// if (window.location.pathname.endsWith('.html')) {
//     window.history.replaceState({}, '', window.location.pathname.replace('.html', ''));
// }



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
        header.style.boxShadow = '0px 5px 9px 0px #0c0c0c';
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
        header.style.boxShadow = '0px 5px 9px 0px #0c0c0c';
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

    const observerProjectsArts = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-show-project');
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
                entry.target.classList.add('section-show-project');
                entry.target.classList.remove('section-hidden');              
                hidden = true;
                observer.unobserve(entry.target);
            }
        });
    });
    
    let projects = document.querySelectorAll('.swiper');
    let projectsArts = document.querySelectorAll('.img-arts');

    projects.forEach( (element) => {
        observerProjects.observe(element);
    });

    projectsArts.forEach( (element) => {
        observerProjectsArts.observe(element);
    });
    
    // Observa cada seção
    sections.forEach( (element) => {
        observer.observe(element);
    });
}

initialObserver();
/////////////////////////////////////////////////////////////////
function checkSkillsHeight() {
    let skills = document.getElementById('skills');
    const skillBox = document.querySelector('.skills-box');

    const skillHeight = skillBox.offsetHeight;
    if(!skills.classList.contains('skills-active')) {
        skills.style.maxHeight = (skillHeight+200) + 'px';
    }else {
        skills.style.maxHeight = 'none';
    }
}
checkSkillsHeight();
window.addEventListener('resize', checkSkillsHeight);
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
    
    const boxAboutText = document.querySelector('.box-about');
    const aboutTechs = document.querySelector('.skills-content');

    if (buttonClicked === btnArt) {
        html.classList.add('art-mode');
        html.classList.remove('programmer-mode');
        html.classList.remove('cube-mode');

        currentMode = btnArt;

        boxAboutText.innerHTML = `
        <div class="section-subtitle">
        <h2 class="section-hidden">
            <p>🎨</p>
            <p><span>Designer</span> e Desenhista</p>
        </h2>
        </div>

        <h3 class="text-about section-hidden">
            Sou um Designer e um desenhista com habilidades de
            <p>Realismo, Pixel art, Camisas e Vetorização</p>
        </h3>

        <h4 class="section-hidden">
        Seguindo os passos do meu pai, um incrível desenhista e designer de estampas, mergulhei no mundo do design e do desenho. Passei a vida toda desenhando, aprimorando minhas habilidades dia após dia. Nunca fiz um curso formal, mas aprendi muito com meu pai e por conta própria. Cada traço que faço é uma expressão da minha paixão e dedicação a essa arte.
        </h4>

        <h4 class="section-hidden">
            Abaixo está o <p>currículo</p> para download.
        </h4>

        <div class="button-cta section-hidden">
            <a>Currículo</a>
        </div>
        `;

        ///////////////TECHS/////////////////
        aboutTechs.innerHTML = `
        <h3>Habilidades</h3>
        <ul class="skills-techs icons-skills">
        <div class="skills-container section-hidden">
                    <h2>Desenho Tradicional</h2>
                    <li><svg fill="#000000" height="200px" width="200px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 232" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M121.6,85.4c20.7,12.4,47.6,5.4,59.7-15.3c12.4-20.7,5.4-47.6-15.3-59.7C145.2-2,118.3,5,106.2,25.7S100.8,73,121.6,85.4z M253.3,202.4l-19.1-32.8c0.8-4.8,0-10.2-3.2-14.8c-2.4-3.8-5.9-6.5-10-7.8l0,0l-12.9-22.3c-1.6-2.7-4.8-3.5-7.5-1.9l-1.6,0.8 c-2.7,1.6-3.5,4.8-1.9,7.5l9.4,16.1c-1.3,0.5-2.7,1.1-4,1.9L167,172.5l-51.1-76.9c-5.9-10.8-25-21.5-43.6-16.4 C29,92.7,6.6,173.6,2,221.5h115.8l2.4-32L82,131.7c-1.1-1.6-0.5-4,1.1-5.1c1.6-1.1,4-0.5,5.1,1.1l57,86.1c4,5.4,10.2,8.1,16.4,8.1 c4,0,7.8-1.1,11.3-3.5l52.7-35c0.5-0.3,1.1-0.8,1.6-1.1l15.3,26.6c1.6,2.7,4.8,3.5,7.5,1.9l1.6-0.8 C253.9,208.6,254.7,205.1,253.3,202.4z"></path> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Pixel art</h2>
                    <li><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 451.215 451.214" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M434.262,377.113c-14.697-21.898-37.031-48.195-62.887-74.049c-14.203-14.205-29.113-27.855-43.115-39.477 c-1.621-1.346-3.793-1.821-5.826-1.278c-2.035,0.543-3.682,2.038-4.416,4.012c-2.189,5.882-5.758,11.319-10.604,16.163 c-3.98,3.982-8.113,7.116-12.285,9.314c-1.736,0.916-2.967,2.567-3.348,4.494c-0.379,1.928,0.133,3.922,1.395,5.428 c11.277,13.474,24.449,27.809,38.094,41.457c47.014,47.012,92.693,79.846,111.086,79.847c2.824,0,5.035-0.777,6.566-2.309 C456.145,413.49,444.938,393.017,434.262,377.113z"></path> <path d="M243.857,243.007c1.158,7.334,2.471,15.647,6.73,24.82c5.792,12.473,15.584,19.92,26.191,19.922h0.002 c8.016,0,16.086-4.008,23.99-11.91c11.201-11.201,14.574-25.885,9.023-39.28c-7.363-17.779-28.377-29.267-53.533-29.267 c-5.537,0-11.322,0.533-17.195,1.585c-2.299,0.412-4.201,2.026-4.979,4.229c-0.78,2.202-0.317,4.654,1.21,6.421 C241.23,226.388,242.447,234.087,243.857,243.007z"></path> <path d="M412.197,28.191H6.5c-3.59,0-6.5,2.91-6.5,6.5v275.467c0,3.59,2.91,6.5,6.5,6.5h278.209l-13.289-17.07 c-26.898,0-34.912-25.93-37.26-25.93H43V71.191h332.697v202.467h-15.26l41.412,43h10.348c3.59,0,6.5-2.91,6.5-6.5V34.691 C418.697,31.101,415.787,28.191,412.197,28.191z"></path> <path d="M224.655,199.42c1.22,1.138,2.81,1.747,4.434,1.747c0.603,0,1.209-0.083,1.802-0.255 c4.098-1.183,10.135-2.898,15.639-4.357c1.336-0.354,2.523-1.125,3.393-2.199c1.518-1.878,3.296-3.852,4.598-5.294 c6.479-7.193,15.354-17.043,11.448-28.758c-2.013-5.867-6.021-10.201-11.594-12.533c-2.948-1.234-6.147-1.833-9.784-1.833 c-12.584,0-28.438,7.618-45.223,15.683c-7.487,3.597-19.419,9.329-26.381,11.35c1.646-4.16,4.895-9.963,7.181-14.05 c3.969-7.087,8.073-14.416,10.182-21.566c4.594-15.575-2.562-23.934-7.277-27.562c-0.007-0.005-0.085-0.064-0.092-0.07 c-4.23-3.173-8.941-4.782-14.001-4.782c-14.476,0-29.065,12.832-40.788,23.143c-4.802,4.224-8.536,7.423-11.153,9.306 c-2.089,1.503-3.095,4.097-2.564,6.615l2.626,12.475c0.42,1.995,1.751,3.677,3.594,4.543c1.847,0.868,3.991,0.819,5.794-0.13 c5.621-2.958,11.457-8.093,18.22-14.042c5.539-4.872,11.268-9.91,16.521-13.344c2.215-1.448,3.874-2.295,5.068-2.79 c-1.496,4.48-5.568,11.75-7.94,15.988c-4.03,7.202-8.198,14.65-10.159,21.787c-4.619,16.809,5.146,24.699,9.522,27.288 c3.231,1.943,6.864,2.887,11.105,2.887c11.163,0,25.158-6.724,41.364-14.51c8.074-3.879,16.424-7.89,23.458-10.479 c0.545-0.201,1.078-0.391,1.6-0.571c-4.958,5.514-10.811,12.282-12.511,20.197C222.253,195.538,222.983,197.861,224.655,199.42z"></path> </g> </g> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Texturização</h2>
                    <li><svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 0h192v192H0z" style="fill:none"></path><path d="M27.55 22v45.33h45.33v23.12h-22.2V170h22.2v-34.23h46.24V170h22.21V90.45h-22.21V67.33h45.33V22h-45.33v45.33H72.88V22H27.55z";stroke-linejoin:round;stroke-width:12px;fill:none"></path></g></svg></li>
                </div>               
                <div class="skills-container section-hidden">
                    <h2>Animação 2D</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>animation_solid</title> <g id="bb9f4e02-7318-4dbb-9960-e0435cf0cad7" data-name="Layer 3"> <path d="M3.5,23.77a6.41,6.41,0,0,0,9.33,8.67A11.65,11.65,0,0,1,3.5,23.77Z"></path> <path d="M7.68,14.53a9.6,9.6,0,0,0,13.4,13.7A14.11,14.11,0,0,1,7.68,14.53Z"></path> <path d="M21.78,2A12.12,12.12,0,1,1,9.66,14.15,12.12,12.12,0,0,1,21.78,2"></path> </g> </g></svg></li>
                </div>               
                <div class="skills-container section-hidden">
                    <h2>Edição de imagens</h2>
                    <li><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0H24V24H0z"></path> <path d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"></path> </g> </g></svg></li>
                </div>               
                <div class="skills-container section-hidden">
                    <h2>Vetorização</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31 21h-1.009v-0.050c0-5.060-2.704-9.494-6.739-11.95h5.026c0.346 0.595 0.985 1 1.723 1 1.105 0 2-0.896 2-2s-0.895-2-2-2c-0.738 0-1.376 0.405-1.723 1h-9.277v-1c0-0.552-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1v1h-9.277c-0.346-0.595-0.984-1-1.722-1-1.105 0-2 0.896-2 2s0.895 2 2 2c0.738 0 1.376-0.405 1.722-1h5.025c-4.035 2.456-6.739 6.889-6.739 11.95v0.050h-1.009c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1h-0.991v-0.050c0-5.576 3.827-10.271 8.992-11.606v0.656c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-0.656c5.165 1.335 8.992 6.030 8.992 11.606v0.050h-0.991c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1zM4 25h-2v-2h2v2zM17 9h-2v-2h2v2zM30 25h-2v-2h2v2z"></path> </g></svg></li>
                </div>               
                <div class="skills-container section-hidden">
                    <h2>Design de uniformes</h2>
                    <li><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M31.5,22h-3c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h3c1.93,0,3.5-1.57,3.5-3.5S33.43,22,31.5,22z"></path> <path d="M25,34.5c0,1.93,1.57,3.5,3.5,3.5h3c1.93,0,3.5-1.57,3.5-3.5S33.43,31,31.5,31h-3C26.57,31,25,32.57,25,34.5z"></path> <g> <rect x="14" y="49" width="32" height="2"></rect> <path d="M59.848,23.47l-10-16c-0.104-0.166-0.255-0.299-0.434-0.38l-11-5c-0.28-0.126-0.602-0.119-0.874,0.022 c-0.272,0.142-0.466,0.4-0.522,0.701c-1.432,7.554-7.27,7.773-7.477,7.779c-0.208-0.006-5.131-0.244-6.559-7.779 c-0.057-0.301-0.25-0.56-0.522-0.701c-0.271-0.142-0.594-0.148-0.874-0.022l-11,5c-0.179,0.081-0.33,0.214-0.434,0.38l-10,16 c-0.275,0.44-0.168,1.019,0.248,1.33l8,6c0.421,0.317,1.018,0.251,1.358-0.149L14,25.703V47h32V26.12l3.187,4.461 c0.313,0.438,0.92,0.55,1.368,0.251l9-6C60.005,24.532,60.135,23.928,59.848,23.47z M17.637,5.528L21,4 c1.611,8.503,7.519,8.593,7.519,8.593s0.186-0.006,0.481-0.044V13H15L17.637,5.528z M37,34.5c0,3.032-2.468,5.5-5.5,5.5h-3 c-3.032,0-5.5-2.468-5.5-5.5c0-1.86,0.931-3.504,2.348-4.5C23.93,29.004,23,27.359,23,25.5c0-3.032,2.468-5.5,5.5-5.5h3 c3.032,0,5.5,2.468,5.5,5.5c0,1.86-0.931,3.504-2.348,4.5C36.069,30.996,37,32.64,37,34.5z M31,13v-0.451 c0.295,0.037,0.481,0.044,0.481,0.044S37.389,12.503,39,4l3.363,1.529L45,13H31z"></path> <path d="M14,53v4c0,0.553,0.447,1,1,1h30c0.553,0,1-0.447,1-1v-4H14z"></path> </g> </g> </g> </g> </g></svg></li>
                </div>               
        </div>
        </ul>
        <h3>Softwares</h3>
            <ul class="skills-software icons-skills">
                <div class="skills-container section-hidden">
                    <h2>Aseprite</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.006 0v1.6h15.988V0zm15.988 1.6v1.6h1.6V1.6zm1.6 1.6v14.4h-1.6v1.6H4.006v-1.6h-1.6V3.2H.809v17.6h1.599v1.6h1.599V24h15.988v-1.6h1.6v-1.6h1.598V3.2zm-19.187 0h1.599V1.6h-1.6zm4.796 3.2v6.4h1.6V6.4zm7.995 0v6.4h1.599V6.4z"></path></g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Adobe Photoshop</h2>
                    <li><svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e037552"> <path display="inline" d="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167 h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524 c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363 c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936 C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216 c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7 c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496 l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618 c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95 c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171 C202.979,165.323,221.8,179.803,221.8,206.95z"> </path> </g> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Adobe Illustrator</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Adobe Illustrator icon</title><path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"></path></g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Inkscape</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>inkscape</title> <path d="M25.431 25.209c-1.263 1.135 0.142 2.284 1.388 1.552 0.277-0.281-0.008-1.27-1.387-1.552zM7.296 27.041c0.98 0.849 2.496-0.211 2.949-1.395-0.95-1.262-4.507 0.046-2.949 1.395zM25.951 24.054c0 0.562 4.141 0.931 4.141-0.132-0.397-0.733-1.16-1.222-2.038-1.222-0.929 0-1.731 0.549-2.097 1.34l-0.006 0.014zM13.233 2.216l-11.072 11.329c-3.74 4.632 2.547 4.094 5.241 5.427 0.967 0.988-3.705 1.718-2.738 2.707 0.966 0.988 5.846 1.904 6.814 2.892 0.966 0.988-1.979 2.037-1.012 3.024 0.966 0.99 3.203 0.052 3.621 2.334 0.297 1.63 4.029 0.7 5.853-0.635 0.967-0.988-1.849-0.896-0.882-1.884 2.403-2.458 4.642-0.892 5.465-3.357 0.406-1.217-3.539-1.876-2.571-2.864 2.782-1.625 12.395-2.682 7.833-7.243l-11.474-11.73c-0.659-0.629-1.554-1.016-2.539-1.016s-1.88 0.387-2.54 1.017l0.001-0.001zM17.641 3.012l4.38 4.449c0.207 0.229 0.333 0.533 0.333 0.868 0 0.226-0.058 0.438-0.159 0.623l0.003-0.007-2.174-1.739-0.427 2.576-1.818-0.959-2.909 1.837-0.963-3.874-1.563 2.704h-2.391c-0.975 0-1.088-1.237-0.204-2.122 1.546-1.668 3.32-3.369 4.285-4.355 0.466-0.453 1.102-0.732 1.804-0.732s1.338 0.279 1.804 0.733l-0.001-0.001zM10.584 19.588c0.296 0.184 4.771 1.093 5.865 1.275 0.379 0.080 0.11 0.47-0.412 0.734-1.178 0.314-6.894-2.008-5.452-2.008z"></path> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>CorelDRAW</h2>
                    <li><svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e0396ed"> <path display="inline" d="M239.532,463.443h32.923c5.977,0,10.85,4.873,10.85,10.85v26.369c0,5.963-4.873,10.837-10.85,10.837 h-32.923c-5.963,0-10.837-4.874-10.837-10.837v-26.369C228.695,468.316,233.569,463.443,239.532,463.443L239.532,463.443z M239.532,463.443 M102.525,146.023c0.412,81.391,69.535,208.35,133.431,295.97h6.288 c-48.593-88.639-90.036-197.933-90.402-284.073c-0.341-78.151,31.58-127.745,74.662-156.048c-9.564,0.89-19.146,2.217-28.64,4.042 C144.734,27.04,102.144,70.638,102.525,146.023L102.525,146.023z M102.525,146.023 M243.163,0.753 c-24.897,33.505-44.102,81.012-43.931,149.948c0.229,89.978,21.279,196.93,48.426,291.292h16.684 c27.147-94.361,48.197-201.314,48.427-291.292c0.17-68.936-19.034-116.443-43.931-149.948 C260.288,0.417,251.713,0.417,243.163,0.753L243.163,0.753z M243.163,0.753 M409.475,146.023 c-0.411,81.391-69.534,208.35-133.431,295.97h-6.287c48.592-88.639,90.036-197.933,90.397-284.073 C360.5,79.77,328.579,30.175,285.497,1.872c9.564,0.89,19.146,2.217,28.627,4.042C367.266,27.04,409.854,70.638,409.475,146.023 L409.475,146.023z M409.475,146.023 M280.382,441.993c71.526-75.27,152.676-201.084,153.212-298.033 c0.325-59.454-28.614-98.881-69.151-122.959c49.665,21.308,87.449,60.635,87.083,124.556 c-0.582,98.475-94.968,228.569-169.9,296.436H280.382z M280.382,441.993 M231.619,441.993 C160.092,366.724,78.943,240.909,78.406,143.96c-0.324-59.454,28.603-98.881,69.14-122.959 C97.894,42.31,60.109,81.637,60.475,145.557c0.583,98.475,94.969,228.569,169.9,296.436H231.619z M231.619,441.993"> </path> </g> </g></svg></li>
                </div>
            </ul>
        `;
    } else if (buttonClicked === btnProgrammer) {
        html.classList.add('programmer-mode');
        html.classList.remove('art-mode');
        html.classList.remove('cube-mode');

        currentMode = btnProgrammer;

        boxAboutText.innerHTML = `
        <div class="section-subtitle">
        <h2 class="section-hidden">
            <p>💻</p>
            <p><span>Desenvolvedor</span> de Jogos</p>
        </h2>
        </div>

        <h3 class="text-about section-hidden">
            Sou um Desenvolvedor de Jogos com esperiências em
            <p>Java, C#, GML, Unity e Game Maker</p>
        </h3>

        <h4 class="section-hidden">
            Oi, sou o Rober, tenho 18 anos e sou louco por programação e jogos. Comecei a criar jogos no PowerPoint e Scratch quando tinha 6 anos e desde então minha curiosidade só aumentou. Adoro matemática e isso me ajuda muito na programação. Meu sonho é ser um desenvolvedor de jogos profissional, mas também curto explorar outras áreas da programação. Resumindo, sou um cara apaixonado por tecnologia, sempre aprendendo e animado para ver onde essa jornada vai me levar.
        </h4>

        <h4 class="section-hidden">
            Abaixo está o <p>currículo</p> para download.
        </h4>

        <div class="button-cta section-hidden">
            <a>Currículo</a>
        </div>
        `;

        ///////////////TECHS/////////////////
        aboutTechs.innerHTML = `
        <h3>Techs</h3>
            <ul class="skills-techs icons-skills">
                <div class="skills-container section-hidden">
                    <h2>C#</h2>
                    <li><svg viewBox="0 0 15 15" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 8V7H11V8H10Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.421143L14 4.21281V10.7872L7.5 14.5788L1 10.7872V4.21281L7.5 0.421143ZM6.33156 4C4.49159 4 3 5.49159 3 7.33156V7.66844C3 9.50841 4.49159 11 6.33156 11C6.84877 11 7.35887 10.8796 7.82148 10.6483L8.22361 10.4472L7.77639 9.55279L7.37426 9.75385C7.05052 9.91573 6.69352 10 6.33156 10C5.04387 10 4 8.95613 4 7.66844V7.33156C4 6.04387 5.04387 5 6.33156 5C6.69352 5 7.05052 5.08427 7.37426 5.24615L7.77639 5.44721L8.22361 4.55279L7.82148 4.35172C7.35887 4.12042 6.84877 4 6.33156 4ZM9 5V6H8V7H9V8H8V9H9V10H10V9H11V10H12V9H13V8H12V7H13V6H12V5H11V6H10V5H9Z" "></path> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Java</h2>
                    <li><svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e8d81"> <path display="inline" d="M193.918,208.369c-4.729-10.456-6.849-22.652-3.236-33.731c3.612-11.327,11.703-20.413,19.794-28.878 c22.525-22.531,50.285-39.085,72.316-61.986c12.197-12.573,22.278-27.634,25.762-44.937c2.864-12.695,1.496-25.764-1.117-38.337 c11.7,13.319,15.559,32.363,12.197,49.541c-3.608,19.292-14.316,36.344-26.886,51.031c-10.081,11.827-21.659,22.282-33.731,31.993 c-14.065,11.327-27.88,23.524-36.716,39.457c-7.472,12.943-9.215,28.876-4.11,42.942c8.341,24.146,27.756,42.071,38.338,64.848 c-11.703-10.332-23.152-21.036-33.86-32.361C211.471,236.001,200.889,223.307,193.918,208.369z M257.398,189.448 c-2.115,19.792,8.213,38.462,20.539,53.151c5.972,6.596,11.076,14.687,11.323,23.899c0.251,12.318-6.716,23.774-15.684,31.861 c2.119-0.246,3.612-2.115,5.355-3.11c13.443-8.589,26.385-19.418,32.982-34.227c4.357-10.083,3.362-22.034-2.362-31.371 c-6.724-10.953-15.559-20.662-20.786-32.61c-2.867-6.721-3.862-14.562-1.496-21.657c3.114-9.583,9.834-17.426,16.93-24.272 c19.54-18.544,43.189-31.743,65.844-46.179c-28.629,8.214-56.883,19.542-81.03,37.343 C273.702,153.727,259.515,169.658,257.398,189.448z M393.447,283.052c13.568,0.748,26.882,10.704,29.374,24.397 c2.366,11.825-3.358,23.524-10.705,32.485c-12.075,14.438-28.382,24.771-44.807,33.609c-1.622,0.991-2.99,2.237-4.235,3.608 c21.659-5.478,43.314-13.689,60.867-27.756c9.705-8.091,18.294-18.799,20.163-31.619c1.743-11.076-2.86-22.528-11.077-29.871 c-9.96-9.09-24.021-12.448-37.218-10.704c-7.593,0.995-15.931,2.613-21.158,8.961C380.877,284.921,386.971,282.429,393.447,283.052 z M123.22,318.647c16.303,4.357,33.108,5.603,49.787,6.724c14.936,0.995,29.875,1.246,44.937,1.12 c38.833-0.619,77.916-3.236,116.003-11.699c3.608-0.87,7.593-1.493,10.833-3.733c6.347-4.11,13.313-7.347,20.162-10.583 c-30.995,4.979-62.113,9.215-93.478,11.205c-31.74,1.991-63.731,3.236-95.593,1.121c-9.086-0.87-18.423-1.371-26.886-4.858 c-1.994-0.87-4.733-2.609-3.738-5.227c1.869-3.361,5.603-4.977,8.839-6.72c13.694-6.473,28.629-10.081,43.193-14.313 c-25.021-0.376-49.916,5.971-72.814,15.806c-5.105,2.491-10.83,4.481-14.936,8.714c-1.622,1.739-1.622,4.732,0.247,6.222 C113.511,315.787,118.487,317.28,123.22,318.647z M324.864,352.88c-21.784,3.859-43.694,7.472-65.726,8.589 c-24.147,1.618-48.294,0.247-72.191-2.241c-4.604-0.623-9.211-1.368-13.317-3.483c-2.116-1.246-4.231-3.236-4.106-5.854 c0.247-4.106,3.73-6.967,6.222-9.956c-7.715,2.739-15.434,5.599-21.906,10.708c-2.742,2.116-5.478,5.474-4.733,9.208 c1.125,4.356,5.356,6.97,9.09,8.96c9.208,4.733,19.54,6.846,29.625,8.714c25.511,4.11,51.527,4.235,77.167,2.488 c27.141-2.115,54.148-6.594,80.411-14.313C337.932,362.342,330.836,358.479,324.864,352.88z M188.068,395.951 c-6.97,1.99-14.066,4.357-19.79,8.957c-2.868,2.241-5.105,6.104-3.734,9.713c1.743,4.604,6.1,7.347,10.203,9.705 c10.708,5.854,22.78,8.589,34.604,10.708c26.765,4.229,54.27,3.608,80.908-1.12c15.806-2.989,31.615-7.221,46.301-13.815 c-9.584-3.984-18.917-8.467-27.878-13.693c-15.559,2.738-31.246,5.603-47.178,6.598c-21.032,1.618-42.319-0.125-63.355-2.738 c-4.98-1.121-11.202-1.618-14.563-5.976C181.847,400.677,185.828,398.063,188.068,395.951z M358.345,475.982 c17.424-3.604,34.977-7.719,50.908-15.806c4.976-2.867,11.076-5.979,12.698-11.95c0.87-5.725-5.105-8.714-9.337-11.08 c2.613,2.993,4.356,7.347,1.74,10.83c-4.357,5.853-11.821,8.091-18.42,10.332c-20.66,5.85-42.072,8.216-63.355,10.582 c-56.385,5.102-113.146,6.348-169.528,1.618c-18.92-1.994-38.217-4.109-56.264-10.829c-2.86-1.246-7.217-2.492-7.217-6.352 c1.117-3.354,4.357-5.227,7.217-6.845c12.945-6.595,27.384-10.207,41.822-11.077c-4.228-2.491-9.208-2.738-14.062-2.613 c-12.076,0.373-23.9,3.483-35.349,7.347c-9.834,3.604-19.916,7.59-27.76,14.811c-3.111,2.735-5.971,7.962-2.739,11.699 c4.98,5.353,12.699,6.72,19.54,8.338c38.338,6.599,77.171,10.328,116.011,11.699C255.781,488.184,307.684,485.942,358.345,475.982z M409.378,482.706c-23.402,7.468-47.672,11.574-71.822,14.936c-41.696,5.227-83.769,6.845-125.716,5.603 c-25.515-0.995-51.03-2.738-76.176-6.974c5.85,3.984,13.071,5.227,19.794,7.096c28.257,5.976,57.255,7.096,86.01,7.966 c42.19,0.748,84.387-0.87,125.962-7.468c19.669-3.48,39.459-7.715,57.13-16.927c9.215-4.854,18.552-12.326,20.163-23.152 C435.391,473.741,421.951,478.349,409.378,482.706z"> </path> </g> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Game Maker Language (GML)</h2>
                    <li><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_light_gamemaker2</title><path d="M16.011,2h0L30,16h0c-2.7,0-5.394.005-8.09,0q0,4.056,0,8.112C19.95,26.077,17.982,28.034,16.025,30h0L2,16.008H2ZM10.12,16.008,16.009,21.9q0-2.949,0-5.9c1.96,0,3.92.005,5.88,0-1.949-1.973-3.92-3.925-5.878-5.888Q13.064,13.058,10.12,16.008Z"></path></g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>HTML</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html5</title> <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z"></path> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>CSS</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>css3</title> <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"></path> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>JavaScript</h2>
                    <li><svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e75c7"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"> </path> </g> </g></svg></li>                    
                </div>
                <div class="skills-container section-hidden">
                    <h2>Python</h2>
                    <li><svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>python</title> <path d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z"></path> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                            <h2>TensorFlow</h2>
                            <li><svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tensorflow</title> <path d="M29.399 14.959l-0.017-6.636-12.806-7.319v29.991l5.117-2.972v-8.438l3.864 2.234-0.023-5.771-3.841-2.194v-3.35l7.708 4.454zM2.619 8.322l12.806-7.318v29.991l-5.117-2.972v-17.519l-7.708 4.454 0.019-6.636z"></path> </g></svg></li>
                        </div>
                        <div class="skills-container section-hidden">
                            <h2>ChatGPT</h2>
                            <li><svg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'>
                                <path d='m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z'/>
                                </svg></li>
                        </div>
                        <div class="skills-container section-hidden">
                            <h2>Excel</h2>
                            <li><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" xml:space="preserve" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M25.162,3H16v2.984h3.031v2.031H16V10h3v2h-3v2h3v2h-3v2h3v2h-3v3h9.162 C25.623,23,26,22.609,26,22.13V3.87C26,3.391,25.623,3,25.162,3z M24,20h-4v-2h4V20z M24,16h-4v-2h4V16z M24,12h-4v-2h4V12z M24,8 h-4V6h4V8z"></path> <path  d="M0,2.889v20.223L15,26V0L0,2.889z M9.488,18.08l-1.745-3.299c-0.066-0.123-0.134-0.349-0.205-0.678 H7.511C7.478,14.258,7.4,14.494,7.277,14.81l-1.751,3.27H2.807l3.228-5.064L3.082,7.951h2.776l1.448,3.037 c0.113,0.24,0.214,0.525,0.304,0.854h0.028c0.057-0.198,0.163-0.492,0.318-0.883l1.61-3.009h2.542l-3.037,5.022l3.122,5.107 L9.488,18.08L9.488,18.08z"></path> </g> </g></svg></li>
                        </div>
            </ul>
            <h3>Softwares</h3>
            <ul class="skills-software icons-skills">
                <div class="skills-container section-hidden">
                    <h2>Game Maker Studio 2</h2>
                    <li><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_light_gamemaker2</title><path d="M16.011,2h0L30,16h0c-2.7,0-5.394.005-8.09,0q0,4.056,0,8.112C19.95,26.077,17.982,28.034,16.025,30h0L2,16.008H2ZM10.12,16.008,16.009,21.9q0-2.949,0-5.9c1.96,0,3.92.005,5.88,0-1.949-1.973-3.92-3.925-5.878-5.888Q13.064,13.058,10.12,16.008Z"></path></g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Unity</h2>
                    <li><svg fill="#ffffff" viewBox="-0.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m15.266 12.001 4.2-7.249 2.03 7.253-2.03 7.25-4.2-7.25zm-2.047 1.177 4.201 7.254-7.316-1.876-5.285-5.378zm4.2-9.608-4.2 7.253h-8.4l5.285-5.378 7.314-1.875zm6 5.963-2.566-9.533-9.564 2.555-1.416 2.489-2.873-.021-7 6.978 7 6.977 2.871-.022 1.418 2.489 9.564 2.554 2.56-9.531-1.453-2.468z"></path></g></svg></li>
                </div>
            </ul>
        </div>
        `;
    } else if (buttonClicked === btn3d) {
        html.classList.add('cube-mode');
        html.classList.remove('art-mode');
        html.classList.remove('programmer-mode');

        currentMode = btn3d;

        boxAboutText.innerHTML = `
        <div class="section-subtitle">
        <h2 class="section-hidden">
            <p>🧊</p>
            <p><span>Modelador</span> e Designer 3D</p>
        </h2>
        </div>

        <h3 class="text-about section-hidden">
            Sou um Modelador e Designer 3D
            <p>Modelagem, Interiores, Render, C4D e Blender</p>
        </h3>

        <h4 class="section-hidden">
        Minha jornada na modelagem 3D começou em 2014, quando tinha apenas 8 anos, com o Blender 2.69. Com o tempo, me aventurei no Cinema 4D, onde me diverti criando animações de Minecraft e renderizações de interiores. Infelizmente, perdi a maior parte desse trabalho quando meu HD quebrou. :( Desde 2020, tenho me dedicado à modelagem de faces para o PES 21 usando o Blender. Já vendi várias dessas modelagens e até trabalhei para um patch por um tempo. Atualmente, estou aprimorando minhas habilidades em low poly pixel art, uma técnica que estou empregando no desenvolvimento do meu novo jogo. Cada projeto é uma nova oportunidade para aprender e crescer nesta área fascinante.
        </h4>

        <h4 class="section-hidden">
            Abaixo está o <p>currículo</p> para download.
        </h4>

        <div class="button-cta section-hidden">
            <a>Currículo</a>
        </div>
        `;
        ///////////////TECHS/////////////////
        aboutTechs.innerHTML = `
        <h3>Habilidades</h3>
        <ul class="skills-techs icons-skills">
            <div class="skills-container section-hidden">
                    <h2>Modelagem 3D</h2>
                    <li><svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e03ec8e"> <path display="inline" d="M383.116,234.527c14.689,55.95,33.375,133.562,28.371,167.646c-6.968,47.267-36.288,71.583-81.531,60.464 c-37.473-9.196-73.103-68.48-128.839-115.692c-41.805-35.417-60.523-50.315-79.269-57.393c1.298-12.439,4.555-21.894,14.195-24.783 c-12.054,2.354-20.442,7.653-22.343,25.709c-0.29,2.386-0.431,5.171-0.386,8.288c0,0.068,0,0.122,0,0.195 c0.386,35.82,20.619,115.801,14.825,136.065c-4.69,16.413-26.316,28.935-44.717,34.188c-30.495,8.715-37.876-2.358-42.068-4.604 c-17.089-9.2-51.808-98.698-37.463-180.783c7.231-41.419,30.912-83.486,74.277-95.322c41.351-11.278,98.826,8.483,175.802,76.932 c18.001,57.896,45.157,128.721,42.607,143.274c3.557-18.591-31.188-129.466-43.724-187.348c-1.987-10.221-3.615-19.875-4.94-29.084 c-1.143-16.718,19.476-33.703,40.648-41.909c25.173-9.763,66.483-8.058,74.055,6.732c2.191,11.006,5.599,24.842,10.797,42.122 C376.288,210.438,379.568,222.278,383.116,234.527z M368.535,148.699c2.123-1.252,4.042-2.481,5.712-3.611 c-2.305-0.83-4.496-1.46-6.578-1.932C367.914,144.894,368.19,146.749,368.535,148.699z M363.871,66.964 c5.036,9.522,7.146,21.876,7.146,32.496c0,8.955-1.502,16.607-4.037,20.305c-0.168,0.55-0.622,2.618-0.622,7.286 c0,2.241,0.123,5.086,0.427,8.574c4.191,0.703,8.91,2.178,13.945,4.237c22.674-21.367,30.001-53.577,24.843-64.297 c-26.952-21.218-51.917-34.41-76.415-36.075C343.874,44.041,356.771,53.595,363.871,66.964z M446.7,180.945 c9.405-8.919,26.04-27.224,32.414-35.676c-23.739-25.577-51.876-51.436-51.876-51.436c-4.373-3.924-8.691-7.662-12.965-11.228 c0.276,6.301-0.844,13.886-3.326,21.952c-2.717,8.655-9.199,24.466-23.113,38.461C406.466,151.971,428.396,167.127,446.7,180.945z M381.224,198.893c6.429,5.616,13.434,11.854,20.638,17.951c7.83-2.641,28.067-20.805,37.943-29.669l1.475-1.33 c-19.008-14.249-41.283-29.446-59.171-37.563c-3.548,2.849-8.497,5.87-12.194,7.976c1.824,9.182,4.537,20.441,8.497,34.196 C379.337,193.335,380.285,196.161,381.224,198.893z M282.925,144.866c-5.313-19.435-15.588-63.839-7.218-88.908 c-25.391,19.575-36.383,56.254-30.05,118.273C253.174,161.774,267.959,151.24,282.925,144.866z M360.496,144.894 c-2.926-20.151-0.676-26.902-0.168-28.096c0.168-0.358,0.372-0.689,0.608-0.979c3.625-4.097,5.117-29.279-3.448-45.461 c-11.613-21.853-40.884-32.056-65.477-23.958c-18.8,7.948-13.237,55.609-2.313,95.895 C311.393,135.172,343.86,134.455,360.496,144.894z M511.415,189.819c-0.952-7.767-12.812-23.037-27.337-39.133 c-7.019,8.987-22.107,25.6-31.543,34.71c15.242,11.759,27.155,21.875,31.103,25.272c7.199-2.187,24.715-13.927,27.832-18.169 C511.528,191.552,511.497,190.663,511.415,189.819z M463.182,246.01c8.303-2.913,17.076-9.097,25.215-15.43 c7.39-5.757,15.062-15.9,19.435-25.409c-7.34,5.354-16.703,10.757-22.429,12.476C481.859,227.01,471.112,238.438,463.182,246.01z M447.154,190.313l-2.509,2.241c-13.683,12.28-27.56,24.421-36.705,29.384c15.465,12.734,31.12,23.763,42.897,25.555 c7.626-6.547,23.391-21.54,27.614-31.788C472.768,210.742,461.182,201.061,447.154,190.313z"> </path> </g> </g></svg></li>
            </div>         
            <div class="skills-container section-hidden">
                    <h2>Low Poly</h2>
                    <li><svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#ffffff;stroke-miterlimit:10;stroke-width:1.95px;}</style></defs><polygon class="cls-1" points="12 18.63 18.84 15.21 18.84 7.68 12 4.32 5.16 7.68 5.16 15.21 12 18.63"></polygon><polyline class="cls-1" points="5.16 8.09 5.19 8.09 12 11.46 12 18.84"></polyline><polyline class="cls-1" points="12 18.84 12 11.46 18.81 8.09 18.84 8.09"></polyline><polyline class="cls-1" points="18.84 8.09 18.81 8.09 12 11.46 5.19 8.09 5.16 8.09"></polyline><polyline class="cls-1" points="1.25 6.14 1.25 1.25 6.14 1.25"></polyline><polyline class="cls-1" points="6.14 22.75 1.25 22.75 1.25 17.86"></polyline><polyline class="cls-1" points="22.75 17.86 22.75 22.75 17.86 22.75"></polyline><polyline class="cls-1" points="17.86 1.25 22.75 1.25 22.75 6.14"></polyline></g></svg></li>
            </div>         
            <div class="skills-container section-hidden">
                    <h2>Design de Interiores</h2>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M 25 0 C 24.8085 -1.8503717e-17 24.6045 0.04625 24.4375 0.15625 L 0.4375 15.96875 C 0.1565 16.15375 0 16.4765 0 16.8125 L 0 23.3125 C 0 23.6805 0.20725 24.0135 0.53125 24.1875 C 0.85525 24.3615 1.2545 24.329 1.5625 24.125 L 25 8.59375 L 48.4375 24.125 C 48.6045 24.236 48.807 24.3125 49 24.3125 C 49.162 24.3125 49.32075 24.2665 49.46875 24.1875 C 49.79375 24.0135 50 23.6805 50 23.3125 L 50 16.8125 C 50 16.4755 49.8435 16.15275 49.5625 15.96875 L 25.5625 0.15625 C 25.3955 0.04625 25.1915 1.8503717e-17 25 0 z M 25 11 L 3 25.5625 L 3 49 C 3 49.553 3.448 50 4 50 L 46 50 C 46.553 50 47 49.553 47 49 L 47 25.5625 L 25 11 z M 19.5 23 L 30.5 23 C 33.337 23 35.71775 25.145 35.96875 28 C 33.17775 28.014 31 30.205 31 33 C 31 33.897 30.897 34 30 34 L 20 34 C 19.103 34 19 33.897 19 33 C 19 30.205 16.82225 28.014 14.03125 28 C 14.27925 25.227 16.573 23 19.5 23 z M 14 30 C 15.7 30 17 31.3 17 33 C 17 35 18 36 20 36 L 30 36 C 32 36 33 35 33 33 C 33 31.3 34.3 30 36 30 C 37.7 30 39 31.3 39 33 C 39 34.7 37.7 36 36 36 L 36 37.6875 C 36 38.5985 35.613 39.42925 35 40.03125 L 35 43 C 35 43.6 34.50625 44.09375 33.90625 44.09375 L 32.09375 44.09375 C 31.49375 44.09375 31 43.6 31 43 L 31 41 L 19 41 L 19 43 C 19 43.6 18.50625 44.09375 17.90625 44.09375 L 16.09375 44.09375 C 15.49375 44.09375 15 43.6 15 43 L 15 40.03125 C 14.387 39.42925 14 38.5985 14 37.6875 L 14 36 C 12.3 36 11 34.7 11 33 C 11 31.3 12.3 30 14 30 z"/></svg></li>
            </div>         
            <div class="skills-container section-hidden">
                    <h2>Animação 3D (Basico)</h2>
                    <li><svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,13v8a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h8A1,1,0,0,1,22,13ZM7,6A1,1,0,0,0,6,7v9a1,1,0,0,0,1,1h3V10.5a.5.5,0,0,1,.5-.5H17V7a1,1,0,0,0-1-1ZM3,13H4V4.5A.5.5,0,0,1,4.5,4H13V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3v9A1,1,0,0,0,3,13Z"></path></g></svg></li>
            </div>         
        </div>
        </ul>
        <h3>Softwares</h3>
            <ul class="skills-software icons-skills">
                <div class="skills-container section-hidden">
                    <h2>Blender</h2>
                    <li><svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e0426ac"> <path display="inline" d="M510.003,279.642c-2.998-21.097-10.305-41.104-21.724-59.459c-9.96-16.019-22.739-30.266-37.992-42.375 l0.041-0.038L290.133,54.731c-0.133-0.116-0.27-0.224-0.361-0.287c-5.327-4.08-12.538-6.325-20.298-6.325 c-7.769,0-15.262,2.25-21.088,6.337c-6.263,4.375-9.843,10.18-10.093,16.36c-0.229,5.764,2.521,11.311,7.764,15.636 c10.31,8.134,20.598,16.447,30.898,24.768c9.997,8.08,20.298,16.401,30.549,24.502l-196.213-0.133 c-22.439,0-37.718,10.537-40.861,28.178c-1.381,7.727,1.056,16.223,6.504,22.73c5.78,6.899,14.172,10.704,23.629,10.704 l14.958,0.009c20.664,0,41.419-0.05,62.146-0.1l19.766-0.046L19.354,328.812l-0.707,0.516C8.7,336.954,2.188,347.642,0.783,358.653 c-1.065,8.342,0.881,15.965,5.63,22.053c5.66,7.257,14.497,11.249,24.885,11.249c10.205,0,20.618-3.867,29.334-10.908l96.166-78.7 c-0.411,3.843-0.91,9.481-0.853,13.573c0.108,6.479,2.188,19.479,5.481,30.033c6.804,21.691,18.265,41.536,34.063,58.964 c16.438,18.131,36.458,32.508,59.5,42.721c24.361,10.774,50.547,16.243,77.836,16.243h0.253 c27.376-0.066,53.646-5.622,78.085-16.518c23.08-10.334,43.091-24.769,59.467-42.899c15.778-17.516,27.222-37.394,34.013-59.067 c3.356-10.721,5.519-21.82,6.417-33.003C511.899,301.565,511.538,290.545,510.003,279.642z M334.821,383.601 c-60.142,0-108.912-43.627-108.912-97.447c0-53.815,48.771-97.442,108.912-97.442c60.141,0,108.907,43.627,108.907,97.442 C443.729,339.974,394.962,383.601,334.821,383.601z M397.627,277.591c0.886,16.064-5.53,30.978-16.796,42.019 c-11.461,11.248-27.816,18.313-46.102,18.313c-18.281,0-34.637-7.065-46.102-18.313c-11.262-11.041-17.665-25.954-16.784-42.006 c0.865-15.603,8.476-29.376,19.94-39.128c11.273-9.589,26.411-15.44,42.945-15.44c16.538,0,31.671,5.852,42.945,15.44 C389.14,248.228,396.754,261.992,397.627,277.591z"> </path> </g> </g></svg></li>
                </div>
                <div class="skills-container section-hidden">
                    <h2>Cinema 4D</h2>
                    <li><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.022 5.127c-3.236.586-5.345 1.79-6.722 2.92a8.25 8.25 0 0 0 -.273 2.072c0 4.794 4.093 8.68 9.141 8.68.753 0 1.467-.098 2.146-.264 1.458-1.848 2.651-5.065 2.955-7.728.319-2.786.953-3.63 1.742-4.18.28-.195.574-.344.885-.415a8.13 8.13 0 0 0 -4.444-4.168c.005.022.014.04.019.062.381 1.629-1.356 2.28-5.449 3.021zm11.157 2.771a3.006 3.006 0 0 1 -.097-.214c-.594-1.455-2.022-.512-2.399.344-.742 1.686-.633 2.422-.934 4.131s-1.337 4.999-2.828 6.688c-2.13 2.412-4.46 3.484-7.727 3.172s-5.785-3.082-6.717-5.09c-.782-1.685-.9-3.596.025-6.073s3.7-4.491 6.237-5.459 4.545-1.063 5.96-1.475c1.415-.413 2.249-1.093 2.197-1.672-.065-.718-.757-1.1-1.148-1.26a12.249 12.249 0 0 0 -3.751-.584c-6.611 0-11.97 5.218-11.97 11.655s5.359 11.655 11.97 11.655 11.97-5.218 11.97-11.655a11.377 11.377 0 0 0 -.788-4.163z"/></svg></li>
                </div>
            </ul>
        `;
    }

    if(!hidden) {
        document.querySelectorAll('.section-show').forEach(section => {
            section.classList.remove('section-show');
            section.classList.add('section-hidden');
        });
        document.querySelectorAll('.section-show-project').forEach(section => {
            section.classList.remove('section-show-project');
            section.classList.add('section-hidden');
        });
        initialObserver();
    }

    let skills = document.getElementById('skills');
    skills.classList.remove('skills-active');

    checkSkillsHeight();
}

btnArt.addEventListener('click', toggleMode);
btnProgrammer.addEventListener('click', toggleMode);
btn3d.addEventListener('click', toggleMode); 
///////////////////////////////////////////////////////////////////
let softSkillsBtn = document.querySelector('.fa-arrow-right');
let skillsBtn = document.querySelector('.fa-arrow-left');

function softSkill() {
    let skills = document.getElementById('skills');
    skills.classList.toggle('skills-active');

    checkSkillsHeight();
}

softSkillsBtn.addEventListener('click', softSkill);
skillsBtn.addEventListener('click', softSkill);
/////////////////////////////////////////////////////////////////////
function checkOrientation() {
    const link = document.querySelector('.skills-box a');
    if (window.matchMedia("(orientation: portrait)").matches) {
        link.setAttribute('href', '#skills');
    } else {
        link.removeAttribute('href');
    }
}

// Check orientation on page load
checkOrientation();

// Add event listener for orientation change
window.addEventListener('resize', checkOrientation);


