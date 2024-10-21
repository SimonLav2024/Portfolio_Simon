
//------------------------------- navbar--------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navbar-item');
    
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200);

        item.addEventListener('click', (e) => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Cerrar otros desplegables abiertos
                navItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherDropdown = otherItem.querySelector('.dropdown');
                        if (otherDropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    }
                });
            }
        });
    });

    // Cerrar desplegables al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar-item')) {
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
//----------------------------------fin-----------------------------------

// ------------------------------sidebar----------------------------------
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarMovil = document.getElementById("sidebar");
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
// ----------esto es para que se cierre el sidebar cuando clicke fuera del mismo
// document.addEventListener("click", (event) => {
//     if (window.innerWidth > 600) {
//         if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
//             sidebar.classList.remove("open");
//             menuBtn.classList.remove("open");
//             menuOpen = false;
//         }
//     }
// });

// ---------------Función para abrir/cerrar el sidebar en vista movil

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
const modal1 = document.getElementById("imagenModal1");
const modal2 = document.getElementById("imagenModal2");
const modal3 = document.getElementById("imagenModal3");
const modal4 = document.getElementById("imagenModal4");
const modal5 = document.getElementById("imagenModal5");
const modalImg1 = document.querySelector(".modal-image1");
const modalImg2 = document.querySelector(".modal-image2");
const modalImg3 = document.querySelector(".modal-image3");
const modalImg4 = document.querySelector(".modal-image4");
const modalImg5 = document.querySelector(".modal-image5");
const thumbnail1 = document.getElementById("0");
const thumbnail2 = document.getElementById("1");
const thumbnail3 = document.getElementById("2");
const thumbnail4 = document.getElementById("3");
const thumbnail5 = document.getElementById("4");
const closeBtn1 = document.querySelector(".close1");
const closeBtn2 = document.querySelector(".close2");
const closeBtn3 = document.querySelector(".close3");
const closeBtn4 = document.querySelector(".close4");
const closeBtn5 = document.querySelector(".close5");
const enlaceGit = document.getElementById("eGit");
const enlaceLinkedin = document.getElementById("eLink");
const ocultarboton = document.querySelector(".menu-btn");

    thumbnail1.addEventListener("click", (event) => {
        ocultarboton.style.visibility = "hidden";
        modal1.style.display = "block";
        modalImg1.src = thumbnail1.getAttribute("data-full");
        modalImg1.alt = thumbnail1.alt;
    });
    thumbnail2.addEventListener("click", (event) => {
        ocultarboton.style.visibility = "hidden";
        modal2.style.display = "block";
        modalImg2.alt = thumbnail2.alt;
        modalImg2.src = thumbnail2.getAttribute("data-full");
    });
    thumbnail3.addEventListener("click", (event) => {
        ocultarboton.style.visibility = "hidden";
        modal3.style.display = "block";
        modalImg3.src = thumbnail3.getAttribute("data-full");
        modalImg3.alt = thumbnail3.alt;
    });
    thumbnail4.addEventListener("click", (event) => {
        ocultarboton.style.visibility = "hidden";
        modal4.style.display = "block";
        modalImg4.src = thumbnail4.getAttribute("data-full");
        modalImg4.alt = thumbnail4.alt;
    });
    thumbnail5.addEventListener("click", (event) => {
        ocultarboton.style.visibility = "hidden";
        modal5.style.display = "block";
        modalImg5.src = thumbnail5.getAttribute("data-full");
        modalImg5.alt = thumbnail5.alt;
    });

closeBtn1.addEventListener("click", () => {
    modal1.style.display = "none";
    ocultarboton.style.visibility = "visible";
});
closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
    ocultarboton.style.visibility = "visible";
});
closeBtn3.addEventListener("click", () => {
    modal3.style.display = "none";
    ocultarboton.style.visibility = "visible";
});
closeBtn4.addEventListener("click", () => {
    modal4.style.display = "none";
    ocultarboton.style.visibility = "visible";
});
closeBtn5.addEventListener("click", () => {
    modal5.style.display = "none";
    ocultarboton.style.visibility = "visible";
});


modal1.addEventListener("click", (e) => {
    clasesMod = e.target.className;
    if(clasesMod == "modal-content") {
        modal1.style.display = "none";
        ocultarboton.style.visibility = "visible";
    }
});
modal2.addEventListener("click", (e) => {
    clasesMod = e.target.className;
    if(clasesMod == "modal-content") {
        modal2.style.display = "none";
        ocultarboton.style.visibility = "visible";
    }
});
modal3.addEventListener("click", (e) => {
    clasesMod = e.target.className;
    if(clasesMod == "modal-content") {
        modal3.style.display = "none";
        ocultarboton.style.visibility = "visible";
    }
});
modal4.addEventListener("click", (e) => {
    clasesMod = e.target.className;
    if(clasesMod == "modal-content") {
        modal4.style.display = "none";
        ocultarboton.style.visibility = "visible";
    }
});
modal5.addEventListener("click", (e) => {
    clasesMod = e.target.className;
    if(clasesMod == "modal-content") {
        modal5.style.display = "none";
        ocultarboton.style.visibility = "visible";
    }
});
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
// ---------------------------------knowledge-----------------------------------
const lenguajes = {
    html: '/img/knowledges/html.png',
    css: '/img/knowledges/css.png',
    javascript: '/img/knowledges/javascript.png',
    sql: '/img/knowledges/sql.png',
    php: '/img/knowledges/php.png',
    react: '/img/knowledges/react.png'
};

const imageContainer = document.getElementById('imageContainer');
const buttons = document.querySelectorAll('.botonK');

// Función para establecer la imagen inicial
function setInitialImage() {
    imageContainer.style.display = "flex";
    imageContainer.innerHTML = `<img class="img-k" src="img/fondo2.jpeg" alt="technology">`;
}

// Establecer la imagen inicial al cargar la página
document.addEventListener('DOMContentLoaded', setInitialImage);

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const tech = this.getAttribute('data-tech');
        const imageSrc = lenguajes[tech];
        imageContainer.style.display = "flex";
        imageContainer.innerHTML = `<img class="img-k" src="${imageSrc}" alt="${tech} technology">`;
    });
});
// --------------------------------------------fin-------------------------------------------

// -----------------------------------------footer------------------------------------------
const carencias = document.querySelector(".car");
const botonCar = document.querySelector(".carencias");
let abiertoCar = false;

botonCar.addEventListener("click", () => {
    if(!abiertoCar) {
        carencias.classList.add("open");
        botonCar.classList.add("open");
        abiertoCar = true;
    }else{
        carencias.classList.remove("open");
        botonCar.classList.remove("open");
        abiertoCar = false;
    }
});
// -----------------------------------------------fin--------------------------------------------
