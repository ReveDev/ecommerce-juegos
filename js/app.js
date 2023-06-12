const juegos = [
    {
        id: 0,
        nombre: "CALL OF DUTY® MODERN WARFARE® 2",
        portada: "./img/webimages/games/codmw2.webp",
        genero: "accion",
        tipo: "fps",
        precio: 6990,
    },
    {
        id: 1,
        nombre: "TOM CLANCY'S RAINBOW SIX® SIEGE",
        portada: "./img/webimages/games/tcrss.webp",
        genero: "accion",
        tipo: "fps",
        precio: 1999,
    },
    {
        id: 2,
        nombre: "HALO: THE MASTER CHIEF COLLECTION",
        portada: "./img/webimages/games/htmcc.webp",
        genero: "accion",
        tipo: "fps",
        precio: 3999,
    },
    {
        id: 3,
        nombre: "DEVIL MAY CRY 5",
        portada: "./img/webimages/games/dmc5.webp",
        genero: "accion",
        tipo: "has",
        precio: 2420, 
    },
    {
        id: 4,
        nombre: "GOD OF WAR",
        portada: "./img/webimages/games/gow.webp",
        genero: "accion",
        tipo: "has",
        precio: 8499,
    },
    {
        id: 5,
        nombre: "HADES",
        portada: "./img/webimages/games/hades.webp",
        genero: "accion",
        tipo: "has",
        precio: 1750,
    },
    {
        id: 6,
        nombre: "EA SPORTS™ FIFA 23",
        portada: "./img/webimages/games/f23.webp",
        genero: "deportes",
        tipo: "simdep",
        precio: 8999,
    },
    {
        id: 7,
        nombre: "NBA 2K23",
        portada: "./img/webimages/games/nba2k23.webp",
        genero: "deportes",
        tipo: "simdep",
        precio: 6999,
    },
    {
        id: 8,
        nombre: "WWE 2K23",
        portada: "./img/webimages/games/wwe2k23.webp",
        genero: "deportes",
        tipo: "simdep",
        precio: 7999,
    },
    {
        id: 9,
        nombre: "FORZA HORIZON 5",
        portada: "./img/webimages/games/fh5.webp",
        genero: "deportes",
        tipo: "carreras",
        precio: 5999,
    },
    {
        id: 10,
        nombre: "BEAMNG.DRIVE",
        portada: "./img/webimages/games/bngd.webp",
        genero: "deportes",
        tipo: "carreras",
        precio: 1750,
    },
    {
        id: 11,
        nombre: "ASSETTO CORSA COMPETIZIONE",
        portada: "./img/webimages/games/acc.webp",
        genero: "deportes",
        tipo: "carreras",
        precio: 1499,
    },
    {
        id: 12,
        nombre: "CULT OF THE LAMB",
        portada: "./img/webimages/games/cotl.webp",
        genero: "estrategia",
        tipo: "city",
        precio: 1199,
    },
    {
        id: 13,
        nombre: "RIMWORLD",
        portada: "./img/webimages/games/rw.webp",
        genero: "estrategia",
        tipo: "city",
        precio: 2100,
    },
    {
        id: 14,
        nombre: "CITIES: SKYLINES",
        portada: "./img/webimages/games/cs.webp",
        genero: "estrategia",
        tipo: "city",
        precio: 2100,
    },
    {
        id: 15,
        nombre: "CRUSADERS KINGS III",
        portada: "./img/webimages/games/ck3.webp",
        genero: "estrategia",
        tipo: "etr",
        precio: 3200,
    },
    {
        id: 16,
        nombre: "AGE OF EMPIRE II: DEFINITIVE EDITION",
        portada: "./img/webimages/games/aoe2de.webp",
        genero: "estrategia",
        tipo: "etr",
        precio: 1999,
    },
    {
        id: 17,
        nombre: "TOTAL WAR: WARHAMMER III",
        portada: "./img/webimages/games/tww3.webp",
        genero: "estrategia",
        tipo: "etr",
        precio: 7999,
    },
    {
        id: 18,
        nombre: "STAR WARS JEDI: SURVIVOR™",
        portada: "./img/webimages/games/swjs.webp",
        genero: "aventuras",
        tipo: "souls",
        precio: 8999,
    },
    {
        id: 19,
        nombre: "ELDEN RING",
        portada: "./img/webimages/games/er.webp",
        genero: "aventuras",
        tipo: "souls",
        precio: 8599,
    },
    {
        id: 20,
        nombre: "SEKIRO™: SHADOWS DIE TWICE",
        portada: "./img/webimages/games/ssdwgoty.webp",
        genero: "aventuras",
        tipo: "souls",
        precio: 1299,
    },
    {
        id: 21,
        nombre: "RUST",
        portada: "./img/webimages/games/rust.webp",
        genero: "aventuras",
        tipo: "supervivencia",
        precio: 2440,
    },
    {
        id: 22,
        nombre: "SUBNAUTICA",
        portada: "./img/webimages/games/sn.webp",
        genero: "aventuras",
        tipo: "supervivencia",
        precio: 1499,
    },
    {
        id: 23,
        nombre: "RESIDENT EVIL 4",
        portada: "./img/webimages/games/re4r.webp",
        genero: "aventuras",
        tipo: "supervivencia",
        precio: 12958,
    },
    {
        id: 24,
        nombre: "HOGWARTS LEGACY",
        portada: "./img/webimages/games/hl.webp",
        genero: "rol",
        tipo: "openworld",
        precio: 8599,
    },
    {
        id: 25,
        nombre: "MONSTER HUNTER: WORLD",
        portada: "./img/webimages/games/mhw.webp",
        genero: "rol",
        tipo: "openworld",
        precio: 2420,
    },
    {
        id: 26,
        nombre: "NEW WORLD",
        portada: "./img/webimages/games/nw.webp",
        genero: "rol",
        tipo: "openworld",
        precio: 2600,
    },
    {
        id: 27,
        nombre: "FINAL FANTASY VII REMAKE INTERGRADE",
        portada: "./img/webimages/games/ff7ri.webp",
        genero: "rol",
        tipo: "japones",
        precio: 7700,
    },
    {
        id: 28,
        nombre: "PERSONA 5 ROYAL",
        portada: "./img/webimages/games/p5r.webp",
        genero: "rol",
        tipo: "japones",
        precio: 7999,
    },
    {
        id: 29,
        nombre: "DRAGON BALL Z: KAKAROT",
        portada: "./img/webimages/games/dbzk.webp",
        genero: "rol",
        tipo: "japones",
        precio: 7119,
    },
];

