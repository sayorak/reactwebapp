document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');

    // ... (previous code)

    // Mouseover and mouseout event listeners for the menu dropdown
    menuButton.addEventListener('mouseover', function () {
        menuDropdown.classList.add('show');
    });

    menuDropdown.addEventListener('mouseout', function (event) {
        // Check if the mouse is not over the menu button or the dropdown
        if (!event.relatedTarget || (event.relatedTarget !== menuButton && !menuButton.contains(event.relatedTarget) && !menuDropdown.contains(event.relatedTarget))) {
            menuDropdown.classList.remove('show');
        }
    });

    // Additional mouse events for table rows
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function () {
            row.style.backgroundColor = '#e6f7ff';
        });

        row.addEventListener('mouseout', function () {
            row.style.backgroundColor = '';
        });
    });

    // Click event listener for the entire document
    document.addEventListener('click', function (event) {
        // Check if the click is outside the menu dropdown
        if (!menuDropdown.contains(event.target) && !menuButton.contains(event.target)) {
            menuDropdown.classList.remove('show');
        }
    });
});
