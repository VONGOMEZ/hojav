document.getElementById('cambiarTema').addEventListener('click', function() {
    var body = document.body;
    if (body.classList.contains('tema-claro')) {
        body.classList.remove('tema-claro');
        body.classList.add('tema-oscuro');
        document.getElementById('iconoActual').classList.remove('fa-sun');
        document.getElementById('iconoActual').classList.add('fa-moon');
    } else {
        body.classList.remove('tema-oscuro');
        body.classList.add('tema-claro');
        document.getElementById('iconoActual').classList.remove('fa-moon');
        document.getElementById('iconoActual').classList.add('fa-sun');
    }
});
