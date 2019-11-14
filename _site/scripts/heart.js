const heart = document.querySelector('.js-like');
heart.addEventListener('click', ()=>{
    heart.classList.toggle('liked');
});