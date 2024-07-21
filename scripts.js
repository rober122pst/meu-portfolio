// if (window.location.pathname.endsWith('.html')) {
//     window.history.replaceState({}, '', window.location.pathname.replace('.html', ''));
// }

document.querySelector(".notificacao").remove();

const artMode = document.querySelector('.art-mode');

window.addEventListener("load", () => {
    let loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        loader.remove();
    });

    document.querySelector(".no-js").classList.remove('no-js');

    checkSkillsHeight();


    // if((document.querySelector('.first .projects-grid').offsetHeight + 92 + 177 + 32) > 301) {
    //     document.querySelector('#projects').style.maxHeight = (document.querySelector('.first .projects-grid').offsetHeight + 92 + 177 + 32) + 'px';

    //     console.log('calculou');
    // }
    
});

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

// Array para armazenar as instâncias dos Swipers
let swipers = [];

// Inicializa todos os Swipers
function initSwipers() {
    // Encontre todas as instâncias do Swiper na página
    document.querySelectorAll('.mySwiper').forEach((container, index) => {
        const pagination = container.querySelector('.swiper-pagination');
        const nextButton = container.querySelector('.swiper-button-next');
        const prevButton = container.querySelector('.swiper-button-prev');
        
        // Cria uma nova instância do Swiper e armazena no array
        swipers[index] = createSwiper(container, pagination, nextButton, prevButton);
    });
}

// Função para recriar os Swipers
function updateSwipers() {
    // Destroi todas as instâncias do Swiper
    swipers.forEach(swiper => {
        if (swiper && typeof swiper.destroy === "function") {
            swiper.destroy(true, true);
        }
    });
    
    // Limpa o array de Swipers
    swipers = [];
    
    // Inicializa novamente os Swipers
    initSwipers();
}

// Inicializa os Swipers na primeira carga da página
initSwipers();

// Adiciona um listener para o evento resize
window.addEventListener('resize', function() {
    updateSwipers();
});
// Executa a função uma vez ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    updateSwipers();
});

let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    navbarColor();
})

function navbarColor() {
    if(window.scrollY >= 10){
        header.style.background = '#191919';
        header.style.boxShadow = '0px 5px 9px 0px #0c0c0c';
    }else {
        header.style.background = 'transparent';
        header.style.boxShadow = '0px 0px 0px 0px transparent';
    }
}

const btnMobile = document.querySelector('.burguer');

var cont = false;
function toggleMenu() {
    const nav = document.querySelector('.navbar-geral');
    if((header.style.background === 'transparent' || window.scrollY >= 10) && !cont) {
        header.style.background = '#191919'
        header.style.boxShadow = '0px 5px 9px 0px #0c0c0c';
        console.log('Fechou');
    }else{
        header.style.background = 'transparent'
        header.style.boxShadow = '0px 0px 0px 0px transparent';
    }
    nav.classList.toggle('active');
    cont = !cont;
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
    let projectsArts = document.querySelectorAll('.projects-grid > div');

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

const options = {
    root: null,
    rootMargin: '0px',
    threshold:[0.1, 0.2]
}

const fixedDiv = document.querySelector('.manual-navigation');
const targetSection = document.querySelector('.projects-wrapper');

// Cria um Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(Math.round(entry.intersectionRatio * 100) >= 10 && window.innerHeight <= 850) {
                fixedDiv.style.visibility = 'visible';
                fixedDiv.style.transform = 'translateY(0)';
                fixedDiv.style.opacity = '1';
            }else if(Math.round(entry.intersectionRatio * 100) >= 20) {
                fixedDiv.style.visibility = 'visible';
                fixedDiv.style.transform = 'translateY(0)';
                fixedDiv.style.opacity = '1'; 
            }

            console.log('observando artes');
        } else {
            fixedDiv.style.visibility = 'hidden';
            fixedDiv.style.transform = 'translateY(100%)';
            fixedDiv.style.opacity = '0';

            console.log('não observando artes');
        }
    });
}, options);

// Observa a seção alvo
observer.observe(targetSection);


const radio1 = document.getElementById('radio1');

// Marcar o radio1 como checked quando a página carregar
radio1.checked = true;
// Altura da DIV

