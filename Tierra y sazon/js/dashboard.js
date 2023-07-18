// Obtener los elementos de las opciones
const opcionEventosMusicales = document.querySelector('#opcion-eventos-musicales');
const opcionExposicionesCulturales = document.querySelector('#opcion-exposiciones-culturales');

// Obtener el elemento contenedor del contenido a cambiar
const contenidoDerecha = document.querySelector('#contenido-derecha');

// Evento para la opción "Eventos musicales"
opcionEventosMusicales.addEventListener('click', function(e) {
  e.preventDefault();
  // Cambiar el contenido a "Eventos musicales"
  contenidoDerecha.textContent = 'Contenido de Eventos Musicales';
});

// Evento para la opción "Exposiciones culturales"
opcionExposicionesCulturales.addEventListener('click', function(e) {
  e.preventDefault();
  // Cambiar el contenido a "Exposiciones culturales"
  contenidoDerecha.textContent = 'Contenido de Exposiciones Culturales';
});
