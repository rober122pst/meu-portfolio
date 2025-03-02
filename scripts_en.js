


const name_ = document.querySelector('.name');
function slimAnimation() {
    const meuElemento = document.querySelector('.animacao-rober');
    const animationDuration = 3; // Duração da animação em segundos
    const halfwayPoint = (animationDuration * .8) * 1000;

    meuElemento.addEventListener('animationstart', () => {
        setTimeout(() => {
            meuElemento.classList.add('animacao-slim');
            
        }, halfwayPoint);
    });
    const halfwayPointOther = (animationDuration * 1) * 1000;

    meuElemento.addEventListener('animationstart', () => {
        setTimeout(() => {
            meuElemento.textContent = 'João Roberto';
            meuElemento.classList.add('animacao-end');
            meuElemento.classList.remove('animacao-slim');
        }, halfwayPointOther);
    });
}

slimAnimation();

// import {aboutProgrammer} from './scripts.js';



window.aboutProgrammer = document.querySelector('.box-about').innerHTML;
window.aboutArt = `
<div class="section-subtitle">
<h2 class="section-hidden">
    <p><span>Designer</span> and Illustrator</p>
</h2>
</div>
<h3 class="text-about section-hidden">
    I am a designer and an illustrator with skills in
    <p>Realism, Pixel Art, T-Shirt Design, and Vectorization</p>
</h3>
<h4 class="section-hidden">
Following in my father's footsteps, an incredible illustrator and t-shirt designer, I delved into the world of design and illustration. I have spent my life drawing, honing my skills day by day. I never took formal classes, but I learned a lot from my father and on my own. Every stroke I make is an expression of my passion and dedication to this art.
</h4>
<h4 class="section-hidden">
    Below is the <p>resume</p> for download.
</h4>
<div class="button-cta section-hidden">
    <a href="public/document/Currículo_rober.pdf" target="_blank" download="resume_rober.pdf">Resume</a>
</div>`;
window.about3d = `<div class="section-subtitle">
<h2 class="section-hidden">
    <p><span>3D Modeler</span> and Designer</p>
</h2>
</div>
<h3 class="text-about section-hidden">
    I am a 3D Modeler and Designer
    <p>Modeling, Interiors, Rendering, C4D, and Blender</p>
</h3>
<h4 class="section-hidden">
My journey into 3D modeling began in 2014 when I was just 8 years old, using Blender 2.69. Over time, I ventured into Cinema 4D, where I enjoyed creating Minecraft animations and interior renderings. Unfortunately, I lost most of that work when my hard drive crashed. :( Since 2021, I have focused on face modeling for PES 21 using Blender. I have sold several of these models and even worked on a patch for a while. Currently, I am honing my skills in low poly pixel art, a technique I am applying to the development of my new game. Each project is a new opportunity to learn and grow in this fascinating field.
</h4>
<h4 class="section-hidden">
    Below is the <p>resume</p> for download.
</h4>
<div class="button-cta section-hidden">
    <a href="public/document/Currículo_rober.pdf" target="_blank" download="resume_rober.pdf">Resume</a>
</div>`;

