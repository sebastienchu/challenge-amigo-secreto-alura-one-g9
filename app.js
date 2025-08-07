// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// crear un array aqui hice la lista vacia
let amigos = [];

// implementacion de la funcion para agregar amigos a la lista
function agregarAmigo(){
    // captura la informacion ingresada por el usuario
    let amigosDelUsuario = document.getElementById('amigo').value;
    // valida que el campo no este en blanco
    if (amigosDelUsuario === "") {
            alert('Por favor, inserte un nombre.');
        } else {
            //se cumple la condicion y se añade el nombre a la lista 
            amigos.push(amigosDelUsuario);
        }
        
        actualizarListaAmigos();
        limpiarCampo ();
        
        return;        
    }
// funcion para limpiar el campo de entrada  y dejar listo para agregar mas nombres
function limpiarCampo() {
    document.getElementById('amigo').value = '';
    return;
}
// funcion que genera la lista de amigos a sortear
function actualizarListaAmigos(){
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        let listado = document.createElement('li');
        listado.innerHTML = amigos[i];
        listaDeAmigos.appendChild(listado);
        document.getElementById('amigo').value = "";
    }

    
}
