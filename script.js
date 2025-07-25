window.addEventListener('scroll', function () {
    const header = document.getElementById('nav-bar');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});