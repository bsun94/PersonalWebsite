const frames = document.querySelectorAll('.frame');

function frameOpacity (frame) {
    let bounds = frame.getBoundingClientRect();
    if (bounds.y <= -5 && bounds.bottom >= 0) {
        frame.style.opacity = Math.min(1, Math.max(bounds.bottom / bounds.height, 0));
        frame.nextElementSibling.style.zIndex = frame.style.zIndex - 1;
        frame.nextElementSibling.style.bottom = bounds.height + bounds.y - 2 + 'px';
    } else if (frame.previousElementSibling.style.opacity <= 0.1) {
        frame.style.zIndex = 1;
        frame.nextElementSibling.style.bottom = '0px'
    };
};

window.addEventListener('scroll', e => {
    frames.forEach(frame => {
        frameOpacity(frame);
    });
});

const textFrames = document.querySelectorAll('.frame-text');

textFrames.forEach(textFrame => {
    textFrame.addEventListener('mouseover', e => {
        textFrame.parentNode.children[0].style.filter = "brightness(40%)";
    });
    textFrame.addEventListener('mouseout', e => {
        textFrame.parentNode.children[0].style.filter = "none";
    });
});