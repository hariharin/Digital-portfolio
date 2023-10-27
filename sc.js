// JavaScript for your personal website

// Function to toggle a navigation menu on small screens
function toggleNav() {
    var nav = document.querySelector('nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

// Event listener for the navigation menu toggle button
var toggleButton = document.querySelector('.nav-toggle-button');
toggleButton.addEventListener('click', toggleNav);
