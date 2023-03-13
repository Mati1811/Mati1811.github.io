//Iconos

const iconos = document.querySelectorAll('.programming-icon');

iconos.forEach(function(icono){
    
    icono.addEventListener('mouseover', () => {
            icono.classList.add('difuminado');
        });

    icono.addEventListener('mouseleave',() => {
        icono.classList.remove('difuminado');
        })
});





