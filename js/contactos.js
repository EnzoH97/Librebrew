
const expresiones = {
    nombre: /([A-Za-z])\w+/,
    numeros: /([0-9])\w+/,
    Email: 
}
let formulario = document.getElementById('formulario')
let inputs = document.querySelectorAll('#formulario input')


const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'Nombre':
            let ok = expresiones.nombre.test(e.target.value);
            console.log(ok)
            if(ok == true){
                console.log('correcto')
                document.getElementsByName('Nombre').classList.remove('div-form-incorrect');
                document.getElementsByName('Nombre').classList.add('div-form-correct');
            } else {
                console.log('incorrecto')
                document.getElementsByName('Nombre').classList.remove('div-form-correct');
                document.getElementsByName('Nombre').classList.add('div-form-incorrect');
            }
            break
        case 'Telefono':
            if(expresiones.numero.test(e.target.value)){
                document.getElementsByName('Telefono').classList.remove('div-form-incorrect');
                document.getElementsByName('Telefono').classList.add('div-form-correct');
            } else {
                document.getElementsByName('Telefono').classList.add('div-form-incorrect');
                document.getElementsByName('Telefono').classList.remove('div-form-correct');
            }
            break
        case 'Email':
            if(expresiones.numero.test(e.target.value)){
                document.getElementsByName('Email').classList.remove('div-form-incorrect');
                document.getElementsByName('Email').classList.add('div-form-correct');
            } else {
                document.getElementsByName('Email').classList.add('div-form-incorrect');
                document.getElementsByName('Email').classList.remove('div-form-correct');
            }
            break
        default:
            break
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
});
