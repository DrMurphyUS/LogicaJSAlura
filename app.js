//Variables
let numeroMaximoPosible = 100
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while(numeroUsuario != numeroSecreto){
    //parseInt convierte a entero
    numeroUsuario = parseInt(prompt(`Indicame un numero entre 1 y ${numeroMaximoPosible} , recuerda tienes ${maximosIntentos} intentos:`));
    //typeof nos dice el tupo
    console.log(typeof(numeroUsuario));

    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //acertamos fue verdadera la condición
        alert(`Adivinaste el número. El número es: ${numeroUsuario} , lo hiciste en ${intentos} ${intentos == 1 ? 'vez' :'veces'}`);
    }
    else
    {
        if (numeroUsuario > numeroSecreto){
        //numero equivocado presiona F5 para intentar de nuevo
        alert("El número secreto es menor");
        }else{
            alert("El numero secreto es mayor");
        }
        //incrementando cuando el contador no acierta
        intentos ++;
        //palabraVeces ='veces';
        if (intentos > maximosIntentos){
            alert(`Llegaste al número maximo de intentos de ${maximosIntentos}`);
            break;
        }
    }
}