//VARIABLES
const buscadorTexto = document.querySelector('.buscar-texto');
const buscadorResultado = document.querySelector('.result-box');
const modalCarrito = document.querySelector('.modal-carrito-container');
const botonAbrirCarrito = document.querySelector('.icono-carrito');
const bgModals = document.querySelector('.bgmodals');
const botonCerrarCarrito = document.querySelector('.cerrar-modal');
const carritoInfo = document.querySelector('.carrito-info');
const botonVaciarCarritoEntero = document.querySelector('.vaciar-carrito');
const precioTotal = document.querySelector('.precio-total');
const cantidadTotal = document.querySelector('.cantidad-carrito');
const carouselSlide = document.querySelectorAll('.slide');
const controlCarousel = document.querySelectorAll('.control-carousel');
const juegosContainer = document.querySelector('.juegos-container');
const botonesFiltros = document.querySelectorAll('.filtro-input');
const reviewSlides = document.querySelectorAll('.reviews-article');
const dots = document.querySelectorAll('.dot');
let carritoJuegos = [];
let botonComprar = document.querySelectorAll('.boton-compra');
let botonRestarCantidad = document.querySelectorAll(".restar-cantidad");
let botonSumarCantidad = document.querySelectorAll(".sumar-cantidad");
let botonEliminar = document.querySelectorAll('.eliminar-juego');
let carouselIndex = 0;
let actualSlide = 0;

