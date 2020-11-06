const textFrames = document.querySelectorAll('.frame-text');

textFrames.forEach(textFrame => {
    textFrame.addEventListener('mouseover', e => {
        textFrame.parentNode.children[0].style.filter = "brightness(40%)";
    });
    textFrame.addEventListener('mouseout', e => {
        textFrame.parentNode.children[0].style.filter = "none";
    });
});