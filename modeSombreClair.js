let button = document.querySelector('#mode');
let span   = document.querySelector('span');

if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}

button.addEventListener('click', () => {
  if(document.body.classList.contains('dark')) { // .classList, permet de retourne un tableau de toutes les classes sur un élément * .contains('class') permet de vérifier l'existence d'une class //
    document.body.className = ''; // On retir toute les class de notre élément body.
    span.textContent = 'Thème sombre';
    localStorage.setItem('theme', 'clair');
  }
  else {
    modeSombre();
  }
});

function modeSombre() {
  document.body.className = 'dark';
  span.textContent = 'Thème clair';
  localStorage.setItem('theme', 'sombre');
}