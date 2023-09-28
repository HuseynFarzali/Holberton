const scalableImage = document.querySelector('#scalable');
let scaled = false;

scalableImage.addEventListener('click', (e) => {
    if (!scaled) {
        e.target.style.scale = 1.5;
        scaled = true;
    } else {
        e.target.style.scale = 1;
        scaled = false;
    }
});