// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments avec la classe 'toggle-content'
    var toggleElements = document.querySelectorAll('.toggle-content');

    // Ajouter un écouteur d'événement pour chaque élément
    toggleElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Empêcher la propagation si on clique sur une image
            if (event.target.tagName === 'IMG') {
                return;
            }

            // Cibler le contenu à l'intérieur de l'élément cliqué
            var content = element.querySelector('.content');
            var arrow = element.querySelector('.arrow');
            if (content) {
                // Basculer l'affichage du contenu
                if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    if (arrow) {
                        arrow.classList.remove('right');
                        arrow.classList.add('down');
                    }
                } else {
                    content.style.display = 'none';
                    if (arrow) {
                        arrow.classList.remove('down');
                        arrow.classList.add('right');
                    }
                }
            }
        });
    });

    // Modal image functionality
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var images = document.querySelectorAll(".clickable-image");
    var span = document.getElementsByClassName("close")[0];

    images.forEach(function(img) {
        img.addEventListener('click', function(event) {
            event.stopPropagation(); // Empêche la propagation de l'événement de clic
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


