document.addEventListener("DOMContentLoaded", function() {
    $('.promo-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });

    document.querySelectorAll("nav ul li").forEach(item => {
        item.addEventListener("click", function() {
            alert("Anda mengklik: " + this.textContent);
        });
    });
});