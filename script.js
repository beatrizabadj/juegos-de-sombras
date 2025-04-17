window.addEventListener('load', function() {
        var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        touchMoveStopPrograpation:true,
    });

    
    const btns = document.querySelectorAll(".btn");
    const contents = document.querySelectorAll(".content");
    const arrows = document.querySelectorAll(".arrow");
    
        btns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            contents[index].classList.toggle("active");
            arrows[index].classList.toggle("rotate");
        });
    });
})