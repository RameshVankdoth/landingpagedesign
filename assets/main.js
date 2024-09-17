document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const itemsToShow = ; // Number of items to show at a time
    const totalItems = items.length;
    let index = 0;

    // Set the width of carousel-inner to accommodate all items
    carouselInner.style.width = `${totalItems * 100}%`;

    function updateCarousel() {
        const offset = -index * (100 / itemsToShow);
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    // Handle click on previous button
    prevButton.addEventListener('click', () => {
        if (index === 0) {
            index = totalItems - itemsToShow; // Move to the last set of items
            carouselInner.style.transition = 'none'; // Disable transition for instant jump
            updateCarousel();
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            }, 50);
        } else {
            index--;
            updateCarousel();
        }
    });

    // Handle click on next button
    nextButton.addEventListener('click', () => {
        if (index >= totalItems - itemsToShow) {
            index = 0; // Move to the start set of items
            carouselInner.style.transition = 'none'; // Disable transition for instant jump
            updateCarousel();
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            }, 50);
        } else {
            index++;
            updateCarousel();
        }
    });
});