window.techsArt = `<h3>Proficiencies</h3>
<ul class="skills-techs icons-skills">
<div class="skills-container section-hidden">
            <h2>Traditional Drawing</h2>
            <li><svg fill="#000000" height="200px" width="200px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 232" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M121.6,85.4c20.7,12.4,47.6,5.4,59.7-15.3c12.4-20.7,5.4-47.6-15.3-59.7C145.2-2,118.3,5,106.2,25.7S100.8,73,121.6,85.4z M253.3,202.4l-19.1-32.8c0.8-4.8,0-10.2-3.2-14.8c-2.4-3.8-5.9-6.5-10-7.8l0,0l-12.9-22.3c-1.6-2.7-4.8-3.5-7.5-1.9l-1.6,0.8 c-2.7,1.6-3.5,4.8-1.9,7.5l9.4,16.1c-1.3,0.5-2.7,1.1-4,1.9L167,172.5l-51.1-76.9c-5.9-10.8-25-21.5-43.6-16.4 C29,92.7,6.6,173.6,2,221.5h115.8l2.4-32L82,131.7c-1.1-1.6-0.5-4,1.1-5.1c1.6-1.1,4-0.5,5.1,1.1l57,86.1c4,5.4,10.2,8.1,16.4,8.1 c4,0,7.8-1.1,11.3-3.5l52.7-35c0.5-0.3,1.1-0.8,1.6-1.1l15.3,26.6c1.6,2.7,4.8,3.5,7.5,1.9l1.6-0.8 C253.9,208.6,254.7,205.1,253.3,202.4z"></path> </g></svg></li>
        </div>
        <div class="skills-container section-hidden">
            <h2>Pixel art</h2>
            <li><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 451.215 451.214" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M434.262,377.113c-14.697-21.898-37.031-48.195-62.887-74.049c-14.203-14.205-29.113-27.855-43.115-39.477 c-1.621-1.346-3.793-1.821-5.826-1.278c-2.035,0.543-3.682,2.038-4.416,4.012c-2.189,5.882-5.758,11.319-10.604,16.163 c-3.98,3.982-8.113,7.116-12.285,9.314c-1.736,0.916-2.967,2.567-3.348,4.494c-0.379,1.928,0.133,3.922,1.395,5.428 c11.277,13.474,24.449,27.809,38.094,41.457c47.014,47.012,92.693,79.846,111.086,79.847c2.824,0,5.035-0.777,6.566-2.309 C456.145,413.49,444.938,393.017,434.262,377.113z"></path> <path d="M243.857,243.007c1.158,7.334,2.471,15.647,6.73,24.82c5.792,12.473,15.584,19.92,26.191,19.922h0.002 c8.016,0,16.086-4.008,23.99-11.91c11.201-11.201,14.574-25.885,9.023-39.28c-7.363-17.779-28.377-29.267-53.533-29.267 c-5.537,0-11.322,0.533-17.195,1.585c-2.299,0.412-4.201,2.026-4.979,4.229c-0.78,2.202-0.317,4.654,1.21,6.421 C241.23,226.388,242.447,234.087,243.857,243.007z"></path> <path d="M412.197,28.191H6.5c-3.59,0-6.5,2.91-6.5,6.5v275.467c0,3.59,2.91,6.5,6.5,6.5h278.209l-13.289-17.07 c-26.898,0-34.912-25.93-37.26-25.93H43V71.191h332.697v202.467h-15.26l41.412,43h10.348c3.59,0,6.5-2.91,6.5-6.5V34.691 C418.697,31.101,415.787,28.191,412.197,28.191z"></path> <path d="M224.655,199.42c1.22,1.138,2.81,1.747,4.434,1.747c0.603,0,1.209-0.083,1.802-0.255 c4.098-1.183,10.135-2.898,15.639-4.357c1.336-0.354,2.523-1.125,3.393-2.199c1.518-1.878,3.296-3.852,4.598-5.294 c6.479-7.193,15.354-17.043,11.448-28.758c-2.013-5.867-6.021-10.201-11.594-12.533c-2.948-1.234-6.147-1.833-9.784-1.833 c-12.584,0-28.438,7.618-45.223,15.683c-7.487,3.597-19.419,9.329-26.381,11.35c1.646-4.16,4.895-9.963,7.181-14.05 c3.969-7.087,8.073-14.416,10.182-21.566c4.594-15.575-2.562-23.934-7.277-27.562c-0.007-0.005-0.085-0.064-0.092-0.07 c-4.23-3.173-8.941-4.782-14.001-4.782c-14.476,0-29.065,12.832-40.788,23.143c-4.802,4.224-8.536,7.423-11.153,9.306 c-2.089,1.503-3.095,4.097-2.564,6.615l2.626,12.475c0.42,1.995,1.751,3.677,3.594,4.543c1.847,0.868,3.991,0.819,5.794-0.13 c5.621-2.958,11.457-8.093,18.22-14.042c5.539-4.872,11.268-9.91,16.521-13.344c2.215-1.448,3.874-2.295,5.068-2.79 c-1.496,4.48-5.568,11.75-7.94,15.988c-4.03,7.202-8.198,14.65-10.159,21.787c-4.619,16.809,5.146,24.699,9.522,27.288 c3.231,1.943,6.864,2.887,11.105,2.887c11.163,0,25.158-6.724,41.364-14.51c8.074-3.879,16.424-7.89,23.458-10.479 c0.545-0.201,1.078-0.391,1.6-0.571c-4.958,5.514-10.811,12.282-12.511,20.197C222.253,195.538,222.983,197.861,224.655,199.42z"></path> </g> </g> </g></svg></li>
        </div>
        <div class="skills-container section-hidden">
            <h2>Texturing</h2>
            <li><svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 0h192v192H0z" style="fill:none"></path><path d="M27.55 22v45.33h45.33v23.12h-22.2V170h22.2v-34.23h46.24V170h22.21V90.45h-22.21V67.33h45.33V22h-45.33v45.33H72.88V22H27.55z";stroke-linejoin:round;stroke-width:12px;fill:none"></path></g></svg></li>
        </div>               
        <div class="skills-container section-hidden">
            <h2>2D Animation</h2>
            <li><svg fill="#ffffff" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>animation_solid</title> <g id="bb9f4e02-7318-4dbb-9960-e0435cf0cad7" data-name="Layer 3"> <path d="M3.5,23.77a6.41,6.41,0,0,0,9.33,8.67A11.65,11.65,0,0,1,3.5,23.77Z"></path> <path d="M7.68,14.53a9.6,9.6,0,0,0,13.4,13.7A14.11,14.11,0,0,1,7.68,14.53Z"></path> <path d="M21.78,2A12.12,12.12,0,1,1,9.66,14.15,12.12,12.12,0,0,1,21.78,2"></path> </g> </g></svg></li>
        </div>               
        <div class="skills-container section-hidden">
            <h2>Image Editing</h2>
            <li><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0H24V24H0z"></path> <path d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"></path> </g> </g></svg></li>
        </div>               
        <div class="skills-container section-hidden">
            <h2>Vectorization</h2>
            <li><svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31 21h-1.009v-0.050c0-5.060-2.704-9.494-6.739-11.95h5.026c0.346 0.595 0.985 1 1.723 1 1.105 0 2-0.896 2-2s-0.895-2-2-2c-0.738 0-1.376 0.405-1.723 1h-9.277v-1c0-0.552-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1v1h-9.277c-0.346-0.595-0.984-1-1.722-1-1.105 0-2 0.896-2 2s0.895 2 2 2c0.738 0 1.376-0.405 1.722-1h5.025c-4.035 2.456-6.739 6.889-6.739 11.95v0.050h-1.009c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1h-0.991v-0.050c0-5.576 3.827-10.271 8.992-11.606v0.656c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-0.656c5.165 1.335 8.992 6.030 8.992 11.606v0.050h-0.991c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1zM4 25h-2v-2h2v2zM17 9h-2v-2h2v2zM30 25h-2v-2h2v2z"></path> </g></svg></li>
        </div>               
        <div class="skills-container section-hidden">
            <h2>Uniform Design</h2>
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
    </ul>`;
