
const expresiones = {
    nombre: /^[A-Za-z\s]+$/, 
    numeros: /^[0-9]+$/, 
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
}
let formulario =document.getElementById('formulario')
let inputs = document.querySelectorAll('#formulario input')

const mostrarError = (input, mensaje) => {
    const errorDiv = document.getElementById(`error-${input.name}`);
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block'; 
}

const ocultarError = (input) => {
    const errorDiv = document.getElementById(`error-${input.name}`);
    errorDiv.textContent = ''; 
    errorDiv.style.display = 'none'; 
}



const validarFormulario = (e) => {
    let input = e.target;
    switch (e.target.name) {
        case 'nombre':
            if (expresiones.nombre.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, '¡ATENCIÓN! Solo letras y espacios permitidos.');
            }
            break;


        case 'telefono':
            if (expresiones.numeros.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, '¡ATENCIÓN!. Solo se permiten números.');
            }
            break;
        case 'Email':
            if (expresiones.email.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Email inválido: use el formato correcto');
            }
            break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
});


const validarCamposVacios = () => {
    let camposValidos = true;
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            mostrarError(input, "Este campo no puede estar vacío.");
            input.classList.add("div-form-incorrect");
            camposValidos = false;
        } else {
            ocultarError(input);
            input.classList.add("div-form-correct");
        }
    });

    const mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim() === "") {
        mostrarError({ name: "textarea" }, "Este campo no puede estar vacío.");
        mensaje.classList.add("div-form-incorrect");
        camposValidos = false;
    } else {
        ocultarError({ name: "textarea" });
        mensaje.classList.add("div-form-correct");
    }

    return camposValidos;
};

formulario.addEventListener("submit", (e) => {
    if (!validarCamposVacios()) {
        e.preventDefault();
    }
});
