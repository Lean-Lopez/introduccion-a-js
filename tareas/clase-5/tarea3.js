function convertirSegundosAMinutos(segundos){
    let resultado = 0;
    
    while(segundos > 60){
        resultado ++;
        segundos = segundos - 60;
    }
    return resultado;
}