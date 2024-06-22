// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments avec la classe 'toggle-content'
    var toggleElements = document.querySelectorAll('.toggle-content');

    // Ajouter un écouteur d'événement pour chaque élément
    toggleElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Cibler le paragraphe à l'intérieur de l'élément cliqué
            var p = element.querySelector('p');
            var arrow = element.querySelector('.arrow');
            if (p) {
                // Basculer l'affichage du paragraphe
                if (p.style.display === 'none' || p.style.display === '') {
                    p.style.display = 'block';
                    if (arrow) {
                        arrow.classList.remove('right');
                        arrow.classList.add('down');
                    }
                } else {
                    p.style.display = 'none';
                    if (arrow) {
                        arrow.classList.remove('down');
                        arrow.classList.add('right');
                    }
                }
            }
        });
    });
});
