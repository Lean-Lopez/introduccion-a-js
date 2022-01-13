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
    
    const horasClase1 = Number(document.querySelector("#horas-clase-1").value);
    const horasClase2 = Number(document.querySelector("#horas-clase-2").value);
    const horasClase3 = Number(document.querySelector("#horas-clase-3").value);
    const horasClase4 = Number(document.querySelector("#horas-clase-4").value);
    const horasClase5 = Number(document.querySelector("#horas-clase-5").value);

    let horasTotales = horasClase1 + horasClase2 + horasClase3 + horasClase4+ horasClase5;
    
    const minutosClase1 = Number(document.querySelector("#minutos-clase-1").value);
    const minutosClase2 = Number(document.querySelector("#minutos-clase-2").value);
    const minutosClase3 = Number(document.querySelector("#minutos-clase-3").value);
    const minutosClase4 = Number(document.querySelector("#minutos-clase-4").value);
    const minutosClase5 = Number(document.querySelector("#minutos-clase-5").value);

    let minutosTotales = minutosClase1 + minutosClase2 + minutosClase3 + minutosClase4 + minutosClase5;