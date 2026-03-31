const numero =5;
const NumeroDivisivel = numero % 5 === 0;

console.log(NumeroDivisivel)

if (numero === 0 ){
    console.log("O número é zero.");
} else if (numero === 5){
    console.log("O número é invalido.");
}
 else if  (NumeroDivisivel) {
    console.log("Sim");

} else  {
    console.log("Não");
}