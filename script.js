let accordionHeader = document.querySelectorAll('.accordion-title');

accordionHeader.forEach((item) => {
    item.addEventListener('click', () => {
        let minus = document.querySelectorAll('.float-end');
        minus.forEach((item) => {
            item.src = 'images/icon-plus.svg'
        })
        let plusMinus = item.querySelector('.float-end');
        let isExpanded = item.getAttribute('aria-expanded') === 'true';
        // Toggle between plus and minus icons based on the accordion state
        if (isExpanded) {
            plusMinus.src = 'images/icon-minus.svg';
        } else {
            plusMinus.src = 'images/icon-plus.svg';
        }
    });
});
