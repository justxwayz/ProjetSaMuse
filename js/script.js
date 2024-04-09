document.querySelectorAll('.link-section').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.menu__item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var video = document.querySelector('.presentation-video');

video.addEventListener('loadedmetadata', function() {
    this.currentTime = 3;
});

video.addEventListener('timeupdate', function() {
    if (this.currentTime >= 93) { 
        this.currentTime = 3;
    }
});


document.querySelectorAll('#cartes-list li').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-img');
        document.getElementById('carte-img').src = imgSrc;
    });
});