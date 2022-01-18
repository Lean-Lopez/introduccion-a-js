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