window.techs3d = `
<h3>Proficiencies</h3>
<ul class="skills-techs icons-skills">
    <div class="skills-container section-hidden">
            <h2>3D Modeling</h2>
            <li><svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e03ec8e"> <path display="inline" d="M383.116,234.527c14.689,55.95,33.375,133.562,28.371,167.646c-6.968,47.267-36.288,71.583-81.531,60.464 c-37.473-9.196-73.103-68.48-128.839-115.692c-41.805-35.417-60.523-50.315-79.269-57.393c1.298-12.439,4.555-21.894,14.195-24.783 c-12.054,2.354-20.442,7.653-22.343,25.709c-0.29,2.386-0.431,5.171-0.386,8.288c0,0.068,0,0.122,0,0.195 c0.386,35.82,20.619,115.801,14.825,136.065c-4.69,16.413-26.316,28.935-44.717,34.188c-30.495,8.715-37.876-2.358-42.068-4.604 c-17.089-9.2-51.808-98.698-37.463-180.783c7.231-41.419,30.912-83.486,74.277-95.322c41.351-11.278,98.826,8.483,175.802,76.932 c18.001,57.896,45.157,128.721,42.607,143.274c3.557-18.591-31.188-129.466-43.724-187.348c-1.987-10.221-3.615-19.875-4.94-29.084 c-1.143-16.718,19.476-33.703,40.648-41.909c25.173-9.763,66.483-8.058,74.055,6.732c2.191,11.006,5.599,24.842,10.797,42.122 C376.288,210.438,379.568,222.278,383.116,234.527z M368.535,148.699c2.123-1.252,4.042-2.481,5.712-3.611 c-2.305-0.83-4.496-1.46-6.578-1.932C367.914,144.894,368.19,146.749,368.535,148.699z M363.871,66.964 c5.036,9.522,7.146,21.876,7.146,32.496c0,8.955-1.502,16.607-4.037,20.305c-0.168,0.55-0.622,2.618-0.622,7.286 c0,2.241,0.123,5.086,0.427,8.574c4.191,0.703,8.91,2.178,13.945,4.237c22.674-21.367,30.001-53.577,24.843-64.297 c-26.952-21.218-51.917-34.41-76.415-36.075C343.874,44.041,356.771,53.595,363.871,66.964z M446.7,180.945 c9.405-8.919,26.04-27.224,32.414-35.676c-23.739-25.577-51.876-51.436-51.876-51.436c-4.373-3.924-8.691-7.662-12.965-11.228 c0.276,6.301-0.844,13.886-3.326,21.952c-2.717,8.655-9.199,24.466-23.113,38.461C406.466,151.971,428.396,167.127,446.7,180.945z M381.224,198.893c6.429,5.616,13.434,11.854,20.638,17.951c7.83-2.641,28.067-20.805,37.943-29.669l1.475-1.33 c-19.008-14.249-41.283-29.446-59.171-37.563c-3.548,2.849-8.497,5.87-12.194,7.976c1.824,9.182,4.537,20.441,8.497,34.196 C379.337,193.335,380.285,196.161,381.224,198.893z M282.925,144.866c-5.313-19.435-15.588-63.839-7.218-88.908 c-25.391,19.575-36.383,56.254-30.05,118.273C253.174,161.774,267.959,151.24,282.925,144.866z M360.496,144.894 c-2.926-20.151-0.676-26.902-0.168-28.096c0.168-0.358,0.372-0.689,0.608-0.979c3.625-4.097,5.117-29.279-3.448-45.461 c-11.613-21.853-40.884-32.056-65.477-23.958c-18.8,7.948-13.237,55.609-2.313,95.895 C311.393,135.172,343.86,134.455,360.496,144.894z M511.415,189.819c-0.952-7.767-12.812-23.037-27.337-39.133 c-7.019,8.987-22.107,25.6-31.543,34.71c15.242,11.759,27.155,21.875,31.103,25.272c7.199-2.187,24.715-13.927,27.832-18.169 C511.528,191.552,511.497,190.663,511.415,189.819z M463.182,246.01c8.303-2.913,17.076-9.097,25.215-15.43 c7.39-5.757,15.062-15.9,19.435-25.409c-7.34,5.354-16.703,10.757-22.429,12.476C481.859,227.01,471.112,238.438,463.182,246.01z M447.154,190.313l-2.509,2.241c-13.683,12.28-27.56,24.421-36.705,29.384c15.465,12.734,31.12,23.763,42.897,25.555 c7.626-6.547,23.391-21.54,27.614-31.788C472.768,210.742,461.182,201.061,447.154,190.313z"> </path> </g> </g></svg></li>
    </div>         
    <div class="skills-container section-hidden">
            <h2>Low Poly</h2>
            <li><svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#ffffff;stroke-miterlimit:10;stroke-width:1.95px;}</style></defs><polygon class="cls-1" points="12 18.63 18.84 15.21 18.84 7.68 12 4.32 5.16 7.68 5.16 15.21 12 18.63"></polygon><polyline class="cls-1" points="5.16 8.09 5.19 8.09 12 11.46 12 18.84"></polyline><polyline class="cls-1" points="12 18.84 12 11.46 18.81 8.09 18.84 8.09"></polyline><polyline class="cls-1" points="18.84 8.09 18.81 8.09 12 11.46 5.19 8.09 5.16 8.09"></polyline><polyline class="cls-1" points="1.25 6.14 1.25 1.25 6.14 1.25"></polyline><polyline class="cls-1" points="6.14 22.75 1.25 22.75 1.25 17.86"></polyline><polyline class="cls-1" points="22.75 17.86 22.75 22.75 17.86 22.75"></polyline><polyline class="cls-1" points="17.86 1.25 22.75 1.25 22.75 6.14"></polyline></g></svg></li>
    </div>         
    <div class="skills-container section-hidden">
            <h2>Interior Design</h2>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M 25 0 C 24.8085 -1.8503717e-17 24.6045 0.04625 24.4375 0.15625 L 0.4375 15.96875 C 0.1565 16.15375 0 16.4765 0 16.8125 L 0 23.3125 C 0 23.6805 0.20725 24.0135 0.53125 24.1875 C 0.85525 24.3615 1.2545 24.329 1.5625 24.125 L 25 8.59375 L 48.4375 24.125 C 48.6045 24.236 48.807 24.3125 49 24.3125 C 49.162 24.3125 49.32075 24.2665 49.46875 24.1875 C 49.79375 24.0135 50 23.6805 50 23.3125 L 50 16.8125 C 50 16.4755 49.8435 16.15275 49.5625 15.96875 L 25.5625 0.15625 C 25.3955 0.04625 25.1915 1.8503717e-17 25 0 z M 25 11 L 3 25.5625 L 3 49 C 3 49.553 3.448 50 4 50 L 46 50 C 46.553 50 47 49.553 47 49 L 47 25.5625 L 25 11 z M 19.5 23 L 30.5 23 C 33.337 23 35.71775 25.145 35.96875 28 C 33.17775 28.014 31 30.205 31 33 C 31 33.897 30.897 34 30 34 L 20 34 C 19.103 34 19 33.897 19 33 C 19 30.205 16.82225 28.014 14.03125 28 C 14.27925 25.227 16.573 23 19.5 23 z M 14 30 C 15.7 30 17 31.3 17 33 C 17 35 18 36 20 36 L 30 36 C 32 36 33 35 33 33 C 33 31.3 34.3 30 36 30 C 37.7 30 39 31.3 39 33 C 39 34.7 37.7 36 36 36 L 36 37.6875 C 36 38.5985 35.613 39.42925 35 40.03125 L 35 43 C 35 43.6 34.50625 44.09375 33.90625 44.09375 L 32.09375 44.09375 C 31.49375 44.09375 31 43.6 31 43 L 31 41 L 19 41 L 19 43 C 19 43.6 18.50625 44.09375 17.90625 44.09375 L 16.09375 44.09375 C 15.49375 44.09375 15 43.6 15 43 L 15 40.03125 C 14.387 39.42925 14 38.5985 14 37.6875 L 14 36 C 12.3 36 11 34.7 11 33 C 11 31.3 12.3 30 14 30 z"/></svg></li>
    </div>         
    <div class="skills-container section-hidden">
            <h2>3D Animation (Basic)</h2>
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

window.projectsArtsHtml = `<div class="swiper mySwiper section-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
<div class="swiper-wrapper">
    <div class="swiper-slide card-project">
    </div>
