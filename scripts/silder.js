const silder = document.querySelector('.silder');
let isDown = false;
let startX;
let scrollLeft;

silder.addEventListener('mousedown', (e) => {
    isDown = true;
    silder.classList.add('active');
    startX = e.pageX - silder.offsetLeft;
    scrollLeft = silder.scrollLeft;
});

silder.addEventListener('mouseleave', () => {
    isDown = false;
    silder.classList.remove('active');
});

silder.addEventListener('mouseup', () => {
    isDown = false;
    silder.classList.remove('active');
});

silder.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - silder.offsetLeft;
    const walk = (x - startX) * 2;
    silder.scrollLeft = scrollLeft - walk;
});