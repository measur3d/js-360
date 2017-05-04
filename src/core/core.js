import getHandler from '../handlers/handler';

export default function generate360view(containerId) {
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
    images = document.querySelectorAll("#" + containerId + " div");
    const rotated = container.getAttribute("data-rotated");
    if (false) { hideImages(); }
    if (rotated !== 'true') {
        rotateTimer = setInterval(function(){ 
            if (current === (images.length - 1)) {
                clearTimeout(rotateTimer);
                container.setAttribute("data-rotated", true);
                handler.subscribe(toggleImages);
            } else {
                toggleImages(1); 
            }
        }, 80);
    }

    
}
