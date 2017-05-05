import getHandler from '../handlers/handler';

export default function generate360view(containerId, imgSelector, rotate) {
    let current = 0, images, rotateTimer;

    function incrementCurrentImage(i) {
        current += i;
        if (current === images.length) {
            current = 0;
        } else if (current < 0) {
            current = images.length - 1;
        }
    }

    function hideImages() {
        for (var i = 1, max = images.length; i < max; i++) {
            images[i].style.display = 'none';
        }
    }

    function toggleImages(i) {
        images[current].style.display = 'none';
        incrementCurrentImage(i);
        images[current].style.display = 'block';
    }

    const container = document.getElementById(containerId);
    const handler = getHandler(container);
    images = document.querySelectorAll("#" + containerId + " " + imgSelector);
    if (false) { hideImages(); }
    if (rotate) {
        rotateTimer = setInterval(function(){ 
            if (current === (images.length - 1)) {
                clearTimeout(rotateTimer);
                handler.subscribe(toggleImages);
            } else {
                toggleImages(1); 
            }
        }, 80);
    } else {
        handler.subscribe(toggleImages);
    }

    
}
