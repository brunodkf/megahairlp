
const midias = document.querySelectorAll('video');
const videos = [];

midias.forEach(e => {
    e.addEventListener('click', (event) => {
        console.log(event)
        if(event.target.paused){
            e.play();
        }else{
            e.pause();
            event.target.currentTime = 0;
        }
    })
})
