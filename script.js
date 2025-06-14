window.addEventListener('scroll', function () {
    const header = document.getElementById('nav-bar');
    if (window.scrollY > 50) {
        console.log('JS!!!');
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateCarousel();
});

// Auto slide (opcional)
setInterval(() => {
    counter = (counter + 1) % images.length;
    updateCarousel();
}, 5000); // troca a cada 5 segundos