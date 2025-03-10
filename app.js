//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Indicame un numero entre 1 y 10:");

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
        if (numeroUsuario > numeroSecreto){
        //numero equivocado presiona F5 para intentar de nuevo
        alert("El número secreto es menor");
        }else{
            alert("El numero secreto es mayor");
        }
    }
}