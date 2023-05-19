const juegos = [
    {
        id: 0,
        nombre: "Call of Duty® - Modern Warfare® 2",
        portada: "./img/webimages/games/codmw2.webp",
        genero: "Accion",
        tipo: "First Person Shooter",
        precio: 6990,
    },
    {
        id: 1,
        nombre: "Tom Clancy's Rainbow Six® Siege",
        portada: "./img/webimages/games/tcrss.webp",
        genero: "Accion",
        tipo: "First Person Shooter",
        precio: 1999,
    },
    {
        id: 2,
        nombre: "Halo: The Master Chief Collection",
        portada: "./img/webimages/games/htmcc.webp",
        genero: "Accion",
        tipo: "First Person Shooter",
        precio: 3999,
    },
    {
        id: 3,
        nombre: "Devil May Cry 5",
        portada: "./img/webimages/games/dmc5.webp",
        genero: "Accion",
        tipo: "Hack and Slash",
        precio: 2420, 
    },
    {
        id: 4,
        nombre: "God of War",
        portada: "./img/webimages/games/gow.webp",
        genero: "Accion",
        tipo: "Hack and Slash",
        precio: 8499,
    },
    {
        id: 5,
        nombre: "Hades",
        portada: "./img/webimages/games/hades.webp",
        genero: "Accion",
        tipo: "Hack and Slash",
        precio: 1750,
    },
    {
        id: 6,
        nombre: "EA SPORTS™ FIFA 23",
        portada: "./img/webimages/games/f23.webp",
        genero: "Deportes",
        tipo: "Simulador Deportivo",
        precio: 8999,
    },
    {
        id: 7,
        nombre: "NBA 2K23",
        portada: "./img/webimages/games/nba2k23.webp",
        genero: "Deportes",
        tipo: "Simulador Deportivo",
        precio: 6999,
    },
    {
        id: 8,
        nombre: "WWE 2K23",
        portada: "./img/webimages/games/wwe2k23.webp",
        genero: "Deportes",
        tipo: "Simulador Deportivo",
        precio: 7999,
    },
    {
        id: 9,
        nombre: "Forza Horizon 5",
        portada: "./img/webimages/games/fh5.webp",
        genero: "Deportes",
        tipo: "Carreras",
        precio: 5999,
    },
    {
        id: 10,
        nombre: "BeamNG.drive",
        portada: "./img/webimages/games/bngd.webp",
        genero: "Deportes",
        tipo: "Carreras",
        precio: 1750,
    },
    {
        id: 11,
        nombre: "Assetto Corsa Competizione",
        portada: "./img/webimages/games/acc.webp",
        genero: "Deportes",
        tipo: "Carreras",
        precio: 1499,
    },
    {
        id: 12,
        nombre: "Cult of the Lamb",
        portada: "./img/webimages/games/cotl.webp",
        genero: "Estrategia",
        tipo: "Ciudades y Asentamientos",
        precio: 1199,
    },
    {
        id: 13,
        nombre: "RimWorld",
        portada: "./img/webimages/games/rw.webp",
        genero: "Estrategia",
        tipo: "Ciudades y Asentamientos",
        precio: 2100,
    },
    {
        id: 14,
        nombre: "Cities: Skylines",
        portada: "./img/webimages/games/cs.webp",
        genero: "Estrategia",
        tipo: "Ciudades y Asentamientos",
        precio: 2100,
    },
    {
        id: 15,
        nombre: "Crusader Kings III",
        portada: "./img/webimages/games/ck3.webp",
        genero: "Estrategia",
        tipo: "Estrategia en Tiempo Real",
        precio: 3200,
    },
    {
        id: 16,
        nombre: "Age of Empires II: Definitive Edition",
        portada: "./img/webimages/games/aoe2de.webp",
        genero: "Estrategia",
        tipo: "Estrategia en Tiempo Real",
        precio: 1999,
    },
    {
        id: 17,
        nombre: "Total War: WARHAMMER III",
        portada: "./img/webimages/games/tww3.webp",
        genero: "Estrategia",
        tipo: "Estrategia en Tiempo Real",
        precio: 7999,
    },
    {
        id: 18,
        nombre: "STAR WARS Jedi: Survivor™",
        portada: "./img/webimages/games/swjs.webp",
        genero: "Aventuras",
        tipo: "Souls Like",
        precio: 8999,
    },
    {
        id: 19,
        nombre: "Elden Ring",
        portada: "./img/webimages/games/er.webp",
        genero: "Aventuras",
        tipo: "Souls Like",
        precio: 8599,
    },
    {
        id: 20,
        nombre: "Sekiro™: Shadows Die Twice",
        portada: "./img/webimages/games/ssdwgoty.webp",
        genero: "Aventuras",
        tipo: "Souls Like",
        precio: 1299,
    },
    {
        id: 21,
        nombre: "Rust",
        portada: "./img/webimages/games/rust.webp",
        genero: "Aventuras",
        tipo: "Supervivencia",
        precio: 2440,
    },
    {
        id: 22,
        nombre: "Subnautica",
        portada: "./img/webimages/games/sn.webp",
        genero: "Aventuras",
        tipo: "Supervivencia",
        precio: 1499,
    },
    {
        id: 23,
        nombre: "Resident Evil 4",
        portada: "./img/webimages/games/re4r.webp",
        genero: "Aventuras",
        tipo: "Supervivencia",
        precio: 12958,
    },
    {
        id: 24,
        nombre: "Hogwarts Legacy",
        portada: "./img/webimages/games/hl.webp",
        genero: "Rol",
        tipo: "Mundo Abierto",
        precio: 8599,
    },
    {
        id: 25,
        nombre: "Monster Hunter: World",
        portada: "./img/webimages/games/mhw.webp",
        genero: "Rol",
        tipo: "Mundo Abierto",
        precio: 2420,
    },
    {
        id: 26,
        nombre: "New World",
        portada: "./img/webimages/games/nw.webp",
        genero: "Rol",
        tipo: "Mundo Abierto",
        precio: 2600,
    },
    {
        id: 27,
        nombre: "FINAL FANTASY VII REMAKE INTERGRADE",
        portada: "./img/webimages/games/ff7ri.webp",
        genero: "Rol",
        tipo: "Estilo Japones",
        precio: 7700,
    },
    {
        id: 28,
        nombre: "Persona 5 Royal",
        portada: "./img/webimages/games/p5r.webp",
        genero: "Rol",
        tipo: "Estilo Japones",
        precio: 7999,
    },
    {
        id: 29,
        nombre: "DRAGON BALL Z: KAKAROT",
        portada: "./img/webimages/games/dbzk.webp",
        genero: "Rol",
        tipo: "Estilo Japones",
        precio: 7119,
    },
];

