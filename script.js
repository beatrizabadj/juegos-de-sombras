window.addEventListener('load', function() {
        var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        touchMoveStopPrograpation:true,
    });

    
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('active');
            
            // Rotar el ícono
            const icon = button.querySelector('.arrow');
            icon.classList.toggle('rotate');
        });
    });

    // const mainVideo = this.document.querySelector('.main-video');
    // const thumbnail = this.document.querySelector('.video-thumbnail');
    // thumbnail.addEventListener('click', () => {
    //     thumbnail.style.display = 'none';
    //     mainVideo.play();
    // })
    
})