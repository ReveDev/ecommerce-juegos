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

while(elegirJuego !== "si" && elegirJuego !== "no") {
    alert("Por favor escriba si o no");
    elegirJuego = prompt("Está interesado en comprar algun juego? - Escriba si o no");
};

if(elegirJuego === "si" || elegirJuego === "SI" || elegirJuego === "Si") {
    alert("Contamos con un catálogo de 30 juegos dividido en 5 géneros que detallamos a continuación.");
    let catalogo = prompt("Desea ver el catálogo entero o filtrarlo por género o por tipo - Escriba entero, genero o tipo");
    switch(catalogo) {
        case "entero":
            let catalogoEntero = juegos.map((juego) => juego.nombre + " " + "ARS$" + juego.precio);
            alert(catalogoEntero.join(" / "));
        break;
        case "genero":
            let genero = prompt("Escriba uno de los 5 generos disponibles: accion, deportes, estrategia, aventuras o rol");
            if(genero == "accion") {
                const generoAccion = juegos.filter((juego) => juego.genero.includes("Accion"));
                const resultadoAccion = generoAccion.map((accion) => accion.nombre + " " + "ARS$" + accion.precio);
                alert("Estos son los juegos de acción disponibles: " + resultadoAccion.join(" // "));
            } else if(genero == "deportes") {
                const generoDeportes = juegos.filter((juego) => juego.genero.includes("Deportes"));
                const resultadoDeportes = generoDeportes.map((deportes) => deportes.nombre + " " + "ARS$" + deportes.precio);
                alert("Estos son los juegos de deportes disponibles: " + resultadoDeportes.join(" // "));
            } else if(genero == "estrategia") {
                const generoEstrategia = juegos.filter((juego) => juego.genero.includes("Estrategia"));
                const resultadoEstrategia = generoEstrategia.map((estrategia) => estrategia.nombre + " " + "ARS$" + estrategia.precio);
                alert("Estos son los juegos de estrategia disponibles: " + resultadoEstrategia.join(" // "));
            } else if(genero == "aventuras") {
                const generoAventuras = juegos.filter((juego) => juego.genero.includes("Aventuras"));
                const resultadoAventuras = generoAventuras.map((aventuras) => aventuras.nombre + " " + "ARS$" + aventuras.precio);
                alert("Estos son los juegos de aventuras disponibles: " + resultadoAventuras.join(" // "));
            } else if(genero == "rol") {
                const generoRol = juegos.filter((juego) => juego.genero.includes("Rol"));
                const resultadoRol = generoRol.map((rol) => rol.nombre + " " + "ARS$" + rol.precio)
                alert("Estos son los juegos de rol disponibles: " + resultadoRol.join(" // "));
            } else {
                alert("El genero ingresado no esta disponible en el catalogo");
            }
        break;
        case "tipo":
            let tipo = prompt("Escriba uno de los 10 tipos disponibles: fps, hack and slash, simulador deportivo, carreras, ciudades y asentamientos, estrategia en tiempo real, souls like, supervivencia, mundo abierto o estilo japones");
            if(tipo == "fps" || tipo == "shooter" || tipo == "first person shooter") {
                const tipoFps = juegos.filter((juego) => juego.tipo.includes("First Person Shooter"));
                const resultadoFps = tipoFps.map((fps) => fps.nombre + " " + "ARS$" + fps.precio);
                alert("Estos son los juegos de disparos en primera persona disponibles: " + resultadoFps.join(" // "));
            } else if(tipo == "hack and slash" || tipo == "hack" || tipo == "slash" || tipo == "hs") {
                const tipoHack = juegos.filter((juego) => juego.tipo.includes("Hack and Slash"));
                const resultadoHack = tipoHack.map((hack) => hack.nombre + " " + "ARS$" + hack.precio);
                alert("Estos son los juegos de hack and slash disponibles: " + resultadoHack.join(" // "));
            } else if(tipo == "simulador deportivo" || tipo == "simulador" || tipo == "deportivo") {
                const tipoDeportivo = juegos.filter((juego) => juego.tipo.includes("Simulador Deportivo"));
                const resultadoDeportivo = tipoDeportivo.map((deportivo) => deportivo.nombre + " " + "ARS$" + deportivo.precio);
                alert("Estos son los juegos de simulador deportivo disponibles: " + resultadoDeportivo.join(" // "));
            } else if(tipo == "carreras") {
                const tipoCarreras = juegos.filter((juego) => juego.tipo.includes("Carreras"));
                const resultadoCarreras = tipoCarreras.map((carreras) => carreras.nombre + " " + "ARS$" + carreras.precio);
                alert("Estos son los juegos de carreras disponibles: " + resultadoCarreras.join(" // "));
            } else if(tipo == "ciudades y asentamientos" || tipo == "ciudades" || tipo == "asentamientos") {
                const tipoCiudades = juegos.filter((juego) => juego.tipo.includes("Ciudades y Asentamientos"));
                const resultadoCiudades = tipoCiudades.map((ciudades) => ciudades.nombre + " " + "ARS$" + ciudades.precio);
                alert("Estos son los juegos de ciudades y asentamientos disponibles: " + resultadoCiudades.join(" // "));
            } else if(tipo == "estrategia en tiempo real" || tipo == "estrategia" || tipo == "tiempo real") {
                const tipoEtr = juegos.filter((juego) => juego.tipo.includes("Estrategia en Tiempo Real"));
                const resultadoEtr = tipoEtr.map((etr) => etr.nombre + " " + "ARS$" + etr.precio);
                alert("Estos son los juegos de estrategia en tiempo real disponibles: " + resultadoEtr.join(" // "));
            } else if(tipo == "souls like" || tipo == "souls") {
                const tipoSouls = juegos.filter((juego) => juego.tipo.includes("Souls Like"));
                const resultadoSouls = tipoSouls.map((souls) => souls.nombre + " " + "ARS$" + souls.precio);
                alert("Estos son los juegos estilo souls like disponibles: " + resultadoSouls.join(" // "));
            } else if(tipo == "supervivencia") {
                const tipoSuperv = juegos.filter((juego) => juego.tipo.includes("Supervivencia"));
                const resultadoSuperv = tipoSuperv.map((superv) => superv.nombre + " " + "ARS$" + superv.precio);
                alert("Estos son los juegos de supervivencia disponibles: " + resultadoSuperv.join(" // "));
            } else if(tipo == "mundo abierto" || tipo == "mundo" || tipo == "abierto") {
                const tipoMundo = juegos.filter((juego) => juego.tipo.includes("Mundo Abierto"));
                const resultadoMundo = tipoMundo.map((mundo) => mundo.nombre + " " + "ARS$" + mundo.precio);
                alert("Estos son los juegos de mundo abierto disponibles: " + resultadoMundo.join(" // "));
            } else if(tipo == "estilo japones" || tipo == "japones") {
                const tipoJapones = juegos.filter((juego) => juego.tipo.includes("Estilo Japones"));
                const resultadoJapones = tipoJapones.map((japones) => japones.nombre + " " + "ARS$" + japones.precio);
                alert("Estos son los juegos de estilo japones disponibles: " + resultadoJapones.join(" // "));
            } else {
                alert("El tipo ingresado no esta disponible en el catalogo");
            }
        break;
    };
} else if(elegirJuego === "no" || elegirJuego === "NO" || elegirJuego === "No") {
    alert("Gracias por visitar nuestra tienda. Que tenga un buen día.");
};