let carroCompras = [];

// CARGA DE JUEGOS AL HTML
const juegosContainer = document.querySelector('.juegos-container');

function ingresarJuegos() {
    juegos.forEach(juego => {
        const div = document.createElement("div");
        div.classList.add("juego");
        div.innerHTML = `
        <img src="${juego.portada}" alt="${juego.nombre}">
        <div class="info-juego">
            <h2>${juego.nombre}</h2>
            <p>ARS$ ${(juego.precio).toLocaleString()}</p>
            <button class="boton-favoritos"><i class="fa-solid fa-heart-circle-plus fa-sm"></i></button>
            <button class="boton-compra"><i class="fa-solid fa-cart-plus fa-sm"></i></button>
        </div> `

        juegosContainer.append(div);
    });
}
ingresarJuegos();

//JUEGOS CAROUSEL CONTROL
const carouselSlide = document.querySelectorAll('.slide');
const controlCarousel = document.querySelectorAll('.control-carousel');
let carouselIndex = 0;
mostrarSlide(carouselIndex);

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
  carouselSlide[carouselIndex-1].style.display = "block";

  for(i = 0; i < controlCarousel.length; i++) {
    controlCarousel[i].className = controlCarousel[i].className.replace(" active", "");
  }
  controlCarousel[carouselIndex-1].className += " active";
}

controlCarousel.forEach((lines, index) => {
  lines.addEventListener('click', () => {
    actualCarousel(index);
  });
});

setInterval(() => {
  mostrarSlide();
}, 5000);

// REVIEWS SLIDER CONTROL
const reviewSlides = document.querySelectorAll('.reviews-article');
const dots = document.querySelectorAll('.dot');
let actualSlide = 0;

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