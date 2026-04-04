
nota1 = 7.5;
nota2 = 5.0;
nota3 = 4.0;




Media = (nota1 + nota2 + nota3) / 3;
console.log("A média das notas é: " + Media.toFixed(2));
if (Media >= 7) {
    console.log("Aprovado");
} else if (Media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}