
//------------------------------- navbar--------------------------------
const menuIcon = document.getElementById('menuIcon');
        const navLinks = document.getElementById('navLinks');

        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });
//----------------------------------fin-----------------------------------