// main.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.header');

    // 1. Toggle the mobile menu visibility
    menuToggle.addEventListener('click', () => {
        // Toggle the 'open' class for styling the menu list
        navList.classList.toggle('open');
        
        // Toggle the icon (Hamburger to X and back)
        const icon = menuToggle.querySelector('i');
        if (navList.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Use 'X' icon when open
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Use Hamburger icon when closed
        }
    });

    // 2. Close the menu when a link is clicked (useful for single-page jumps like #divisions)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // 3. Optional: Add 'scrolled' class to header for styling when user scrolls
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});