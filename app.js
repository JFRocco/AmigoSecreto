// En este array se almacenarán los nombres
let amigos = [];

// Se obtienen los elementos del HTML
const inputElement = document.getElementById('amigo');
const listaHTML = document.getElementById('listaAmigos');
const resultadoHTML = document.getElementById('resultado');

// Funcion para agregar amigos
function agregarAmigo() {
  const nombreAmigo = inputElement.value.trim();

  // Validar la entrada
  if (nombreAmigo === '') {
    alert('Por favor, inserte un nombre.');
    inputElement.focus();
    return;
  }

  // Agregar amigo al array
  amigos.push(nombreAmigo);
  console.log(`¡Amigo "${nombreAmigo}" agregado con éxito!`);

  // Actualizar la lista en pantalla y limpiar el input
  actualizarListaAmigos();
  inputElement.value = '';
}

// Función para actualizar la lista de amigos en pantalla
function actualizarListaAmigos() {
  // Limpiar la lista existente antes de agregar nuevos elementos
  listaHTML.innerHTML = '';
  
  // Iterar sobre el arreglo
  amigos.forEach(nombre => {
    // Crear un nuevo elemento de lista <li> para cada amigo
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    
    // Agregar el nuevo elemento a la lista HTML
    listaHTML.appendChild(nuevoElemento); // <-- Corrección aquí
  });

  // Mostrar la lista de amigos en la consola
  console.log('Amigos actuales:', amigos);
}

// Función para sortear a un amigo
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];
  
  // Mostrar el resultado en pantalla
  resultadoHTML.textContent = amigoSorteado;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  // Vaciar el array
  amigos = [];
  
  // Limpiar el contenido del campo de entrada
  inputElement.value = '';
  
  // Limpiar la lista de amigos en pantalla
  listaHTML.innerHTML = '';
  
  // Limpiar el resultado del sorteo
  resultadoHTML.textContent = '';
  console.log('El juego ha sido reiniciado.');
}

// Escuchadores de eventos
// ----------------------------------------------------

// Escuchador para la tecla "Enter" en el input
inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});

// Escuchador para el botón de sortear
// Debes tener un botón en tu HTML con el ID 'btn-sortear'
const sortearButton = document.getElementById('btn-sortear');
if (sortearButton) {
  sortearButton.addEventListener('click', sortearAmigo);
}

// Escuchador para el botón de reiniciar
// Debes tener un botón en tu HTML con el ID 'btn-reiniciar'
const reiniciarButton = document.getElementById('btn-reiniciar');
if (reiniciarButton) {
  reiniciarButton.addEventListener('click', reiniciarJuego);
}