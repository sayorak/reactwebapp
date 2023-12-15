document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');

    const subscribeButton = document.querySelector('button[type="submit"]');
    subscribeButton.addEventListener('click', function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const subscribeCheckbox = document.getElementById('subscribe');

        alert(`Subscribed: ${emailInput.value}, ${subscribeCheckbox.checked ? 'Yes' : 'No'}`);
    });

    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function () {
            alert(`Clicked on event: ${row.children[1].textContent}`);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            alert('Escape key pressed!');
        }
    });

    const menuButton = document.getElementById('menu-button');
    const menuDropdown = document.getElementById('menu-dropdown');

    menuButton.addEventListener('click', function () {
        menuDropdown.classList.toggle('show');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            menuDropdown.classList.remove('show');
        }
    });
    menuButton.addEventListener('mouseover', function () {
        menuDropdown.classList.add('show');
    });

    menuDropdown.addEventListener('mouseout', function (event) {
        if (!event.relatedTarget || (event.relatedTarget !== menuButton && !menuButton.contains(event.relatedTarget) && !menuDropdown.contains(event.relatedTarget))) {
            menuDropdown.classList.remove('show');
        }
    });

    tableRows.forEach(row => {
        row.addEventListener('mouseover', function () {
            row.style.backgroundColor = '#e6f7ff';
        });

        row.addEventListener('mouseout', function () {
            row.style.backgroundColor = '';
        });
    });

    document.addEventListener('click', function (event) {
        if (!menuDropdown.contains(event.target) && !menuButton.contains(event.target)) {
            menuDropdown.classList.remove('show');
        }
    });
});
