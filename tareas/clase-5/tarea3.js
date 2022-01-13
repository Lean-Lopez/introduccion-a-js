function convertirSegundosAMinutos(segundos){
    let minutos = 0;
    
    while(segundos > 60){
        minutos++;
        segundos = segundos - 60;
    }
    return minutos;
}

function convertirMinutosAHoras(minutos) {
    let horas = 0;

    while(minutos > 60) {
        horas++;
        minutos = minutos - 60;
    }
    return horas;
}

const $calcularTiempoTotal = document.querySelector("#calcular-tiempo-total");

$calcularTiempoTotal.onclick = function() {
    
