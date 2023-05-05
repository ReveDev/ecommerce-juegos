let usuario = prompt("Ingresa tu nombre");

function saludar(nombre) {
    alert("Hola " + nombre + " bienvenido a Revein Games.");
}
saludar(usuario);

const juegos = [
    {
        id: 0,
        nombre: "Call of Duty® - Modern Warfare® 2",
        genero: "Accion",
        tipo: "First Person Shooter",
        precio: 6990,
    },
    {
        id: 1,
        nombre: "Tom Clancy's Rainbow Six® Siege",
        genero: "Accion",
        tipo: "First Person Shooter",
        precio: 1999,
    },
    {
        id: 2,
        nombre: "Halo: The Master Chief Collection",
        genero: "Accion",
        tipo: "First Person Shooter",
        precio: 3999,
    },
    {
        id: 3,
        nombre: "Devil May Cry 5",
        genero: "Accion",
        tipo: "Hack and Slash",
        precio: 2420, 
    },
    {
        id: 4,
        nombre: "God of War",
        genero: "Accion",
        tipo: "Hack and Slash",
        precio: 8499,
    },
    {
        id: 5,
        nombre: "Hades",
        genero: "Accion",
        tipo: "Hack and Slash",
        precio: 1750,
    },
    {
        id: 6,
        nombre: "EA SPORTS™ FIFA 23",
        genero: "Deportes",
        tipo: "Simulador Deportivo",
        precio: 8999,
    },
    {
        id: 7,
        nombre: "NBA 2K23",
        genero: "Deportes",
        tipo: "Simulador Deportivo",
        precio: 6999,
    },
    {
        id: 8,
        nombre: "WWE 2K23",
        genero: "Deportes",
        tipo: "Simulador Deportivo",
        precio: 7999,
    },
    {
        id: 9,
        nombre: "Forza Horizon 5",
        genero: "Deportes",
        tipo: "Carreras",
        precio: 5999,
    },
    {
        id: 10,
        nombre: "BeamNG.drive",
        genero: "Deportes",
        tipo: "Carreras",
        precio: 1750,
    },
    {
        id: 11,
        nombre: "Assetto Corsa Competizione",
        genero: "Deportes",
        tipo: "Carreras",
        precio: 1499,
    },
    {
        id: 12,
        nombre: "Cult of the Lamb",
        genero: "Estrategia",
        tipo: "Ciudades y Asentamientos",
        precio: 1199,
    },
    {
        id: 13,
        nombre: "RimWorld",
        genero: "Estrategia",
        tipo: "Ciudades y Asentamientos",
        precio: 2100,
    },
    {
        id: 14,
        nombre: "Cities: Skylines",
        genero: "Estrategia",
        tipo: "Ciudades y Asentamientos",
        precio: 2100,
    },
    {
        id: 15,
        nombre: "Crusader Kings III",
        genero: "Estrategia",
        tipo: "Estrategia en Tiempo Real",
        precio: 3200,
    },
    {
        id: 16,
        nombre: "Age of Empires II: Definitive Edition",
        genero: "Estrategia",
        tipo: "Estrategia en Tiempo Real",
        precio: 1999,
    },
    {
        id: 17,
        nombre: "Total War: WARHAMMER III",
        genero: "Estrategia",
        tipo: "Estrategia en Tiempo Real",
        precio: 7999,
    },
    {
        id: 18,
        nombre: "STAR WARS Jedi: Survivor™",
        genero: "Aventuras",
        tipo: "Souls Like",
        precio: 8999,
    },
    {
        id: 19,
        nombre: "Elden Ring",
        genero: "Aventuras",
        tipo: "Souls Like",
        precio: 8599,
    },
    {
        id: 20,
        nombre: "Sekiro™: Shadows Die Twice - GOTY Edition",
        genero: "Aventuras",
        tipo: "Souls Like",
        precio: 1299,
    },
    {
        id: 21,
        nombre: "Rust",
        genero: "Aventuras",
        tipo: "Supervivencia",
        precio: 2440,
    },
    {
        id: 22,
        nombre: "Subnautica",
        genero: "Aventuras",
        tipo: "Supervivencia",
        precio: 1499,
    },
    {
        id: 23,
        nombre: "Resident Evil 4",
        genero: "Aventuras",
        tipo: "Supervivencia",
        precio: 12958,
    },
    {
        id: 24,
        nombre: "Hogwarts Legacy",
        genero: "Rol",
        tipo: "Mundo Abierto",
        precio: 8599,
    },
    {
        id: 25,
        nombre: "Monster Hunter: World",
        genero: "Rol",
        tipo: "Mundo Abierto",
        precio: 2420,
    },
    {
        id: 26,
        nombre: "New World",
        genero: "Rol",
        tipo: "Mundo Abierto",
        precio: 2600,
    },
    {
        id: 27,
        nombre: "FINAL FANTASY VII REMAKE INTERGRADE",
        genero: "Rol",
        tipo: "Estilo Japones",
        precio: 7700,
    },
    {
        id: 28,
        nombre: "Persona 5 Royal",
        genero: "Rol",
        tipo: "Estilo Japones",
        precio: 7999,
    },
    {
        id: 29,
        nombre: "DRAGON BALL Z: KAKAROT",
        genero: "Rol",
        tipo: "Estilo Japones",
        precio: 7119,
    },
];

let carroCompras = [];

let elegirJuego = prompt("Está interesado en comprar algun juego? - Escriba si o no");

while(elegirJuego != "si" && elegirJuego != "no") {
    alert("Escriba si o no");
    elegirJuego = prompt("Para conocer nuestro catalogo de juegos escriba aceptar - Para finalizar el proceso escriba terminar");
};

if(elegirJuego == "aceptar" || elegirJuego == "ACEPTAR" || elegirJuego == "Aceptar") {
    alert("Contamos con un catálogo de 30 juegos dividido en 5 géneros que detallamos a continuación.");
    let catalogo = prompt("Desea ver el catálogo entero o filtrarlo por género o por tipo - Escriba entero, genero o tipo");
    switch(catalogo) {
        case "entero":
            let catalogoEntero = juegos.map((juego) => juego.nombre + " " + "ARS$" + juego.precio);
            alert(catalogoEntero.join(" / "));
        break;

    }
}