document.addEventListener('DOMContentLoaded', function () {
    function isInView(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);      
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        return (vertInView);
      }

        const radios = document.querySelectorAll('input[name="radio-btn"]');
        radios.forEach(radio => {
            radio.addEventListener('change', function () {
            const parentDiv = document.querySelector('#projects');
            const artTitle = document.querySelector('.art-title');
            if (radio.id === 'radio1') {
                parentDiv.style.maxHeight = (document.querySelector('.first .projects-grid').offsetHeight + 92 + 177 + 32) + 'px'; // Altere o estilo conforme necessário
    
                if(!isInView(document.querySelector('.first .projects-grid')))
                artTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (radio.id === 'radio2') {
                parentDiv.style.maxHeight = (document.querySelector('.second .projects-grid').offsetHeight + 92 + 177 + 32) + 'px';// Altere o estilo conforme necessário
                
                if(!isInView(document.querySelector('.second .projects-grid')))
                artTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (radio.id === 'radio3') {
                parentDiv.style.maxHeight = (document.querySelector('.third .projects-grid').offsetHeight + 92 + 177 + 32) + 'px'; // Altere o estilo conforme necessário
                if(!isInView(document.querySelector('.third .projects-grid')))
                artTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            });
        });
    });




  
///////////////////////////////////////////////////////////////
function checkSkillsHeight() {
    let skills = document.getElementById('skills');
    const skillBox = document.querySelector('.skills-box');
    const skillOtherBox = document.querySelector('.others-skills-box');

    const skillHeight = skillBox.offsetHeight;
    const otherSkillHeight = skillOtherBox.offsetHeight;
    if(!skills.classList.contains('skills-active')) {
        skills.style.maxHeight = (skillHeight+200) + 'px';
    }else {
        skills.style.maxHeight = (otherSkillHeight+200) + 'px';
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
    const aboutTechs = document.querySelector('.skills-content');
    
    const buttonClicked = event.target;

    if(buttonClicked === currentMode) {
        return;
    }
    
    hidden = false;
    
    const boxAboutText = document.querySelector('.box-about');

    if (buttonClicked === btnArt) {
        html.classList.add('art-mode');
        html.classList.remove('programmer-mode');
        html.classList.remove('cube-mode');

        currentMode = btnArt;

        changeSkillsContent(btnArt);
        changeProjectsContent(btnArt);

        boxAboutText.innerHTML = `
        <div class="section-subtitle">
        <h2 class="section-hidden">
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
        
    } else if (buttonClicked === btnProgrammer) {
        html.classList.add('programmer-mode');
        html.classList.remove('art-mode');
        html.classList.remove('cube-mode');

        currentMode = btnProgrammer;

        changeSkillsContent(btnProgrammer);
        changeProjectsContent(btnProgrammer);

        boxAboutText.innerHTML = `
        <div class="section-subtitle">
        <h2 class="section-hidden">
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
        
        
    } else if (buttonClicked === btn3d) {
        html.classList.add('cube-mode');
        html.classList.remove('art-mode');
        html.classList.remove('programmer-mode');

        currentMode = btn3d;

        changeSkillsContent(btn3d);
        changeProjectsContent(btn3d);

        boxAboutText.innerHTML = `
        <div class="section-subtitle">
        <h2 class="section-hidden">
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
        
    }

    initialObserver();

    let skills = document.getElementById('skills');
    skills.classList.remove('skills-active');

    checkSkillsHeight();

    if((document.querySelector('.first .projects-grid').offsetHeight + 92 + 177 + 32) > 301) {
        document.querySelector('#projects').style.maxHeight = (document.querySelector('.first .projects-grid').offsetHeight + 92 + 177 + 32) + 'px';

        console.log('calculou');
    }

    
}

const originalSkillsContent = document.querySelector('.skills-content').innerHTML;

function changeSkillsContent(atualMode) {
    const btnArt = document.querySelector('.art-btn');
    const btnProgrammer = document.querySelector('.programmer-btn');
    const btn3d = document.querySelector('.cube-btn');

    const aboutTechs = document.querySelector('.skills-content');

    if(atualMode === btnProgrammer) {
        aboutTechs.innerHTML = originalSkillsContent;
    }else if(atualMode === btnArt) {
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
    }else if(atualMode === btn3d) {
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
}

const originalProjectContent = document.querySelector('.projects-wrapper').innerHTML;

function changeProjectsContent(atualMode) {
    const btnArt = document.querySelector('.art-btn');
    const btnProgrammer = document.querySelector('.programmer-btn');
    const btn3d = document.querySelector('.cube-btn');

    const textProjects = document.querySelector('.projects-wrapper');

    if(atualMode === btnProgrammer) {
        textProjects.innerHTML = originalProjectContent;
        updateSwipers();
    }else if(atualMode === btnArt) {
        textProjects.innerHTML = `
        <div class="swiper mySwiper section-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div class="swiper-wrapper">
                <div class="swiper-slide card-project">
                </div>
            </div>
        </div>
        <div class="projects-title">
            <h2>ARTES</h2>
        </div>
        
        <div class="arts-projects">
            
            <div class="sliders first">
                <div class="art-title section-hidden">
                    <h2>
                        Pixel Arts
                    </h2>
                </div>
                <div class="projects-grid">               
                    <div class="l-img section-hidden" target="_blank">
                        <a href="https://www.artstation.com/artwork/5vz05O">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Recife</h3>
                                    <p>Eterno símbolo de orgulho é o pavilhão, de listras pretas e vermelhas com o Leão. A bandeira do Sport Club do Recife no topo do mastro. Feita para um desafio semanal. Minha primeira animação com uma paleta de cores coloridas.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Dimensões: </b>290x290 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/SPORTRECIFE1.gif" alt="sport-recife">
                        </a>
                    </div>

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/aowyY2" target="_blank">
                            <img src="./img/projects/projects-arts/spider-man.gif" alt="spiderman">
                        
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Spider-Man</h3>
                                    <p>Peguei uma print do jogo <b>Marvel's Spider-Man</b> que eu tirei e desenhei isso para o desafio da semana. no cenário fiz o Empire State para representar New York. A águia voando é para deixar a cena mais legal e mostrar o quão alto o Aranha está observando sua cidade. Além de ser um símbolo americano.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Dimensões: </b>240x135 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="l-img section-hidden">
                        <a href="https://www.artstation.com/artwork/BXAYZ9" target="_blank">
                            <img src="./img/projects/projects-arts/FOXY.png" alt="foxy-fnaf">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Nightmare Foxy</h3>
                                    <p>Uma arte simples do Foxy para o desafio semanal. Gosto muito de usar paletas monocromáticas. Foram utilizadas 9 cores apenas.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Abril de 2024</p>
                                    <p><b>Dimensões: </b>128x128 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>                    
                    </div>  
    
                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/ob4K3m" target="_blank">
                            <img src="./img/projects/projects-arts/youlooklonely.png" alt="you-look-lonely">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>You Look Lonely</h3>
                                    <p>Minha primeira pixel art de canvas grande. Como fiz essa quando tava començando a aprender, usei uma camada de referencia para desenhar a Ana de Armas. Na época não sabia muito bem usar as cores em pixel art, então usei bastante o conta gotas.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Outubro de 2023</p>
                                    <p><b>Dimensões: </b>209x116 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>     
                    
                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/ob4Kam" target="_blank">
                            <img src="./img/projects/projects-arts/spiderman.gif" alt="spiderman-perfil">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Spider-Man</h3>
                                    <p>O tema semanal dessa vez foi <b>dicotomia.</b> Então pensei logo no Homem-Aranha e no Venom.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Fevereiro de 2024</p>
                                    <p><b>Dimensões: </b>61x61 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/1xAO5o" target="_blank">
                            <img src="./img/projects/projects-arts/darkfantasy.png" alt="dark-fantasy">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Dark Fantasy</h3>
                                    <p>Usei 10 cores para fazer esta arte. Peguei muitas dicas fazendo ela.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Janeiro de 2024</p>
                                    <p><b>Dimensões: </b>180x180 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/Kendqx" target="_blank">
                            <img src="./img/projects/projects-arts/LifeIsStrange.png" alt="life-is-strange-butterfly">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Teoria do Caos</h3>
                                    <p>Esta ação terá consequencias.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Maio de 2024</p>
                                    <p><b>Dimensões: </b>137x158 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/w01K16" target="_blank">
                            <img src="./img/projects/projects-arts/games.gif" alt="games-art">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Game Night</h3>
                                    <p>Nessa arte minha intenção foi passar uma sensação de calma e nostalgia. Consegui superar minhas limitações fazendo esta arte, já que foi quando tava começando a aprender ainda.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Dezembro de 2023</p>
                                    <p><b>Dimensões: </b>215x193 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="v-img section-hidden">
                        <a href="https://www.artstation.com/artwork/Ge4QQ4" target="_blank">
                            <img src="./img/projects/projects-arts/sea.png" alt="sea">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Mar</h3>
                                    <p>Minha primeira tentativa de desenhar um mar. Usei uma paleta de 6 cores para ficar mais facil.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Fevereiro de 2024</p>
                                    <p><b>Dimensões: </b>150x219 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/g0kKrZ" target="_blank">
                            <img src="./img/projects/projects-arts/drive1.png" alt="i-drive">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Drive</h3>
                                    <p>Quis passar uma sensação retrô nessa arte, assim comom os posters do filme. Por isso usei bastande dithering e uma paleta bem limitada.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Janeiro de 2024</p>
                                    <p><b>Dimensões: </b>250x173 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/lDJJqa" target="_blank">
                            <img src="./img/projects/projects-arts/Dido1.gif" alt="dido">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Thank You - Dido</h3>
                                    <p>Peguei algumas referências do clipe da música e o quarto que aparece nele, juntei tudo e desenhei. Como o chá esfriando, a janela com a paisagem cinza, as fotos na parede, etc.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Dimensões: </b>227x183 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="v-img section-hidden">
                        <a href="https://www.artstation.com/artwork/KeXGGG" target="_blank">
                            <img src="./img/projects/projects-arts/natal.gif" alt="natal">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Merry Christmas</h3>
                                    <p>Uma das minhas artes favoritas, fiz bem no dia 24 de Dezembro.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Dezembro de 2023</p>
                                    <p><b>Dimensões: </b>165x305 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/ao223z" target="_blank">
                            <img src="./img/projects/projects-arts/Stan.gif" alt="stan">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>Stan</h3>
                                    <p>Essa arte fiz junto com a Thank you. Foi para o desafio da semana, que era transformar um trecho de uma musica em desenho. Como a musica "Thank You" da Dido tem o mesmo refrão da musica "Stan" e passam duas sensações bem diferentes, achei legal e juntei as duas em um vídeo.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Dimensões: </b>227x183 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/EvlWo8" target="_blank">
                            <img src="./img/projects/projects-arts/LaLaLand.png" alt="lalaland">
                            <div class="infos-arts">                        
                                <div class="title">
                                    <h3>City of Stars</h3>
                                    <p>Uma arte para um dos meus filmes favoritos, La La Land. Acho o poster do filme muito bonito, a tonalidade das cores é muito linda.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Dezembro de 2023</p>
                                    <p><b>Dimensões: </b>165x305 px</p>
                                    <p><b>Ferramentas: </b>Aseprite</p>
                                </div>
                            </div>
                        </a>
                    </div>
    
                </div>
            </div>
            
            <div class="sliders second">
                <div class="art-title section-hidden">
                    <h2>
                        Desenhos Tradicionais
                    </h2>
                </div>
                <div class="projects-grid">

                    <div class="v-img section-hidden">
                        <a href="https://www.artstation.com/artwork/1xAPY8" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Clementine</h3>
                                    <p>Um desenho da personagem principal dos jogos <b>The Walking Dead</b> da Telltale. Aqui fiz tudo no olhometro e usei os lápis HB, 2B, 4B e 6B da Faber Castell. Uma curiosidade é que fiz esse densenho durante uma festa de aniversário, subi pro quarto da minha avó e só sai quando terminei. Eu gosto muito desse desenho.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Outubro de 2022</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho, Caneta Preta</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/clementine.jpg" alt="clementine">
                        </a>
                    </div>     

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/qeqmRa" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Twisted Wolf</h3>
                                    <p>Esboço do Twisted Wolf do livro <b>FNAF: The Silver Eyes</b>.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Setembro de 2017</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/fnaf.jpg" alt="twisted-wolf">
                        </a>
                    </div>

                    <div class="l-img section-hidden">
                        <a href="https://www.artstation.com/artwork/Ev3oDe" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Jinx</h3>
                                    <p>O meu desenho favorito que nunca foi acabado. Decalquei botando uma foto da Jinx na televisão e o papel por cima, fiz dessa forma pois queria que o desenho fosse perfeito e focar mais no treino de sombreamento.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Dezembro de 2022</p>
                                    <p><b>Dimensões: </b>Folha A3 120 g/m²</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho, Caneta Preta</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/jinx.jpg" alt="jinx">
                        </a>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/WByDQD" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>It.</h3>
                                    <p>Fiz esse desenho para testar minhas canetas Nanquim e lápis de cor.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2017</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho <br> Nanquim, <br> Lápis de cor</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/it.jpg" alt="it-a-coisa">
                        </a>
                    </div>

                    <div class="l-img section-hidden">
                        <a href="https://www.artstation.com/artwork/ZaKQW0" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Moon Knight</h3>
                                    <p>Depois de praticamente 4 anos sem desenhar fiz esse desenho do Cavaleiro da Lua. Um dos meus preferidos, fiz tudo no olhometro. Mesmo sem praticar por tanto tempo, da pra ver como eu amadureci.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2022</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/cavaleirolua.jpg" alt="moon-knight">
                        </a>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/GexnPa" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Lion</h3>
                                    <p>Tava sem nada para fazer, então resolvi desenhar esse leão bem rapidinho.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Novembro de 2018</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite HB</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/leao.jpg" alt="sport-recife">
                        </a>
                    </div>

                    <div class="v-img section-hidden">
                            <div>

                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Deadpool</h3>
                                        <p>Meu primeiro desenho colorido. Fiz quando criança então tem muitas manchas e erros, mas ainda sim é um bom desenho.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Dezembro de 2017</p>
                                        <p><b>Dimensões: </b>Papel A4</p>
                                        <p><b>Ferramentas: </b>Grafite, Lápis de cor</p>
                                    </div>
                                </div>
                                <img src="./img/projects/projects-arts/desenhos-tradicionais/deadpool.jpg" alt="deadpool">
                            </div>
                    </div>

                    <div class="section-hidden">
                        <div>
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Foxy</h3>
                                    <p>Desenhei para passar o tempo na escola.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Setembro de 2017</p>
                                    <p><b>Dimensões: </b>Folha de caderno</p>
                                    <p><b>Ferramentas: </b>Caneta, Lápis de cor</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/foxy.jpg" alt="foxy-desenho">
                        </div>
                    </div>

                    <div class="v-img section-hidden">
                        <div>
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Magrão</h3>
                                    <p>Ídolo do Sport Recife. Imprimi uma foto dele e botei em baixo do papel com uma lanterna.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Outubro de 2017</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/magrao.jpg" alt="magrao-sport">
                        </div>
                    </div>

                    <div class="section-hidden">
                        <div>
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Bendy</h3>
                                    <p>Desenho que fiz para o meu amigo na escola.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2017</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho, <br> Lápis de Cor</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/bendy.jpg" alt="bendy">
                        </div>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/39A2bD" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Mbappe</h3>
                                    <p>Usei a tecninca dos quadradinhos para fazer esse desenho aqui. Minha dificuldade foi fazer o corte de cabelo dele.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2022</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/mbappe.jpg" alt="mbappe">
                        </a>
                    </div>

                    <div class="v-img section-hidden">
                        <div>
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Durval</h3>
                                    <p>Fiz da mesma forma que o Magrão.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2017</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/durval.jpg" alt="durval">
                        </div>
                    </div>

                    <div class="section-hidden">
                        <div>
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Nick</h3>
                                    <p>Nunca acabei esse desenho e nem posso terminar, pois perdi a imagem. É um desenho do meu falecido cachorro, por isso guardo com tanto carinho.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2017</p>
                                    <p><b>Dimensões: </b>Folha A4</p>
                                    <p><b>Ferramentas: </b>Grafite, Esfuminho</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/nick.jpg" alt="sport-recife">
                        </div>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/04AQEe" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Spider Gwen</h3>
                                    <p>Desenho simples da Gwen que fiz na escola. Pretendo fazer o sombreado depois.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2023</p>
                                    <p><b>Dimensões: </b>Folha A4 120 g/m²</p>
                                    <p><b>Ferramentas: </b>Grafite</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/gwen.jpg" alt="gwen-stacy">
                        </a>
                    </div>

                    <div class="footer-1 section-hidden">
                        <a href="">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Batman</h3>
                                    <p>Tributo a uns dos melhores desenhos que fiz, mas acabei perdendo. Era tão bom que tive que botar aqui. Foi o meu primeiro desenho usando a caneta para o sombreamento.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2017</p>
                                    <p><b>Dimensões: </b>Folha A3</p>
                                    <p><b>Ferramentas: </b>Caneta</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/desenhos-tradicionais/batman.jpg" alt="batman" style="opacity: .1;">
                        </a>
                    </div>
                    
                </div>
            </div>

            <div class="sliders third">
                <div class="art-title section-hidden">
                    <h2>
                        Designer
                    </h2>
                </div>
                <div class="projects-grid"> 
                    
                    <div class=" section-hidden">
                        <a href="https://www.artstation.com/artwork/zPb3rd" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Home - 2021</h3>
                                    <p>Uniforme 1 do Sport para a temporada 2021. Aperte para ver mais detalhes da textura.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2021.gif" alt="sport-recife-2021">
                        </a>
                    </div>     

                    <div class=" section-hidden">
                        <a href="https://www.artstation.com/artwork/zPb3rd" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Away - 2021</h3>
                                    <p>Uniforme 2 do Sport para a temporada 2021. Aperte para ver mais detalhes da textura.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2021away.gif" alt="sport-recife-2021-away">
                        </a>
                    </div>    
                    
                    <div class=" section-hidden">
                        <a href="https://www.artstation.com/artwork/zPb3rd" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Third - 2021</h3>
                                    <p>Uniforme 2 do Sport para a temporada 2021. Fiz o desenho da camisa todo no Corel. Aperte para ver mais detalhes da textura.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender, Corel DRAW</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sportlaranja.gif" alt="sport-recife-laranja">
                        </a>
                    </div>    

                    <div class=" section-hidden">
                        <a href="https://www.artstation.com/artwork/zPb3rd" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport GK - 2021</h3>
                                    <p>Camisa do goleiro da temporada 2021. Aperte para ver mais detalhes da textura.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2021gk.gif" alt="sport-recife-2021-gk">
                        </a>
                    </div> 

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Tri-Campeão</h3>
                                    <p>Fiz esse uniforme e os outros 3 seguintes para o meu modo carreira do <b>Pro Evolution Soccer 2021</b> onde fui campeão da Copa do Brasil com o Sport, então fiz esse uniforme para comemorar o tri-nacional, colocando 3 estrelas douradas como símbolo e relembrando as camisas de 2009, ano seguinte da primeira Copa do Brasil.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/KIT 1.png" alt="sport-recife-tri">
                        </a>
                    </div>     

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Tri-Campeão - Away Alt</h3>
                                    <p>Segui a mesma ideia do primeiro uniforme, mas não queria fazer ele branco. Como o terceiro uniforme é dourado, eu fiz esse com cores parecidas com o primeiro mesmo.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/ALTERNATIVO.png" alt="sport-recife-away-alt-tri">
                        </a>
                    </div>     

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Tri-Campeão - Away</h3>
                                    <p>Versão final do segundo uniforme. Fiz ele todo vermelho para se distanciar um pouco mais do primeiro e de outros times com cores escuras.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/KIT 2.png" alt="sport-recife-away-tri">
                        </a>
                    </div>     

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Tri-Campeão - Libertadores</h3>
                                    <p>Camisa dourada para lembrar a de 2009. Uniforme para celebrar a participação na Libertadores no game.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Março de 2024</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/LIBERTADORES.png" alt="sport-recife-third-tri">
                        </a>
                    </div>    
                    
                    
                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Recife GK - 2008</h3>
                                    <p>Uniforme icônico usada pelo ídolo Magrão em 2008. Fiz ela para tirar a print com a face do Magrão.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Agosto de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2008.gif" alt="sport-recife-2008">
                        </a>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Home - 2022</h3>
                                    <p>Uniforme 1 do Sport para 2022. Fazer o desenho da camisa aqui foi bem complicado.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Maio de 2022</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2022.gif" alt="sport-recife-2022">
                        </a>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Away - 2022</h3>
                                    <p>Uniforme 2 do Sport para 2022.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Maio de 2022</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2022away.gif" alt="sport-recife-2022-away">
                        </a>
                    </div>

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Corinthians - 1995</h3>
                                    <p>Camisa retrô do Corinthians feita para Patch.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Agosto de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/corinthians.gif" alt="corinthians">
                        </a>
                    </div>
                                
                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Recife Concept Kit - Home</h3>
                                    <p>Kits que fiz para o meu modo carreira no PES 21. Vou ser sincero, não sou muito fã desses. Nesse eu me inspirei no uniforme do Barcelona em 2020.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Julho de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2024mf.png" alt="sport-recife-concept">
                        </a>
                    </div>     

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Recife Concept Kit - Away</h3>
                                    <p>Fiz o branco clássico.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Julho de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2024mfaway.png" alt="sport-recife-concept-away">
                        </a>
                    </div>     

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Recife Concept Kit - Third</h3>
                                    <p>Nesse aqui quis fazer igual a uma camisa da Alemanha que é toda preta.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Julho de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2024mfthird.png" alt="sport-recife-concept-third">
                        </a>
                    </div>    

                    <div class="h-img section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Sport Recife Home - 2023</h3>
                                    <p>Uniforme 1 do Sport em 2023.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Abril de 2023</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sport2023.png" alt="sport-recife-2023">
                        </a>
                    </div>
                    
                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Guarani - 1994</h3>
                                    <p>Mais um uniforme retrô feito para um patch. Aqui foi bastante divertido fazer a textura da camisa.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Agosto de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/guarani.gif" alt="guarani">
                        </a>
                    </div>                                  

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Santo André - 1994</h3>
                                    <p>Esse uniforme é mais um feito para o patch.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Agosto de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/santoandre.gif" alt="santo-andre">
                        </a>
                    </div>                                  

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Imperatriz</h3>
                                    <p>Esse foi um pedido feito para um cliente. Uniforme do Imperatriz da temporada 2021.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Maio de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/imperatriz.gif" alt="imperatriz">
                        </a>
                    </div>                                  

                    <div class="section-hidden">
                        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
                            <div class="infos-arts">
                                <div class="title">
                                    <h3>Jogos Internos</h3>
                                    <p>Essas camisas fiz para entrar em uma votação para saber qual seria a camisa do Interclasse da escola. Teria quer te uma preta, azul, vermelha, verde e amarela. Fiz essas camisas na época em que meu PC tinha quebrado, então foi muito perrengue.</p>
                                </div>
                                <div class="infos">
                                    <p><b>Data: </b>Agosto de 2021</p>
                                    <p><b>Ferramentas: </b>Photoshop, Pes Master, Blender</p>
                                </div>
                            </div>
                            <img src="./img/projects/projects-arts/design/sesi.gif" alt="sesi">
                        </a>
                    </div>  

                </div>
            </div>
        </div>`;
    }else if(atualMode === btn3d) {
        textProjects.innerHTML = `

        <div class="swiper mySwiper section-hidden">
            <div class="swiper-wrapper">
                <div class="swiper-slide card-project">
                </div>
            </div>
        </div>
        <div class="projects-title">
            <h2>PROJETOS</h2>
        </div>
            <div class="arts-projects">
                
                <div class="sliders first">
                    <div class="art-title section-hidden">
                        <h2>
                            Pixel Arts
                        </h2>
                    </div>
                    <div class="projects-grid">   

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/RybZJD" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Rober Face - PES 21</h3>
                                        <p>Minha face pessoal para o meu Rumo ao Estrelado no PES. Para fazer faces para o jogo, usamos uma que já existe de base e modelamos por cima.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Julho de 2024</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/680/467/small/rober122-rober-face.jpg?1720062127" alt="rober-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/m8JRRe" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Tom Holland Face - PES 21</h3>
                                        <p>Face do ator Tom Holland. Fiz no hype para assistir Spider-Man: No Way Home no cinema.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Nov de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdna.artstation.com/p/assets/images/images/077/748/400/small/rober122-tom-holand-face.jpg?1720238952" alt="tom-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/BXgqm4" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Gustavo Florentin Face - PES 21</h3>
                                        <p>Ex técnico do Sport em 2021.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Agosto de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/767/881/small/rober122-florentin-face.jpg?1720295284" alt="florentin-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/DvaX5O" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Kratos Face - PES 21</h3>
                                        <p>Face feita a pedido de um cliente do Kratos. Foi um desafio bem legal.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Agosto de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/768/073/small/rober122-kratos-face.jpg?1720295815" alt="kratos-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/YBm9BK" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Emiliano Rigoni Face - PES 21</h3>
                                        <p>Face feita a pedido do dono de um Patch chamado Super Brazil. As tatuagens tambem foram eu que fiz.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Agosto de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdna.artstation.com/p/assets/images/images/077/768/276/small/rober122-rigone-face.jpg?1720296490" alt="rigoni-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/obr5JW" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Leo Barcia Face - PES 21</h3>
                                        <p>Face feita a pedido do dono de um Patch chamado Super Brazil.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Set de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/768/569/small/rober122-barcia-face.jpg?1720297490" alt="barcia-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/9EG98v" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Ciro Face - PES 21</h3>
                                        <p>Fiz essa face mais como um hobby para passar o tempo.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Julho de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdna.artstation.com/p/assets/images/images/077/768/730/small/rober122-ciro-face.jpg?1720298108" alt="ciro-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/PX8wKL" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Durval Face - PES 21</h3>
                                        <p>Face do seu Durval, ídolo do Sport.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Agosto de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdna.artstation.com/p/assets/images/images/077/772/550/small/rober122-durval-face.jpg?1720314530" alt="durval-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/obr5GW" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Vanderson Face - PES 21</h3>
                                        <p>Face de um jogador do Grêmio a pedido do Patch.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Maio de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/772/681/small/rober122-gremio-face.jpg?1720315632" alt="vanderson-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/04NwKy" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Gustavo Face - PES 21</h3>
                                        <p>Face de um jogador da base do Sport. Fazer essa foi realmente difícil, já que ele estava no começo de carreira e não tinha muitas fotos.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Julho de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/773/275/small/rober122-gustavo-face.jpg?1720318335" alt="gustavo-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/KeXb8o" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Mikael Face - PES 21</h3>
                                        <p>Face também de um jogador da base do Sport.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Abril de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdna.artstation.com/p/assets/images/images/077/773/450/small/rober122-mikael-face.jpg?1720319330" alt="mikael-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/AlVxeq" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Palmberg Face - PES 21</h3>
                                        <p>Face a pedido do Patch Super Brazil.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Set de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/773/561/small/rober122-palmberg-face.jpg?1720319712" alt="palmberg-face">
                            </a>
                        </div>

                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/8b2YXG" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Presidente Grêmio - PES 21</h3>
                                        <p>Face a pedido do Patch Super Brazil.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Set de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdna.artstation.com/p/assets/images/images/077/773/656/small/rober122-presida-gremio-face.jpg?1720320014" alt="gremio-face">
                            </a>
                        </div>
                        
                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/ZaNvr1" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Roberto - PES 21</h3>
                                        <p>Face do meu pai.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Agosto de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdna.artstation.com/p/assets/images/images/077/774/386/small/rober122-roberto-face.jpg?1720324303" alt="papai-face">
                            </a>
                        </div>
                        
                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/VJ56En" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Magrão - PES 21</h3>
                                        <p>Face do maior ídolo do Sport, Magrão.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Agosto de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/774/443/small/rober122-sem-titulo.jpg?1720324882" alt="magrao-face">
                            </a>
                        </div>
                        
                        <div class="l-img section-hidden">
                            <a href="https://www.artstation.com/artwork/PX8331" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Umberto Louzer - PES 21</h3>
                                        <p>Face de um ex técnico do Sport.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Junho de 2021</p>
                                        <p><b>Ferramentas: </b>Blender, Photoshop</p>
                                        <p><b>Categoria </b>Modelagem, Texturização</p>
                                    </div>
                                </div>
                                <img src="https://cdnb.artstation.com/p/assets/images/images/077/792/569/small/rober122-umberto-louzer-face.jpg?1720380372" alt="magrao-face">
                            </a>
                        </div>
                        
                        <div class="footer section-hidden">
                            <a href="https://www.artstation.com/artwork/041q0E" target="_blank">
                                <div class="infos-arts">
                                    <div class="title">
                                        <h3>Quarto</h3>
                                        <p>Essa é um dos únicos projetos de render que tenho salvo, infelizmente. Foi um quarto que fiz a pedido de um amigo.</p>
                                    </div>
                                    <div class="infos">
                                        <p><b>Data: </b>Agosto de 2022</p>
                                        <p><b>Ferramentas: </b>Cinema 4D</p>
                                        <p><b>Categoria </b>Modelagem, Texturização, Iluminação</p>
                                    </div>
                                </div>
                                <img src="./img/projects/projects-arts/3d/Quarto001.jpg" alt="quarto-face">
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        `;
    }
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
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////