// BUSCADOR DE JUEGOS
function buscadorJuegos(buscar) {
    buscadorResultado.innerHTML = "";
    const buscarJuegos = juegos.filter(juego =>  
        juego.nombre.includes(buscar.toUpperCase())
    );

    buscarJuegos.forEach((resultado) => {
        const cardResultado = document.createElement("div");
        cardResultado.classList.add("result-box-inner");
        cardResultado.innerHTML = `
        <button class="result-boton">
            <img src="${resultado.portada}" alt="${resultado.nombre}" class="result-img">
            <h6 class="result-titulo">${resultado.nombre}</h6>
        </button> `

        buscadorResultado.append(cardResultado);
    });
}

buscadorTexto.addEventListener('input', (e) => {
    const ingresarTexto = e.currentTarget.value;

    if(ingresarTexto !== "") {
        buscadorJuegos(ingresarTexto);
    } else {
        buscadorResultado.innerHTML = "";
    }
});

//FUNCIONES PARA ABRIR Y CERRAR CARRITO
const abrirCarrito = function() {
    modalCarrito.classList.remove("ocultar");
    bgModals.classList.remove("ocultar");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
botonAbrirCarrito.addEventListener('click', abrirCarrito);

const cerrarCarrito = function() {
    modalCarrito.classList.add("ocultar");
    bgModals.classList.add("ocultar");
}
botonCerrarCarrito.addEventListener('click', cerrarCarrito);
bgModals.addEventListener('click', cerrarCarrito);

//LOS MAS VENDIDOS CAROUSEL CONTROL
function actualCarousel(n) {
  mostrarSlide(carouselIndex = n);
}

function mostrarSlide(n) {
  let i;

  if(n < 1) {
    carouselIndex = carouselSlide.length;
  }

  for(i = 0; i < carouselSlide.length; i++) {
    carouselSlide[i].style.display = "none";
  }
  carouselIndex++;
  

  if(carouselIndex > carouselSlide.length) {
    carouselIndex = 1;
  }
  carouselSlide[carouselIndex-1].style.display = "block"


  for(i = 0; i < controlCarousel.length; i++) {
    controlCarousel[i].className = controlCarousel[i].className.replace(" active", "");
  }
  controlCarousel[carouselIndex-1].className += " active";
}
mostrarSlide(carouselIndex);

controlCarousel.forEach((lines, index) => {
  lines.addEventListener('click', () => {
    actualCarousel(index);
  });
});

setInterval(() => {
  mostrarSlide();
}, 5000);

// CARGA DE JUEGOS AL HTML
function ingresarJuegos(allGames) {
    juegosContainer.innerHTML = "";
    juegos.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

    allGames.forEach(juego => {
        const cardJuegos = document.createElement("div");
        cardJuegos.classList.add("juego");
        cardJuegos.innerHTML = `
        <img src="${juego.portada}" alt="${juego.nombre}">
        <div class="info-juego">
            <h2 class="nombre-juego">${juego.nombre}</h2>
            <p>$ ${(juego.precio).toLocaleString()}</p>
            <button class="boton-favoritos"><i class="fa-solid fa-heart-circle-plus fa-sm"></i></button>
            <button class="boton-ver-mas">MAS INFO <i class="fa-solid fa-maximize fa-sm"></i></button>
            <button class="boton-compra" data-juego-id="${juego.id}">AGREGAR AL CARRITO <i class="fa-solid fa-cart-plus fa-sm"></i></button>
        </div> `

        juegosContainer.append(cardJuegos);
    });
    botonComprarUpdate();
}
ingresarJuegos(juegos);

//FILTRAR JUEGOS POR GENERO, TIPO Y PRECIO
botonesFiltros.forEach((boton) => {
    boton.addEventListener('click', (c) => {
        botonesFiltros.forEach((boton) => boton.checked = false);
        c.currentTarget.checked = true;

        if(c.currentTarget.id !== "todos") {
            const filtroGenero = juegos.filter((juego) => juego.genero === c.currentTarget.id);
            ingresarJuegos(filtroGenero);

            if(c.currentTarget.id !== "accion" && c.currentTarget.id !== "deportes" && c.currentTarget.id !== "estrategia" && c.currentTarget.id !== "aventuras" && c.currentTarget.id !== "rol") {
                const filtroTipo = juegos.filter((juego) => juego.tipo === c.currentTarget.id);
                ingresarJuegos(filtroTipo);

                if(c.currentTarget.id !== "fps" && c.currentTarget.id !== "has" && c.currentTarget.id !== "simdep" && c.currentTarget.id !== "carreras" && c.currentTarget.id !== "city" && c.currentTarget.id !== "etr" && c.currentTarget.id !== "souls" && c.currentTarget.id !== "supervivencia" && c.currentTarget.id !== "openworld" && c.currentTarget.id !== "japones") {
                    const filtroMenorCinco = juegos.filter((juego) => juego.precio <= 5000);
                    ingresarJuegos(filtroMenorCinco);
                    
                    if(Number(c.currentTarget.id) !== 5000 && Number(c.currentTarget.id) !== 10001) {
                        const filtroMayorCincoMenorDiez = juegos.filter((juego) => juego.precio >= 5000 && juego.precio <= 10000);
                        ingresarJuegos(filtroMayorCincoMenorDiez);
                    } else if(Number(c.currentTarget.id) !== 10000 & Number(c.currentTarget.id) !== 5000) {
                        const filtroMayorDiez = juegos.filter((juego) => juego.precio >= 10000);
                        ingresarJuegos(filtroMayorDiez);
                    }
                }
            }
        } else {
            ingresarJuegos(juegos);
        }
    });
});

//AGREGAR JUEGOS AL CARRITO PARA VER EN EL MODAL
function agregarJuegoCarrito(juegoId) {
    const juegoParaAgregar = juegos.find((juego) => juego.id === juegoId);
    
    if(carritoJuegos.some((juego) => juego.id === juegoId)) {
        const juegoNum = carritoJuegos.findIndex((juego) => juego.id === juegoId);
        carritoJuegos[juegoNum].cantidad++;
    } else {
        juegoParaAgregar.cantidad = 1;
        carritoJuegos.push(juegoParaAgregar);
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    carritoInfo.innerHTML = "";
    
    carritoJuegos.forEach(juego => {
        const juegoCarrito = document.createElement("div");
        juegoCarrito.classList.add("carrito-juegos");
        juegoCarrito.innerHTML = `
        <img src="${juego.portada}" alt="${juego.nombre}" class="carrito-img">
        <p class="carrito-titulo">${juego.nombre}</p>
        <button class="restar-cantidad" data-juego-id="${juego.id}"><i class="fa-solid fa-circle-minus fa-lg"></i></button>
        <span class="cantidad-juego">${juego.cantidad}</span>
        <button class="sumar-cantidad" data-juego-id="${juego.id}"><i class="fa-solid fa-circle-plus fa-lg"></i></button>
        <span class="carrito-precio">$ ${(juego.precio * juego.cantidad).toLocaleString()}</span>
        <button class="eliminar-juego" data-juego-id="${juego.id}"><i class="fa-solid fa-trash-can fa-xs"></i></button> `

        carritoInfo.appendChild(juegoCarrito);
    });
    precioTotal.innerHTML = `$ ${totalCompra(carritoJuegos).toLocaleString()}`
    cantidadTotal.innerHTML = carritoJuegos.length;
    botonesCantidades();
    botonEliminarUpdate();

    if(carritoJuegos.length === 0) {
        carritoInfo.innerHTML = `<p class="carrito-vacio">SU CARRITO ESTA VACIO</p>`;
        precioTotal.innerHTML = "$ 0.00";
    }

    localStorage.setItem("carrito-juegos", JSON.stringify(carritoJuegos));
}

function botonComprarUpdate() {
    botonComprar = document.querySelectorAll('.boton-compra');
    botonComprar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const juegoId = Number(e.currentTarget.getAttribute("data-juego-id"));
            agregarJuegoCarrito(juegoId);

            Swal.fire({
                icon: 'success',
                title: 'Juego agregado al carrito exitosamente',
                toast: true,
                position: 'top-right',
                iconColor: '#0A261F',
                background: '#17E7B7',
                customClass: {
                  title: 'alerta-juego-agregado',
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            })
        });
    });
}

