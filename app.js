// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre !== ""){
        arrayAmigos.push(nombre);
        actualizarArray(nombre, "listaAmigos");
        limpiarInput();
    }else{
        alert("DEBES INGRESAR UN NOMBRE VALIDO!!!");
    }
}

function sortearAmigo(){
    if (arrayAmigos.length === 0){
        alert("No hay ningun amigo para sortear");
        return;
    }

    let indiceRandom = Math.floor(Math.random() * arrayAmigos.length);
    let amigoSorteado = arrayAmigos[indiceRandom];
    actualizarArray(amigoSorteado, "resultado");
    

}

function actualizarArray(nombre, idElemento){
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    document.getElementById(idElemento).appendChild(nuevoElemento);
}




