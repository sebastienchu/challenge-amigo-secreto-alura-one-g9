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
// funcion que realiza el sorteo
function sortearAmigo() {
    // implementacion del amigo aleatorio con el math random y math floor
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El amigo sorteado es:${amigoSorteado}`;
    //Validar que el array no esté vacío
    if (amigos.length === 0) { 
    alert('debe ingresar amigos para sortear')
    document.getElementById("resultado").innerHTML = "No hay amigos en la lista para sortear.";
    return;
}
    
}
sortearAmigo();
