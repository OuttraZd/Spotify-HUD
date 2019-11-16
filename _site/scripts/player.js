const player = document.querySelector('.js-play');
player.addEventListener('click', ()=>{
    player.classList.toggle('paused');
});
