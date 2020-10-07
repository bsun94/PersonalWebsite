const frames = document.querySelectorAll('.frame');

function frameOpacity (frame) {
    let bounds = frame.getBoundingClientRect();
    frame.style.opacity = Math.min(1, Math.max(bounds.bottom / bounds.height, 0));

    if (bounds.y <= -5 && bounds.bottom >= 0 && frame.nextElementSibling) {
        frame.style.zIndex = 1;
        frame.nextElementSibling.style.zIndex = 0;
        frame.nextElementSibling.style.transform = `translateY(${-bounds.height - bounds.y}px)`;
    } else if (bounds.bottom <= 5 && frame.nextElementSibling) {
        frame.style.zIndex = 0;
        frame.nextElementSibling.style.zIndex = 1;
    } else if (bounds.y >= -5 && frame.nextElementSibling) {
        frame.nextElementSibling.style.transform = 'none';
    };
};

function throttler (fn, wait) {
    let time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        };
    };
};

window.addEventListener('scroll', e => {
    frames.forEach(frame => {
        throttler(frameOpacity(frame), 75);
    });
});

window.addEventListener('resize', e => {
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