</div>
</div>
<div class="projects-title">
<h2>ARTWORKS</h2>
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
                        <p>The eternal symbol of pride is the banner, with black and red stripes and the Lion. The flag of Sport Club do Recife at the top of the mast. Made for a weekly challenge. My first animation with a colorful palette.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>March 2024</p>
                        <p><b>Dimensions: </b>290x290 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                        <p>I took a screenshot from the <b>Marvel's Spider-Man</b> game that I took and drew it for the weekly challenge. In the scene, I made the Empire State to represent New York. The flying eagle is to make the scene more interesting and show how high Spider-Man is watching his city. Also, it’s an American symbol.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>March 2024</p>
                        <p><b>Dimensions: </b>240x135 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                        <p>A simple artwork of Foxy for the weekly challenge. I really like using monochromatic palettes. Only 9 colors were used.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>April 2024</p>
                        <p><b>Dimensions: </b>128x128 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                        <p>My first large canvas pixel art. Since I made this when I was just starting to learn, I used a reference layer to draw Ana de Armas. At the time, I didn’t know much about using colors in pixel art, so I used the color picker a lot.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>October 2023</p>
                        <p><b>Dimensions: </b>209x116 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                        <p>The weekly theme this time was <b>duality.</b> So I immediately thought of Spider-Man and Venom.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>February 2024</p>
                        <p><b>Dimensions: </b>61x61 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                        <p>I used 10 colors to create this artwork. I took many tips while making it.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>January 2024</p>
                        <p><b>Dimensions: </b>180x180 px</p>
                        <p><b>Tools: </b>Aseprite</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="section-hidden">
            <a href="https://www.artstation.com/artwork/Kendqx" target="_blank">
                <img src="./img/projects/projects-arts/LifeIsStrange.png" alt="life-is-strange-butterfly">
                <div class="infos-arts">                        
                    <div class="title">
                        <h3>Chaos Theory</h3>
                        <p>This action will have consequences.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>May 2024</p>
                        <p><b>Dimensions: </b>137x158 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                        <p>In this artwork, my intention was to convey a sense of calm and nostalgia. I overcame my limitations with this piece, as it was when I was just starting to learn.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>December 2023</p>
                        <p><b>Dimensions: </b>215x193 px</p>
                        <p><b>Tools: </b>Aseprite</p>
                    </div>
                </div>
            </a>
        </div>
        
        <div class="v-img section-hidden">
            <a href="https://www.artstation.com/artwork/Ge4QQ4" target="_blank">
                <img src="./img/projects/projects-arts/sea.png" alt="sea">
                <div class="infos-arts">                        
                    <div class="title">
                        <h3>Sea</h3>
                        <p>My first attempt at drawing the sea. I used a palette of 6 colors to make it easier.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>February 2024</p>
                        <p><b>Dimensions: </b>150x219 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                        <p>I wanted to convey a retro feel with this artwork, just like the movie posters. That’s why I used a lot of dithering and a very limited palette.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>January 2024</p>
                        <p><b>Dimensions: </b>250x173 px</p>
                        <p><b>Tools: </b>Aseprite</p>
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
                <p>I took some references from the music video and the room that appears in it, combined everything, and drew it. Things like the tea cooling down, the window with the gray landscape, the photos on the wall, etc.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>March 2024</p>
                <p><b>Dimensions: </b>227x183 px</p>
                <p><b>Tools: </b>Aseprite</p>
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
                <p>One of my favorite pieces, made right on December 24th.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>December 2023</p>
                <p><b>Dimensions: </b>165x305 px</p>
                <p><b>Tools: </b>Aseprite</p>
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
                <p>This artwork was made along with "Thank You." It was for the weekly challenge, which was to turn a snippet of a song into a drawing. Since the song "Thank You" by Dido has the same chorus as "Stan" and conveys very different emotions, I thought it was cool to combine the two into one video.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>March 2024</p>
                <p><b>Dimensions: </b>227x183 px</p>
                <p><b>Tools: </b>Aseprite</p>
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
                <p>An artwork for one of my favorite movies, La La Land. I think the movie poster is very beautiful; the color tone is stunning.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>December 2023</p>
                <p><b>Dimensions: </b>165x305 px</p>
                <p><b>Tools: </b>Aseprite</p>
            </div>
        </div>
        </a>
        </div>


    </div>
