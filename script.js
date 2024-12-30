document.addEventListener('DOMContentLoaded', () => {
    const poems = document.querySelectorAll('.poem');
    const images = document.querySelectorAll('.image');

    // Add hover effect for poems
    poems.forEach(poem => {
        poem.addEventListener('mouseenter', () => {
            poem.style.transform = 'scale(1.05)';
            poem.style.transition = 'transform 0.3s';
        });

        poem.addEventListener('mouseleave', () => {
            poem.style.transform = 'scale(1)';
        });
    });

    // Add click event to images
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert('Eres la razón de cada sonrisa en este día tan especial. Te amo ❤');
        });
    });

    // Animate final message on scroll
    const finalMessage = document.querySelector('.final-message');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                finalMessage.style.opacity = '1';
                finalMessage.style.transform = 'translateY(0)';
                finalMessage.style.transition = 'opacity 1.5s, transform 1.5s';
            }
        });
    });

    observer.observe(finalMessage);
});
