function calcularIMC(Peso, Altura) {
    return Peso /Math.pow (Altura, 2);
}

function classificarIMC(IMC) {

if (IMC < 18.5) {
    return ("Abaixo do peso");
} else if (IMC < 25) {
    return ("Peso normal");
} else if (IMC < 30) {
    return ("Sobrepeso");
} else if (IMC < 35) {
    return ("Obesidade grau I");
}

}


function main() {


const Peso = 79; // em kg
const Altura = 1.75; // em metros
const IMC = calcularIMC(Peso, Altura);
console.log(classificarIMC(IMC));

}


main();