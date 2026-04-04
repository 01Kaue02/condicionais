PrecoGasolina = 5.50;
PrecoEtanol = 4.00;
LitroMedioEtanol = 10;
LitroMedioGasolina = 15;
Distancia = 100;
tipoComubustivel = 'Gasolina';
if (tipoComubustivel === 'Etanol') {
    GastoTotal = (Distancia / LitroMedioEtanol) * PrecoEtanol;
    console.log("O gasto total para percorrer com " + Distancia + " km usando " + "o " + tipoComubustivel + " é: R$ " + GastoTotal.toFixed(2));
}
else {

    GastoTotal = (Distancia / LitroMedioGasolina) * PrecoGasolina;
    console.log("O gasto total para percorrer com " + Distancia + " km usando " + "o " + tipoComubustivel + " é: R$ " + GastoTotal.toFixed(2));

}