
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
