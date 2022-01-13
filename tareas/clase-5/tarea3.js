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
    
    const segundosClase1 = Number(document.querySelector("#segundos-clase-1").value);
    const segundosClase2 = Number(document.querySelector("#segundos-clase-2").value);
    const segundosClase3 = Number(document.querySelector("#segundos-clase-3").value);
    const segundosClase4 = Number(document.querySelector("#segundos-clase-4").value);
    const segundosClase5 = Number(document.querySelector("#segundos-clase-5").value);

    let segundosTotales = segundosClase1 + segundosClase2 + segundosClase3 + segundosClase4 + segundosClase5;
    
    const segundosTotalesConvertidosAMinutos = convertirSegundosAMinutos(segundosTotales);
    minutosTotales += segundosTotalesConvertidosAMinutos;
    segundosTotales = segundosTotales - segundosTotalesConvertidosAMinutos * 60;

    const minutosTotalesConvertidosAHoras = convertirMinutosAHoras(minutosTotales);
    horasTotales += minutosTotalesConvertidosAHoras;
    minutosTotales = minutosTotales - minutosTotalesConvertidosAHoras * 60;

    document.querySelector("#resultado").textContent = `Horas Totales = ${horasTotales} | Minutos Totales = ${minutosTotales} | Segundos Totales = ${segundosTotales}`;
}
