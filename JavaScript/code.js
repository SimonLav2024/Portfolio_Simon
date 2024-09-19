
//------------------------------- navbar--------------------------------
const menuIcon = document.getElementById('menuIcon');
        const navLinks = document.getElementById('navLinks');

        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });
//----------------------------------fin-----------------------------------

// ------------------------------sidebar----------------------------------
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                sidebar.classList.add('open');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                sidebar.classList.remove('open');
                menuOpen = false;
            }
        });
// -------------------------------fin----------------------------------------