</div>

<div class="sliders second">
<div class="art-title section-hidden">
<h2>
    Traditional Drawings
</h2>
</div>
<div class="projects-grid">

<div class="v-img section-hidden">
    <a href="https://www.artstation.com/artwork/1xAPY8" target="_blank">
        <div class="infos-arts">
            <div class="title">
                <h3>Clementine</h3>
                <p>A drawing of the main character from the <b>The Walking Dead</b> games by Telltale. I did this by eye and used Faber Castell HB, 2B, 4B, and 6B pencils. A fun fact is that I made this drawing during a birthday party; I went up to my grandmother's room and didn't come out until I finished. I really like this drawing.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>October 2022</p>
                <p><b>Dimensions: </b>A4 Paper</p>
                <p><b>Tools: </b>Graphite, Blending Stump, Black Pen</p>
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
                <p>Sketch of the Twisted Wolf from the book <b>FNAF: The Silver Eyes</b>.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>September 2017</p>
                <p><b>Dimensions: </b>A4 Paper</p>
                <p><b>Tools: </b>Graphite</p>
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
                <p>My favorite drawing that was never finished. I traced it by putting a photo of Jinx on the TV and placing the paper over it. I did this because I wanted the drawing to be perfect and focus more on shading practice.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>December 2022</p>
                <p><b>Dimensions: </b>A3 Paper 120 g/m²</p>
                <p><b>Tools: </b>Graphite, Blending Stump, Black Pen</p>
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
                <p>I made this drawing to test my ink pens and colored pencils.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>2017</p>
                <p><b>Dimensions: </b>A4 Paper</p>
                <p><b>Tools: </b>Graphite, Blending Stump <br> Ink, <br> Colored Pencils</p>
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
                <p>After almost 4 years without drawing, I made this drawing of Moon Knight. One of my favorites, I did it by eye. Even without practicing for such a long time, you can see how I matured.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>2022</p>
                <p><b>Dimensions: </b>A4 Paper</p>
                <p><b>Tools: </b>Graphite, Blending Stump</p>
            </div>
        </div>
        <img src="./img/projects/projects-arts/desenhos-tradicionais/cavaleirolua.jpg" alt="moon-knight">
    </a>
