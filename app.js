// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];
let nombre = "";

function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    nombre = document.getElementById("amigo").value;
    console.log(nombre);

    if (nombre != ""){
        arrayAmigos.push(nombre);
        actualizarArray(nombre);
        limpiarInput();
    }else{
        alert("DEBES INGRESAR UN NOMBRE VALIDO!!!");
    }

    console.log(arrayAmigos.length);
}

function sortearAmigo(){

}

function actualizarArray(nombre){
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    document.getElementById("listaAmigos").appendChild(nuevoElemento);
}




