// elementos auxiliares
var toogleMenu = document.querySelectorAll('.toggle-menu'),
    wrapper    = document.querySelector('.wrapper');

// criando evento de click para abrir o menu
for (var i = 0; i < toogleMenu.length; i++){
    toogleMenu[i].addEventListener('click', menuAction);
}

// Adicionando evento para fechar o menu ao pressionar a tecla ESC
document.addEventListener('keyup', function(e){
    if(e.keyCode === 27) {
        if(wrapper.classList.contains('show-menu')){
            menuAction();
        }
    }
});

// função auxiliar que abre e fecha o menu
function menuAction() {

    alert("oi");

    document.querySelector('#botao').style.display = 'block';
    /*if(wrapper.classList.contains('show-menu')){

        wrapper.classList.remove('show-menu');
         document.getElementById("botao").style.display = 'block';
        
    }
    else {
        wrapper.classList.add('show-menu');
        document.getElementById("botao").style.display = 'none';
    }*/
}

