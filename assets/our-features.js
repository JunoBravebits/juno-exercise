document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.logButton');

    buttons.forEach((button, index) => {
        if (!button.dataset.eventAdded) {
            button.addEventListener('click', function() {
                const componentId = this.getAttribute('data-component-id');
                console.log(`Button in component ${componentId} clicked`);
            });

            button.dataset.eventAdded = 'true';
        }
    });
});