function encontrarNumeroMayor(array){
    let numeroMayor = array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i] > numeroMayor){
            numeroMayor = array[i];
        }
    }
    return numeroMayor;
}

