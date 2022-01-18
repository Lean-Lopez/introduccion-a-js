function encontrarNumeroMayor(array){
    let numeroMayor = array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i] > numeroMayor){
            numeroMayor = array[i];
        }
    }
    return numeroMayor;
}

function encontrarNumeroMenor(array){
    let numeroMenor = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < numeroMenor){
            numeroMenor = array[i];
        }
    }
    return numeroMenor;
}

function calcularPromedio(array){
    let sumatoria = 0;

    for(let i = 0; i < array.length; i++){
        sumatoria += array[i];
    }
    return sumatoria/array.length;
}

function encontrarNumeroMasRepetido(array){
    
    let numeroRepetido;
    let contadorRepeticiones;
    let contadorMaximasRepeticiones = 0;

    for(let i = 0; i < array.length; i++) {
        contadorRepeticiones = 0;
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                contadorRepeticiones++;
            }
            if(contadorRepeticiones > contadorMaximasRepeticiones){
                contadorMaximasRepeticiones = contadorRepeticiones;
                numeroRepetido = array[i];
            }
        }
        return numeroRepetido;
    }
}

