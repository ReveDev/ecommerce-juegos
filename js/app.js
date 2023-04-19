let usuario = prompt("Ingresa tu nombre");
let juego = "";
let cantCod = 0;
let cantFifa = 0;
let cantRdr = 0;
let cantRe = 0;
let cantSw = 0;
let total = 0;
let cantCuotas = 0;
let medioPago = 0;
const PRECIOCOD = 6990;
const PRECIOFIFA = 8999;
const PRECIORDR = 11299;
const PRECIORE = 12958;
const PRECIOSW = 8999;
const INT6 = 1.25;
const INT12 = 1.60;

function saludar(nombre) {
    alert("Hola " + nombre + " bienvenido a Revein Games.");
}
saludar(usuario);

while(true) {
    juego = prompt(`Selecciona uno de los juegos disponibles:

            1) Call of Duty® - Modern Warfare® 2
            2) EA Sports™ Fifa 23
            3) Red Dead Redemption 2
            4) Resident Evil 4 - Remake
            5) Star Wars Jedi: Survivor™
            
            Escriba "Terminar" para finalizar la compra.`);

    if (juego == "Terminar" || juego == "terminar") {
        alert("Gracias por comprar.")
        break;
    } else if (juego == "call of duty" || juego == "cod" || juego == "modern warfare" || juego == "1") {
        alert("Call of Duty® - Modern Warfare® 2 agregado con éxito al carrito.");
        total = total + PRECIOCOD;
        cantCod = cantCod + 1;
    } else if (juego == "fifa 23" || juego == "fifa" || juego == "2") {
        alert("EA Sports™ Fifa 23 agregado con éxito al carrito.");
        total = total + PRECIOFIFA;
        cantFifa = cantFifa + 1;
    } else if (juego == "red dead" || juego == "red dead redemption 2" || juego == "rdr" || juego == "3") {
        alert("Red Dead Redemption 2 agregado con éxito al carrito.");
        total = total + PRECIORDR;
        cantRdr = cantRdr + 1;
    } else if (juego == "resident evil" || juego == "re4" || juego == "resident evil 4" || juego == "4") {
        alert("Resident Evil 4 - Remake agregado con éxito al carrito.");
        total = total + PRECIORE;
        cantRe = cantRe + 1;
    } else if (juego == "star wars" || juego == "jedi survivor" || juego == "star wars jedi survivor" || juego == "5") {
        alert("Star Wars Jedi: Survivor™ agregado con éxito al carrito.");
        total = total + PRECIOSW;
        cantSw = cantSw + 1;
    } else {
        alert("El juego ingresado no se encuentra disponible en la tienda.");
        continue;
    }
}

function comprar() {
    alert(`Tu carrito tiene:

                    Call of Duty® - Modern Warfare® 2 x ${cantCod}
                    EA Sports™ Fifa 23 x ${cantFifa}
                    Red Dead Redemption 2 x ${cantRdr}
                    Resident Evil 4 - Remake x ${cantRe}
                    Star Wars Jedi: Survivor™ x ${cantSw}
            
                    El total es de ARS$ ${total.toLocaleString()}`);

    while(total != 0) {
        medioPago = prompt(`Medios de pago disponibles:

                    1) Tarjeta de Crédito
                    2) Efectivo
                    3) Transferencia Bancaria`);
        
        if(medioPago == "tarjeta" || medioPago == "visa" || medioPago == "master" || medioPago == "1") {
            alert("Has seleccionado tarjeta de crédito. Aceptamos Visa, Master, Amex, Cabal y Naranja.");

            cantCuotas = prompt(`Ingrese en cuantas cuotas hará el pago:
            
                            1 cuota sin interes
                            3 cuotas sin intereses
                            6 cuotas - intereses del 25%
                            12 cuotas - intereses del 60%`);

            switch(cantCuotas) {
                case "1":
                    alert(`Has seleccionado 1 cuota. El total es de ARS$ ${total.toLocaleString()}.`);
                    break;
                case "3":
                    alert(`Has seleccionado 3 cuotas. El total es de ARS$ ${total.toLocaleString()}. A pagar en 3 cuotas de ARS$ ${(total / cantCuotas).toFixed(2).toLocaleString()}.`);
                    break;
                case "6":
                    alert(`Has seleccionado 6 cuotas. El total es de ARS$ ${(total * INT6).toFixed(2).toLocaleString()}. A pagar en 6 cuotas de ARS$ ${((total * INT6) / cantCuotas).toFixed(2).toLocaleString()}.`);
                    break;
                case "12":
                    alert(`Has seleccionado 12 cuotas. El total es de ARS$ ${(total * INT12).toFixed(2).toLocaleString()}. A pagar en 12 cuotas de ARS$ ${((total * INT12) / cantCuotas).toFixed(2).toLocaleString()}.`);
                    break;
                default:
                    alert("La cantidad de cuotas ingresada es inválida.");
                    continue;
            } 
        } else if(medioPago == "efectivo" || medioPago == "2") {
            alert(`Has seleccionado efectivo. El total es de ARS$ ${total.toLocaleString()}.`);
            alert("Finalizada la compra se te enviará por mail una boleta para abonar en tu Rapipago o PagoFacil más cercano. Una vez se nos acredite el pago, te será enviada por mail la clave para ingresar en Steam y obtener tu juego.");
        } else if (medioPago == "transferencia" || medioPago == "transfer" || medioPago == "3") {
            alert(`Has seleccionado transferencia. El total es de ARS$ ${total.toLocaleString()}.`);
            alert("Finalizada la compra se te enviará por mail los datos bancarios para realizar la transferencia a nuestra cuenta en Banco BBVA o a nuestra cuenta en MercadoPago. Una vez se nos acredite el pago, te será enviada por mail la clave para ingresar en Steam y obtener tu juego.");
        } else {
            alert("El medio de pago ingresado es inválido, ingrese el número correcto.");
            continue;
        }

        break;
    } 
}
comprar();