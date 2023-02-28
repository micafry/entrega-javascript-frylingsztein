let dolar = 0.0053;
let euro = 0.0049;
let real = 0.027;


const Monedas = ['ARS', 'USD', 'BRL', 'EUR', 'MXN', 'CNY', 'PEN', 'VES', 'UYU', 'COP']
console.log(Monedas.join(" / "))
const monedasDisponibles = Monedas.slice(0, 4)
monedasDisponibles.forEach((monedaDisponible) => console.log("La moneda se encuentra disponible"))
console.log(Monedas.includes('CLP'))
console.log("------------")

function divisa(peso, moneda, valor) {
    this.peso = peso;
    this.moneda = moneda;
    this.valor = valor;
    this.convertir = function () { console.log(peso + " ARS equivale a " + valor + " " + moneda) }
}


const divisa1 = new divisa(1, "MXN", 0.094)
const divisa2 = new divisa(1, "CNY", 0.036)
const divisa3 = new divisa(1, "PEN", 0.019)
const divisa4 = new divisa(1, "VES", 0.12)
const divisa5 = new divisa(1, "UYU", 0.20)
const divisa6 = new divisa(1, "COP", 24.79)

divisa1.convertir();
divisa2.convertir();
divisa3.convertir();
divisa4.convertir();
divisa5.convertir();
divisa6.convertir();



console.log("------------")
function cambio() {
    let continuar;

    do {
        let cifra = Number(prompt("Ingresar la cifra en pesos"))
        console.log("La cifra en pesos es " + cifra);

        let moneda = prompt("Ingresar moneda a la cual desea convertir (dolar/real/euro)")


        if (moneda == "dolar") {
            resultado = cifra * dolar
            document.write(cifra + " ARS = " + resultado + " USD <br>");
        }
        else if (moneda == "euro") {
            resultado = cifra * euro
            document.write(cifra + " ARS = " + resultado + " EUR <br>");
        }
        else if (moneda == "real") {
            resultado = cifra * real
            document.write(cifra + " ARS = " + resultado + " BRL <br>");
        }

        else { document.write("No contamos con esa moneda en el conversor. Por favor ingrese una de las siguientes opciones: dolar, euro o real.") }

        console.log("La moneda elegida es " + moneda)
        console.log("El valor en " + moneda + " es " + resultado)

        continuar = prompt("¿Desea ingresar otra cifra? SI/NO").toUpperCase()

    } while (continuar != "NO")

}
cambio()





