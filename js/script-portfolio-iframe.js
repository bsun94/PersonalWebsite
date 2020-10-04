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

images.forEach(image => {
    imagesObserver.observe(image);
    image.addEventListener('click', e => {
        var filename = image.id;
        var iframe = document.createElement('iframe');
        iframe.className = "iframe";
        iframe.src = filename;
        image.replaceWith(iframe);
    });
});

