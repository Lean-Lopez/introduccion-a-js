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

const numeros = document.querySelectorAll("li");
let arrayNumeros = [];
for(let i = 0; i < numeros.length;i++){
    arrayNumeros.push(Number(numeros[i].textContent));
}

const $realizarCalculos = document.querySelector("#calcular");
$realizarCalculos.onclick = function(){
    document.querySelector("#resultado-1").textContent = `El número mas grande es: ${encontrarNumeroMayor(arrayNumeros)}`;
    document.querySelector("#resultado-2").textContent = `El número mas chico es: ${encontrarNumeroMenor(arrayNumeros)}`;
    document.querySelector("#resultado-3").textContent = `El promedio de los numeros es: ${calcularPromedio(arrayNumeros)}`;
    document.querySelector("#resultado-4").textContent = `El número mas repetido es: ${encontrarNumeroMasRepetido(arrayNumeros)}`;

}

