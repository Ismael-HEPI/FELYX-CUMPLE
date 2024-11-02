// Obtén una referencia al botón mediante su ID
const btnYes = document.getElementById('btnYes');

// Agrega el evento de click al botón
btnYes.addEventListener('click', function() {
  Swal.fire({
    title: 'Feliz cumpleaños mi niña',
    text: 'Que este día llene tu corazón, De alegría y satisfacción, Así como llenas el mío,De amor, felicidad y sueños... Te quiero',

    imageUrl: './imagen/cumple.jpg',
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: 'Custom image'
  });
});