//FUNCIONALIDADES DEL MODAL DEL CARRITO
function botonesCantidades() {
    botonRestarCantidad = document.querySelectorAll(".restar-cantidad");
    botonSumarCantidad = document.querySelectorAll(".sumar-cantidad");

    botonRestarCantidad.forEach((botonResta) => {
        botonResta.addEventListener('click', clickRestar);
    });

    botonSumarCantidad.forEach((botonSuma) => {
        botonSuma.addEventListener('click', clickSumar);
    });
}

function clickRestar(e) {
    const juegoEnCarritoId = Number(e.currentTarget.getAttribute("data-juego-id"));
    const juegoEnCarritoNum = carritoJuegos.find((juego) => juego.id === juegoEnCarritoId);

    if(juegoEnCarritoNum.cantidad > 1) {
        juegoEnCarritoNum.cantidad--;
        actualizarCarrito();
    }

    localStorage.setItem("carrito-juegos", JSON.stringify(carritoJuegos));
}

function clickSumar(e) {
    const juegoEnCarritoId = Number(e.currentTarget.getAttribute("data-juego-id"));
    const juegoEnCarritoNum = carritoJuegos.find((juego) => juego.id === juegoEnCarritoId);
    juegoEnCarritoNum.cantidad++;
    actualizarCarrito();

    localStorage.setItem("carrito-juegos", JSON.stringify(carritoJuegos));
}