</div>

<div class="section-hidden">
    <div>
        <div class="infos-arts">
            <div class="title">
                <h3>Lion</h3>
                <p>I had nothing to do, so I decided to quickly draw this lion.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>November 2018</p>
                <p><b>Dimensions: </b>A4 Paper</p>
                <p><b>Tools: </b>Graphite HB</p>
            </div>
        </div>
        <img src="./img/projects/projects-arts/desenhos-tradicionais/leao.jpg" alt="sport-recife">
    </div>
</div>

<div class="v-img section-hidden">
        <div>
            <div class="infos-arts">
                <div class="title">
                    <h3>Deadpool</h3>
                    <p>My first colored drawing. I made it when I was a kid, so there are many smudges and mistakes, but it's still a good drawing.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>December 2017</p>
                    <p><b>Dimensions: </b>A4 Paper</p>
                    <p><b>Tools: </b>Graphite, Colored Pencils</p>
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
                <p>I drew this to pass the time at school.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>September 2017</p>
                <p><b>Dimensions: </b>Notebook Paper</p>
                <p><b>Tools: </b>Pen, Colored Pencils</p>
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
                <p>Idol of Sport Recife. I printed a photo of him and put it under the paper with a flashlight.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>October 2017</p>
                <p><b>Dimensions: </b>A4 Paper</p>
                <p><b>Tools: </b>Graphite, Blending Stump</p>
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
                <p>Drawing I did for my friend at school.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>2017</p>
                <p><b>Dimensions: </b>A4 Paper</p>
                <p><b>Tools: </b>Graphite, Blending Stump, <br> Colored Pencils</p>
            </div>
        </div>
        <img src="./img/projects/projects-arts/desenhos-tradicionais/bendy.jpg" alt="bendy">
    </div>
</div>

