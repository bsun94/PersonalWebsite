const images = document.querySelectorAll('.image');

const imagesOptions = {
    rootMargin: '0% 0% -35% 0%'
};

const imagesObserver = new IntersectionObserver (function(
    entries,
    imagesObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                imagesObserver.unobserve(entry.target);
            }
        });
    }, 
    imagesOptions);

const lightbox = document.createElement('div');  //check createElement
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach(image => {
    imagesObserver.observe(image);
    image.addEventListener('click', e => {
        lightbox.classList.add('active');  //check eventlisteners
        const img = document.createElement('img');
        console.log(image.firstChild)
        img.src = image.firstChild.nextElementSibling.src;  //check eventlisteners
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});