
document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const contentSections = document.querySelectorAll(".content-section");

    carouselItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            contentSections.forEach(section => {
                section.classList.remove("active");
            });
            document.querySelector(targetId).classList.add("active");
        });
    });

    // Restaurar a rolagem do carrossel
    const carousel = document.querySelector(".carousel");
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; // Aumenta a sensibilidade de rolagem
        carousel.scrollLeft = scrollLeft - walk;
    });
});

document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        const target = document.querySelector(this.getAttribute('data-target'));
        if (target) {
            target.classList.add('active');
            // Rola a página até a seção ativa
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
