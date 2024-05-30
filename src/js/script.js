var burguer = document.querySelector('.menu-burger');

var navegacao = document.querySelector('.navegacao');

burguer.addEventListener('click', function() {
navegacao.classList.toggle('mostrar');
})

burguer.addEventListener('click', function(event) {
this.classList.toggle('rotar');
})