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

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach(image => {
    imagesObserver.observe(image);
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
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