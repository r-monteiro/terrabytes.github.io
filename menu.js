///////////////////////////////////////////////////////////////////////////////////
//COISA DE MOBILE
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})



//ESSE .JS AQUI E PARA QUANDO CLICAR NO MENU FIXO, APARECER O TITULO DA SEÇÃO CERTINHO
//PQ ANTES ESTAVA CORTANDO
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const headerHeight = header.offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

///////////////////////////////////////////////////////////////////////////////////
//SLIDESHOW PÁGINA INDEX

let slideIndex = 1;
showSlides(slideIndex);

//Função para mostrar o slide com base no índice
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Função para avançar para o próximo slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Função para definir o slide atual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Função para trocar de slide automaticamente
function autoSlide() {
    plusSlides(1);
}

//Configurar a troca automática de slides a cada 5 segundos
let slideInterval = setInterval(autoSlide, 5000);
///////////////////////////////////////////////////////////////////////////////////