<div class="section-hidden">
<a href="https://www.artstation.com/artwork/04AQEe" target="_blank">
    <div class="infos-arts">
        <div class="title">
            <h3>Spider Gwen</h3>
            <p>Simple drawing of Gwen that I did at school. I plan to do the shading later.</p>
        </div>
        <div class="infos">
            <p><b>Date: </b>2023</p>
            <p><b>Dimensions: </b>A4 Paper 120 g/m²</p>
            <p><b>Tools: </b>Graphite</p>
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
            <p>Tribute to one of the best drawings I made, but ended up losing. It was so good that I had to put it here. It was my first drawing using pen for shading.</p>
        </div>
        <div class="infos">
            <p><b>Date: </b>2017</p>
            <p><b>Dimensions: </b>A3 Paper</p>
            <p><b>Tools: </b>Pen</p>
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
                        <p>Sport's Home Kit for the 2021 season. Click to see more details of the texture.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>2021</p>
                        <p><b>Tools: </b>Photoshop, Blender</p>
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
                        <p>Sport's Away Kit for the 2021 season. Click to see more details of the texture.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>2021</p>
                        <p><b>Tools: </b>Photoshop, Blender</p>
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
                        <p>Sport's Third Kit for the 2021 season. I designed the shirt entirely in Corel. Click to see more details of the texture.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>2021</p>
                        <p><b>Tools: </b>Photoshop, Blender, Corel DRAW</p>
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
                        <p>Goalkeeper Kit for the 2021 season. Click to see more details of the texture.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>2021</p>
                        <p><b>Tools: </b>Photoshop, Blender</p>
                    </div>
                </div>
                <img src="./img/projects/projects-arts/design/sport2021gk.gif" alt="sport-recife-2021-gk">
            </a>
        </div> 

        <div class="h-img section-hidden">
            <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                <div class="infos-arts">
                    <div class="title">
                        <h3>Sport Tri-Champion</h3>
                        <p>I created this kit and the next three for my <b>Pro Evolution Soccer 2021</b> career mode, where I won the Copa do Brasil with Sport. I made this kit to celebrate the tri-national victory, adding 3 golden stars as a symbol and recalling the 2009 shirts, the year after the first Copa do Brasil win.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>March 2024</p>
                        <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
                    </div>
                </div>
                <img src="./img/projects/projects-arts/design/KIT 1.png" alt="sport-recife-tri">
            </a>
        </div>     

        <div class="h-img section-hidden">
            <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                <div class="infos-arts">
                    <div class="title">
                        <h3>Sport Tri-Champion - Away Alt</h3>
                        <p>Followed the same idea as the first kit but didn't want to make it white. Since the third kit is golden, I made this one with colors similar to the first kit.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>March 2024</p>
                        <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
                    </div>
                </div>
                <img src="./img/projects/projects-arts/design/ALTERNATIVO.png" alt="sport-recife-away-alt-tri">
            </a>
        </div>     

        <div class="h-img section-hidden">
            <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                <div class="infos-arts">
                    <div class="title">
                        <h3>Sport Tri-Champion - Away</h3>
                        <p>Final version of the second kit. I made it all red to distinguish it a bit more from the first kit and other teams with dark colors.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>March 2024</p>
                        <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
                    </div>
                </div>
                <img src="./img/projects/projects-arts/design/KIT 2.png" alt="sport-recife-away-tri">
            </a>
        </div>     

        <div class="h-img section-hidden">
            <a href="https://www.artstation.com/artwork/ao22X9" target="_blank">
                <div class="infos-arts">
                    <div class="title">
                        <h3>Sport Tri-Champion - Libertadores</h3>
                        <p>Golden shirt to remember the one from 2009. Kit to celebrate the participation in the Libertadores in the game.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>March 2024</p>
                        <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
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
                        <p>Iconic kit worn by the idol Magrão in 2008. I made it to take a print with Magrão's face.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>August 2021</p>
                        <p><b>Tools: </b>Photoshop, Blender</p>
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
                        <p>Sport's Home Kit for 2022. Designing the shirt here was quite complicated.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>May 2022</p>
                        <p><b>Tools: </b>Photoshop, Blender</p>
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
                    <p>Sport's away kit for 2022.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>May 2022</p>
                    <p><b>Tools: </b>Photoshop, Blender</p>
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
                    <p>Retro Corinthians shirt made for a patch.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>August 2021</p>
                    <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
                </div>
            </div>
            <img src="./img/projects/projects-arts/design/corinthians.gif" alt="corinthians">
        </a>
    </div>
    
    <div class="h-img section-hidden">
            <a href="https://www.artstation.com/artwork/6LZ4y5" target="_blank">
                <div class="infos-arts">
                    <div class="title">
                        <h3>Sport Recife 120 years - Home</h3>
                        <p>This is a kit I made for my career mode. The small details on the red stripes are its old crests, representing the club's origins.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>August 2024</p>
                        <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
                    </div>
                </div>
                <img src="./img/projects/projects-arts/design/sport2024mfthird.png" alt="sport-recife-120-years">
            </a>
        </div>    

        <div class="h-img section-hidden">
            <a href="https://www.artstation.com/artwork/6LZ4y5" target="_blank">
                <div class="infos-arts">
                    <div class="title">
                        <h3>Sport Recife 120 years - Away</h3>
                        <p>I made this beige jersey just to avoid using white. To keep it from looking too plain, I added a woodcut print of Recife at the bottom. At the time, I didn't have many Photoshop skills, but I believe I could do better today.</p>
                    </div>
                    <div class="infos">
                        <p><b>Date: </b>August 2024</p>
                        <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
                    </div>
                </div>
                <img src="./img/projects/projects-arts/design/sport2023.png" alt="sport-recife-120-years-away">
            </a>
        </div>
    
    <div class="h-img section-hidden">
        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
            <div class="infos-arts">
                <div class="title">
                    <h3>Sport Recife Concept Kit - Home</h3>
                    <p>Kits I made for my career mode in PES 21. To be honest, I'm not a big fan of these. I drew inspiration from Barcelona's 2020 kit.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>July 2021</p>
                    <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
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
                    <p>I did the classic white design.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>July 2021</p>
                    <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
                </div>
            </div>
            <img src="./img/projects/projects-arts/design/sport2024mfaway.png" alt="sport-recife-concept-away">
        </a>
    </div>
    
    <div class="section-hidden">
        <a href="https://www.artstation.com/artwork/PX8a0n" target="_blank">
            <div class="infos-arts">
                <div class="title">
                    <h3>Guarani - 1994</h3>
                    <p>Another retro kit made for a patch. Designing the shirt texture was quite fun.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>August 2021</p>
                    <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
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
                    <p>This kit was also made for the patch.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>August 2021</p>
                    <p><b>Tools: </b>Photoshop, Pes Master, Blender</p>
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
                    <p>This was a custom request. Uniform for Imperatriz for the 2021 season.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>May 2021</p>
                    <p><b>Tools: </b>Photoshop, Blender</p>
                </div>
            </div>
            <img src="./img/projects/projects-arts/design/imperatriz.gif" alt="imperatriz">
        </a>
    </div>
    
    <div class="section-hidden">
        <a href="https://www.artstation.com/artwork/AZXbbo" target="_blank">
            <div class="infos-arts">
                <div class="title">
                    <h3>Social Media</h3>
                    <p>I post these artworks on the Instagram of a Discord server I'm part of. I keep creating and learning along the way.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>2025</p>
                    <p><b>Tools: </b>Photoshop</p>
                </div>
            </div>
            <img src="./img/projects/projects-arts/design/socialmedia.jpg" alt="sesi">
        </a>
    </div>
    

    </div>
