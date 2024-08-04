

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.section-container');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 100) {
                card.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
});


