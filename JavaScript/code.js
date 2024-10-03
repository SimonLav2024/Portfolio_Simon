
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
// ----------esto es para que se cierre el sidebar cuando clicke fuera del mismo
document.addEventListener("click", (event) => {
    if (window.innerWidth > 600) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("open");
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    }
});

// ---------------Función para abrir/cerrar el sidebar en vista movil
openSidebarBtn.addEventListener("click", () => {

    if (!openSidebarBtnOpen) {
        openSidebarBtn.classList.add('open');
        sidebarMovil.classList.add('open');
        openSidebarBtnOpen = true;
    } else {
        openSidebarBtn.classList.remove('open');
        sidebarMovil.classList.remove('open');
        openSidebarBtnOpen = false;
    }
    mainContent.classList.toggle("shifted");

    openSidebarBtn.classList.toggle("opened");

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

// -------------------------------modal-------------------------------------
const modal = document.getElementById("imagenModal");
const modalImg = document.querySelector(".modal-image");
const thumbnail = document.querySelectorAll(".imagenes");
const closeBtn = document.querySelector(".close");
const enlaceGit = document.getElementById("eGit");
const enlaceLinkedin = document.getElementById("eLink");

thumbnail.forEach(thumb => {
    thumb.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
        modalImg.src = thumb.getAttribute("data-full");
        modalImg.alt = thumb.alt;
    });
});

modalImg.addEventListener("click", () => {
    window.location.href = enlaceGit.href;
});


// esto es para cerrar el modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.onclick = (event) => {
    if(event.target.classList.contains("modal-content")){
        modal.style.display = "none";
    }
}
// --------------------------------------fin------------------------------------

// -------------------------------------iconos del sidebar------------------------------
document.querySelectorAll('.ajuste-img').forEach(icon => {
    icon.addEventListener('mousemove', (e) => {
        const rect = icon.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 5;
        const angleY = (centerX - x) / 5;
        
        icon.style.transform = `scale(1.2) translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) translateY(0) rotateX(0) rotateY(0)';
    });
});
// ---------------------------------fin------------------------------------------