</div>
</div>`;

window.projects3dHtml = `<div class="swiper mySwiper section-hidden">
<div class="swiper-wrapper">
    <div class="swiper-slide card-project">
    </div>
</div>
</div>
<div class="projects-title">
<h2>PROJECTS</h2>
</div>
<div class="arts-projects">
    
    <div class="sliders first">
        <div class="projects-grid">   

        <div class="l-img section-hidden">
        <a href="https://www.artstation.com/artwork/RybZJD" target="_blank">
            <div class="infos-arts">
                <div class="title">
                    <h3>Rober Face - PES 21</h3>
                    <p>My personal face for my Rise to Stardom in PES. To create faces for the game, we use an existing base and model on top of it.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>July 2024</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>Face of actor Tom Holland. Created in the hype for watching Spider-Man: No Way Home in theaters.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>November 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>Former coach of Sport in 2021.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>August 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>Face created at the request of a client for Kratos. It was a really fun challenge.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>August 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>Face created at the request of the owner of a patch called Super Brazil. I also made the tattoos.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>August 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>Face created at the request of the owner of a patch called Super Brazil.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>September 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>I created this face more as a hobby to pass the time.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>July 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>Face of Durval, Sport's idol.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>August 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                    <p>Face of a Grêmio player requested by the patch.</p>
                </div>
                <div class="infos">
                    <p><b>Date: </b>May 2021</p>
                    <p><b>Tools: </b>Blender, Photoshop</p>
                    <p><b>Category: </b>Modeling, Texturing</p>
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
                <p>Face of a young player from Sport's youth team. Creating this was quite challenging, as he was at the start of his career and had very few photos available.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>July 2021</p>
                <p><b>Tools: </b>Blender, Photoshop</p>
                <p><b>Category: </b>Modeling, Texturing</p>
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
                <p>Face of another player from Sport's youth team.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>April 2021</p>
                <p><b>Tools: </b>Blender, Photoshop</p>
                <p><b>Category: </b>Modeling, Texturing</p>
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
                <p>Face made for the Super Brazil Patch.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>September 2021</p>
                <p><b>Tools: </b>Blender, Photoshop</p>
                <p><b>Category: </b>Modeling, Texturing</p>
            </div>
        </div>
        <img src="https://cdnb.artstation.com/p/assets/images/images/077/773/561/small/rober122-palmberg-face.jpg?1720319712" alt="palmberg-face">
    </a>
</div>

<div class="l-img section-hidden">
    <a href="https://www.artstation.com/artwork/8b2YXG" target="_blank">
        <div class="infos-arts">
            <div class="title">
                <h3>Grêmio President - PES 21</h3>
                <p>Face made for the Super Brazil Patch.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>September 2021</p>
                <p><b>Tools: </b>Blender, Photoshop</p>
                <p><b>Category: </b>Modeling, Texturing</p>
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
                <p>Face of my father.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>August 2021</p>
                <p><b>Tools: </b>Blender, Photoshop</p>
                <p><b>Category: </b>Modeling, Texturing</p>
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
                <p>Face of Sport's greatest idol, Magrão.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>August 2021</p>
                <p><b>Tools: </b>Blender, Photoshop</p>
                <p><b>Category: </b>Modeling, Texturing</p>
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
                <p>Face of a former Sport coach.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>June 2021</p>
                <p><b>Tools: </b>Blender, Photoshop</p>
                <p><b>Category: </b>Modeling, Texturing</p>
            </div>
        </div>
        <img src="https://cdnb.artstation.com/p/assets/images/images/077/792/569/small/rober122-umberto-louzer-face.jpg?1720380372" alt="umberto-face">
    </a>
</div>

<div class="footer section-hidden">
    <a href="https://www.artstation.com/artwork/041q0E" target="_blank">
        <div class="infos-arts">
            <div class="title">
                <h3>Bedroom</h3>
                <p>This is one of the few rendering projects I have saved. Unfortunately, it was a bedroom I made at the request of a friend.</p>
            </div>
            <div class="infos">
                <p><b>Date: </b>August 2022</p>
                <p><b>Tools: </b>Cinema 4D</p>
                <p><b>Category: </b>Modeling, Texturing, Lighting</p>
            </div>
        </div>
        <img src="./img/projects/projects-arts/3d/Quarto001.jpg" alt="bedroom">
    </a>
</div>


        </div>

    </div>
</div>`;