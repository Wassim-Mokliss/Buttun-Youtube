console.log('connecté'); 
// Je selectionne et je stock l'icone
const icone = document.querySelector('i');
// Je selectionne et je stock le boutton
const btnFollow = document.querySelector('.btn');

// Je soumet l'icone à un evenement
icone.addEventListener('click', function(){
    console.log('clické');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
});

// Je soumet le boutton à un evenement
btnFollow.addEventListener('click', function(){
    console.log('clické');
    btnFollow.classList.toggle('abonne')
    // On vérifie le texte du buoutton
    if(btnFollow.innerText === 'Abonné'){
        // Action à réaliser si condition vraie
        btnFollow.innerText = 'Abonnez-vous'
    }
    else {
        // Action à réaliser si la condition est fausse
        btnFollow.innerText = 'Abonné'
    };
});
