const dolar = 0.0053;
const euro = 0.0049;
const real = 0.027;


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

    continuar = prompt("¿Desea continuar? SI/NO").toUpperCase()

} while (continuar != "NO")








