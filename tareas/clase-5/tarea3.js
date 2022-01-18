function convertirSegundosAMinutos(segundos){
    let minutos = 0;
    
    while(segundos >= 60) {
        minutos++;
        segundos = segundos - 60;
    }
    return minutos;
}

function convertirMinutosAHoras(minutos) {
    let horas = 0;
    
    while(minutos >= 60){
        horas++;
        minutos = minutos - 60;
    }
    return horas;
}

const $calcularTiempoTotal = document.querySelector("#calcular-tiempo-total");

$calcularTiempoTotal.onclick = function() {

    const horasClases = document.querySelectorAll(".horas-clase");
    let horasTotales = 0;
    for(let i = 0; i< horasClases.length; i++) {
        horasTotales += Number(horasClases[i].value);
    }

    const minutosClases = document.querySelectorAll(".minutos-clase");
    let minutosTotales = 0;
    for(let i = 0; i < horasClases.length; i++){
        if(minutosTotales >= 60){
            horasTotales++;
            minutosTotales -= 60;
        }
        minutosTotales += Number(minutosClases[i].value)
    }

    const segundosClases = document.querySelectorAll(".segundos-clase");
    let segundosTotales = 0;
    for(let i = 0; i < segundosClases.length; i++){
        if(segundosTotales >= 60){
            minutosTotales++;
            segundosTotales -= 60;
        }
        segundosTotales += Number(segundosClases[i].value);
    }
    

    const textoResultado = document.querySelector("#resultado");
    textoResultado.textContent = `Horas totales: ${horasTotales} || Minutos totales: ${minutosTotales} || Segundos totales: ${segundosTotales}`;
}
