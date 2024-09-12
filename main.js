
const midias = document.querySelectorAll('video');
const videos = [];

midias.forEach(e => {
    e.addEventListener('click', (event) => {
        if (event.target.paused) {
            e.play();
        } else {
            e.pause();
            event.target.currentTime = 0;
        }
    })
})



// Animação dos números

const contadorContainer = document.querySelector('[data-target="contador"]');
const contadorNumeros = document.querySelectorAll('.contador__numero');
const diaAteEvento = 50;
const date = new Date();
const diasFaltam = diaAteEvento - date.getDate()

const ativarContador = () => {
    contadorNumeros.forEach((e) => {

        function increment(i, max) {
            if (i > max) return;
            setTimeout(function () {
                e.innerText = i;
                increment(i + 1, max);
            }, 50)
        }

        if (e.classList.contains('dias')) {
            increment(date.getDate(), diasFaltam)
        } else if (e.classList.contains('horas')) {
            increment(0, 19);
        } else if (e.classList.contains('min')) {
            increment(0, 26);
        }


    })
}


const observer = new IntersectionObserver(e => {
    if (e[0].isIntersecting) {
        ativarContador();;
    }
}, {
    threshold: 0
})

observer.observe(contadorContainer);



// Formulário

const btnForm = document.querySelector('[data-form]');
const exitForm = document.querySelector('.form__title button')
const sectionForm = document.querySelector('.form');
const corpoSite = document.querySelector('html');


btnForm.addEventListener('click', () => {
    corpoSite.style = 'overflow: hidden;';

    sectionForm.classList.add('active');
})

exitForm.addEventListener('click', () => {
    sectionForm.classList.remove('active');
    corpoSite.removeAttribute("style");
})

document.querySelector('.contato__form').addEventListener('submit', (e) => {
    e.preventDefault;
    window.location.href = 'https://pay.kiwify.com.br/gOATscR';
})

