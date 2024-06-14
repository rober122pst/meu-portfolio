


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