document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');

    // Event listener for the subscribe button
    const subscribeButton = document.querySelector('button[type="submit"]');
    subscribeButton.addEventListener('click', function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const subscribeCheckbox = document.getElementById('subscribe');

        alert(`Subscribed: ${emailInput.value}, ${subscribeCheckbox.checked ? 'Yes' : 'No'}`);
    });

    // Event listener for the sports events table rows
    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function () {
            alert(`Clicked on event: ${row.children[1].textContent}`);
        });
    });

    // Keyboard event listener for the whole document
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            alert('Escape key pressed!');
        }
    });

    // Event listener for menu dropdown
    const menuButton = document.getElementById('menu-button');
    const menuDropdown = document.getElementById('menu-dropdown');

    menuButton.addEventListener('click', function () {
        menuDropdown.classList.toggle('show');
    });

    // Keyboard event listener for menu dropdown
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            menuDropdown.classList.remove('show');
        }
    });
});
