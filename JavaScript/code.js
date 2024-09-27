
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
const sidebarMovil = document.getElementById("sidebar");
let menuOpen = false;
const openSidebarBtn = document.getElementById("openSidebarBtn");
const mainContent = document.querySelector(".parallax");
let openSidebarBtnOpen = false;


        menuBtn.addEventListener('click', () => {
            console.log("click");
            if (!menuOpen) {
                menuBtn.classList.add('open');
                sidebar.classList.add('open');
                menuOpen = true;
            }else{
                menuBtn.classList.remove('open');
                sidebar.classList.remove('open');
                menuOpen = false;
            }
        });
        // ----------esto es para que se cierre el sidebar cuando clicke fuera del mismo
        document.addEventListener("click", (event) => {
            if(window.innerWidth > 600){
                if(!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                    sidebar.classList.remove("open");
                    menuBtn.classList.remove("open");
                    menuOpen = false;
                }
            }
        });


// Función para abrir/cerrar el sidebar
openSidebarBtn.addEventListener("click", () => {
    
    if (!openSidebarBtnOpen){
        openSidebarBtn.classList.add('open');
        sidebarMovil.classList.add('open');
        openSidebarBtnOpen = true;
    }else{
        openSidebarBtn.classList.remove('open');
        sidebarMovil.classList.remove('open');
        openSidebarBtnOpen = false;
    }

    // Alterna el margen de la main-content
    mainContent.classList.toggle("shifted");

    // Cambia la posición de la pestaña
    openSidebarBtn.classList.toggle("opened");
    
    // Si el sidebar está abierto, cambia el icono a una flecha hacia la derecha
    if (sidebar.classList.contains("open")) {
        openSidebarBtn.innerHTML = '&#9654;'; // Flecha hacia la derecha
    } else {
        openSidebarBtn.innerHTML = '&#9664;'; // Flecha hacia la izquierda
    }
});
// -------------------------------fin----------------------------------------
// ---------------------------oleaje azul------------------------------------
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
let time = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fondo azul
    ctx.fillStyle = '#3498db';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar la ola
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    for (let x = 0; x < canvas.width; x++) {
        // Reducimos la frecuencia de la onda para un movimiento más lento
        const y = Math.sin(x * 0.005 + time) * 20 + (canvas.height - 50);
        ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.fillStyle = '#2980b9';
    ctx.fill();

    // Reducimos el incremento de tiempo para ralentizar el movimiento
    time += 0.02;
    requestAnimationFrame(drawWave);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawWave();
// ---------------------------------------fin----------------------------------