while (elegirJuego !== "no") {
    let juegoCarrito = Number(prompt(`Selecciona uno de los juegos disponibles:

                        1) Call of Duty® - Modern Warfare® 2
                        2) Tom Clancy's Rainbow Six® Siege
                        3) Halo: The Master Chief Collection
                        4) Devil May Cry 5
                        5) God of War
                        6) Hades
                        7) EA SPORTS™ FIFA 23
                        8) NBA 2K23
                        9) WWE 2K23
                        10) Forza Horizon 5
                        11) BeamNG.drive
                        12) Assetto Corsa Competizione
                        13) Cult of the Lamb
                        14) RimWorld
                        15) Cities: Skylines
                        16) Crusader Kings III
                        17) Age of Empires II: Definitive Edition
                        18) Total War: WARHAMMER III
                        19) Star Wars Jedi: Survivor™
                        20) Elden Ring
                        21) Sekiro™: Shadows Die Twice - GOTY Edition
                        22) Rust
                        23) Subnautica
                        24) Resident Evil 4
                        25) Hogwarts Legacy
                        26) Monster Hunter: World
                        27) New World
                        28) FINAL FANTASY VII REMAKE INTERGRADE
                        29) Persona 5 Royal
                        30) DRAGON BALL Z: KAKAROT`));
    let precioJuego = 0

    if(juegoCarrito == 1 || juegoCarrito == 2 || juegoCarrito == 3 || juegoCarrito == 4 || juegoCarrito == 5 || juegoCarrito == 6 || juegoCarrito == 7 || juegoCarrito == 8 || juegoCarrito == 9 || juegoCarrito == 10 || juegoCarrito == 11 || juegoCarrito == 12 || juegoCarrito == 13 || juegoCarrito == 14 || juegoCarrito == 15 || juegoCarrito == 16 || juegoCarrito == 17 || juegoCarrito == 18 || juegoCarrito == 19 || juegoCarrito == 20 || juegoCarrito == 21 || juegoCarrito == 22 || juegoCarrito == 23 || juegoCarrito == 24 || juegoCarrito == 25 || juegoCarrito == 26 || juegoCarrito == 27 || juegoCarrito == 28 || juegoCarrito == 29 || juegoCarrito == 30) {
        switch(juegoCarrito) {
            case 1:
                precioJuego = 6990;
            break;
            case 2:
                precioJuego = 1999;
            break;
            case 3:
                precioJuego = 3999;
            break;
            case 4:
                precioJuego = 2420;
            break;
            case 5:
                precioJuego = 8499;
            break;
            case 6:
                precioJuego = 1750;
            break;
            case 7:
                precioJuego = 8999;
            break;
            case 8:
                precioJuego = 6999;
            break;
            case 9:
                precioJuego = 7999;
            break;
            case 10:
                precioJuego = 5999;
            break;
            case 11:
                precioJuego = 1750;
            break;
            case 12:
                precioJuego = 1499;
            break;
            case 13:
                precioJuego = 1199;
            break;
            case 14:
                precioJuego = 2100;
            break;
            case 15:
                precioJuego = 2100;
            break;
            case 16:
                precioJuego = 3200;
            break;
            case 17:
                precioJuego = 1999;
            break;
            case 18:
                precioJuego = 7999;
            break;
            case 19:
                precioJuego = 8999;
            break;
            case 20:
                precioJuego = 8599;
            break;
            case 21:
                precioJuego = 1299;
            break;
            case 22:
                precioJuego = 2440;
            break;
            case 23:
                precioJuego = 1499;
            break;
            case 24:
                precioJuego = 12958;
            break;
            case 25:
                precioJuego = 8599;
            break;
            case 26:
                precioJuego = 2420;
            break;
            case 27:
                precioJuego = 2600;
            break;
            case 28:
                precioJuego = 7700;
            break;
            case 29:
                precioJuego = 7999;
            break;
            case 30:
                precioJuego = 7119;
            break;
        };

        let cantUnidades = Number(prompt("Cuantas unidades del juego quiere agregar?"));

        carroCompras.push({juegoCarrito, cantUnidades, precioJuego});
    } else {
        alert("El juego ingresado no se encuentra disponible en la tienda.");
    };

    elegirJuego = prompt("Desea seguir agregando juegos a tu carrito?");

    while(elegirJuego === "no") {
        alert("Gracias por su compra. Que disfrute sus nuevos juegos.");

        carroCompras.forEach((juegosTotal) => {
            alert(`Su carrito tiene:
                Juego: ${juegosTotal.juegoCarrito}
                Cantidad: ${juegosTotal.cantUnidades}
                Total por juego: ${juegosTotal.cantUnidades * juegosTotal.precioJuego}`)
        });
    break;
    }
}

const totalCompra = carroCompras.reduce((acc, total) => acc + total.precioJuego * total.cantUnidades, 0);

alert(`El total de tu compra es de ARS$ ${totalCompra.toLocaleString()}`);