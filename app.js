// Je sélectionne et je stocke : 

// La DIV switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);

// la div btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);

// l'icône 
const icone = document.querySelector('i');
console.log(icone);

// la DIV container 
const container = document.querySelector('.container');
console.log(container);

// le titre
const titre = document.querySelector('h1');
console.log(titre);

// la DIV switch à une action au clic.
switchBox.addEventListener('click', function() {
    console.log('DIV cliquée !'); 

    // Je déplace le cercle
    // J'utilise .classList.toggle
    btn.classList.toggle('btn-change');

    // J'initialise l'icône.
    icone.classList.toggle('fa-solid');
    icone.classList.toggle('fa-moon');

    // Je déplace l'icône.
    icone.classList.toggle('icone-change');

    // Je change l'icône.
    // Toggle sur chaque classe de l'icône.
    icone.classList.toggle('fa-solid');
    icone.classList.toggle('fa-sun');

    // La DIV switch change de couleur de fond.
    container.classList.toggle('container-change');

    // Je modifie le texte du titre.
    if (titre.innerText === 'LIGHT MODE') {
        titre.innerText = 'DARK MODE';
    } else {
        titre.innerText = 'LIGHT MODE';
    }
});
