// Validar Formulario

const datos = {
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

const alerta = document.createElement('P');

nombre.addEventListener('input', leerTexto );
apellido.addEventListener('input', leerTexto );
email.addEventListener('input', leerTexto );
mensaje.addEventListener('input', leerTexto );
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const { nombre, apellido, email, mensaje } = datos;
    if (nombre === '' || apellido === '' || email === '' || mensaje === '') {
        mostrarAlerta('Faltan campos por completar', 'error');
    } else {
        mostrarAlerta('Formulario Enviado', 'correcto');
    }
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    // console.log(datos);
};

function mostrarAlerta(mensaje, tipoDeAlerta) {
    alerta.textContent = mensaje;
    
    if (tipoDeAlerta === 'error') {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}




