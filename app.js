//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Indicame un numero entre 1 y 10:");

console.log(numeroUsuario);

/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //acertamos fue verdadera la condición
    alert(`Adivinaste el número. El número es: ${numeroUsuario}`);
}
else
{
    //numero equivocado presiona F5 para intentar de nuevo
    alert("Lo siento te equivocaste")}
