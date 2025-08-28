//En este array se almacenaran los nombres
const amigos =[];

function agregarAmigo(){
    //capturar el valor del campo de entrada
    const inputElement = document.getElementById('amigo');
    const nombreAmigo = inputElement.value.trim();
    //validar la entrada
    if (nombreAmigo ===''){
        alert('Inserte un nombre');
        return;
    }
    //actualizar la lista
    amigos.push(nombreAmigo);
    //mostrar la lista de amigos
    console.log('Amigos actuales:', amigos);
    //limpiar el campo de entrada
    inputElement.value ='';
    actualizarListaAmigos();
};

function actualizarListaAmigos(){
    //obtener el elemento de la lista HTML
    const listaHTML = document.getElementById('listaAmigos');
    //limpiar la lista existente antes de agregar nuevos elementos
    listaHTML.innerHTML ='';
    //iterar sobre el arreglo
    amigos.forEach(nombre =>{
        //crear un nuevo elemento de lista <li> para cada amigo
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombre;
        //Agregar el nuevo elemento a la lista HTML
        listaHTML.apprendChild(nuevoElemento);    
    });
};

function sortearAmigo(){
    //Validar que haya amigos disponibles
    if(amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    //Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    //Mostrar el resultado 
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.textContent = amigoSorteado;
}