function eliminarJuegoIndividual(e) {
    const juegoEliminadoId = Number(e.currentTarget.getAttribute("data-juego-id"));
    const juegoEliminadoNum = carritoJuegos.findIndex((juego) => juego.id === juegoEliminadoId);
    carritoJuegos.splice(juegoEliminadoNum, 1);
    actualizarCarrito();

    Swal.fire({
        icon: 'success',
        title: 'Juego eliminado del carrito exitosamente',
        toast: true,
        position: 'top-right',
        iconColor: '#A1E5F5',
        background: '#D72323',
        customClass: {
          title: 'alerta-juego-eliminado',
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    })

    localStorage.setItem("carrito-juegos", JSON.stringify(carritoJuegos));
}

function botonEliminarUpdate() {
    botonEliminar = document.querySelectorAll('.eliminar-juego');
    botonEliminar.forEach((boton) => {
        boton.addEventListener('click', eliminarJuegoIndividual);
    });
}

function eliminarCarritoEntero() {
    carritoJuegos.length = 0;
    localStorage.setItem("carrito-juegos", JSON.stringify(carritoJuegos));
    actualizarCarrito();

    Swal.fire({
        icon: 'info',
        title: 'Carrito vaciado exitosamente',
        toast: true,
        position: 'top-right',
        iconColor: '#2323D7',
        background: '#FFD700',
        customClass: {
          title: 'alerta-carrito-vacio',
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    })
}
botonVaciarCarritoEntero.addEventListener('click', eliminarCarritoEntero);

function totalCompra(carrito) {
    let totalJuegos = 0;

    for(let i = 0; i < carrito.length; i++) {
        const precioJuego = carrito[i];
        totalJuegos += precioJuego.precio * precioJuego.cantidad;
    }

    return totalJuegos;
}

//CHEQUEANDO SI HAY UN CARRITO EN EL LOCAL STORAGE Y OBTENERLO
window.addEventListener('load', () => {
    let carritoJuegosGuardado = localStorage.getItem("carrito-juegos");
    carritoJuegosGuardado = JSON.parse(carritoJuegosGuardado);

    if(carritoJuegosGuardado) {
        carritoJuegos = carritoJuegosGuardado;
        cantidadTotal.innerHTML = carritoJuegos.length;
    } else {
        carritoJuegos = [];
    }
    actualizarCarrito();
});

//REVIEWS SLIDER CONTROL
function mostrarSlideReviews(n) {
  reviewSlides[actualSlide].classList.remove('active');
  dots[actualSlide].classList.remove('active');
  actualSlide = (n + reviewSlides.length) % reviewSlides.length;
  reviewSlides[actualSlide].classList.add('active');
  dots[actualSlide].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    mostrarSlideReviews(index);
  });
});

setInterval(() => {
  mostrarSlideReviews(actualSlide + 1);
}, 6000);