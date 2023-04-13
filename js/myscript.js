const km = parseInt(prompt("inserire i chilometri che si vogliono percorrere"));
const age = parseInt(prompt("inserire la tua età"));

let biglietto = (0,21 * km);
let bigliettoScontatoU18 = biglietto - (biglietto * 20 / 100);
let bigliettoScontatoO65 = biglietto - (biglietto * 40 / 100);


if (age < 18) {
    console.log(bigliettoScontatoU18);
} 
   
if (age > 65) {
    console.log(bigliettoScontatoO65);
} 

if (age >= 18 || age <= 64) {
    console.log(biglietto);
}

document.getElementById("biglietto").innerHTML = biglietto
document.getElementById("biglietto").innerHTML = bigliettoScontatoU18
document.getElementById("biglietto").innerHTML = bigliettoScontatoO65