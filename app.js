// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

// Funcion para limpiar el input
function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();
    // Condional para validar el nombre sin texto
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
    // Generamos un valor para sortear el nombre
    let indiceRandom = Math.floor(Math.random() * arrayAmigos.length);
    let amigoSorteado = arrayAmigos[indiceRandom];
    actualizarArray(amigoSorteado, "resultado");
    
    // Preguntamos si quiere reiniciar el juego

    setTimeout( ()=> {
        let respuesta = confirm("Deseas reiniciar el juego?");
        if (respuesta){
            reiniciarJuego();
    }
    }, 500);


}

// Funcion para reutilizar y generar un elemento li
function actualizarArray(nombre, idElemento){
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    document.getElementById(idElemento).appendChild(nuevoElemento);
}

// Funcion que resetea todo
function reiniciarJuego(){
    arrayAmigos = [];

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    limpiarInput();
}



