
const expresiones = {
    nombre: /^[A-Za-z\s]+$/, 
    numeros: /^[0-9]+$/, 
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
}


let formulario =document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input:not([type="submit"]), #formulario textarea');

const mostrarError = (input, mensaje) => {
    if (!input.name) {
        console.error("El campo no tiene un atributo 'name' definido.");
        return;
    }
    const errorDiv = document.getElementById(`error-${input.name}`);
    if (errorDiv) {
        errorDiv.textContent = mensaje;
        errorDiv.style.display = 'block';
    } else {
        console.error(`No se encontró un div de error para el campo con name: ${input.name}`);
    }
};



const ocultarError = (input) => {
    const errorDiv = document.getElementById(`error-${input.name}`);
    errorDiv.textContent = ' '; 
    errorDiv.style.display = 'none'; 
}



const validarFormulario = (e) => {
    let input = e.target;
    console.log(`Validando input: name="${input.name}", value="${input.value}"`);
    switch (input.name) {
        case 'nombre':
            if (expresiones.nombre.test(input.value)) {
                console.log('Nombre válido');
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                console.log('Nombre inválido');
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, '¡ATENCIÓN! Solo letras y espacios permitidos.');
            }
            break;

        case 'telefono':
            if (expresiones.numeros.test(input.value)) {
                console.log('Teléfono válido');
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                console.log('Teléfono inválido');
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, '¡ATENCIÓN! Solo se permiten números.');
            }
            break;

        case 'email':
            if (expresiones.email.test(input.value)) {
                console.log('Email válido');
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                console.log('Email inválido');
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Email inválido: use el formato correcto');
            }
            break;

        case 'mensaje':
            if (input.value.trim() !== "" && input.value.length >= 10) {
                console.log('Mensaje válido');
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                console.log('Mensaje inválido');
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'El mensaje debe tener al menos 10 caracteres.');
            }
            break;
    }
};

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
});


formulario.addEventListener('submit', (e) => {
    // Previene el envío inicialmente
    e.preventDefault();

    // Variable para contar errores
    let errores = 0;

    // Recorre los inputs utilizando un bucle for
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const errorDiv = document.getElementById(`error-${input.name}`);
        
        if (!input.classList.contains('div-form-correct')) {
            errores++;
            if (errorDiv) {
                mostrarError(input, 'Por favor, corrige este campo antes de enviar.');
            } else {
                console.warn(`No se encontró el div de error para el campo: ${input.name}`);
            }
        }
    }

    // Si hay errores, muestra una alerta y no envía
    if (errores > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Formulario incompleto',
            text: 'Por favor, corrige los errores antes de enviar.',
        });
    } else {
        // Si todo está correcto, muestra un mensaje de éxito y envía el formulario
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado',
            text: 'Gracias por contactarnos.',
        }).then(() => formulario.submit());
    }
});

