const video = document.querySelector('.flex')
const speed = document.querySelector('.speed')
const speedBar = document.querySelector('.speed-bar')

function handleSpeed(e) {
    const min = 0.5;
    const max = 4;
    const position = e.pageY - this.offsetTop;
    const percent = position / this.offsetHeight;
    const height = Math.floor(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    
    speedBar.style.height = height;
    speedBar.innerText = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
}
speed.addEventListener('mousemove', handleSpeed);