/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn_registrar').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const control = document.getElementById('control').value;
        const correo = document.getElementById('correo').value;
        const num_tel = document.getElementById('num_tel').value;
        const genero = document.querySelector('input[name="genero"]:checked');
        const contraseña = document.getElementById('contraseña').value;
        const confirmar = document.getElementsByName('confirmar')[0].value;

        // Validación simple: verificar si los campos están vacíos
        if (nombre === '' || control === '' || correo === '' || num_tel === '' || !genero || contraseña === '' || confirmar === '') {
            alert('Por favor, completa todos los campos');
            return;
        }

        // Validar el correo electrónico con una expresión regular
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(correo)) {
            alert('Ingresa un correo electrónico válido');
            return;
        }

        // Verificar si las contraseñas coinciden
        if (contraseña !== confirmar) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Aquí puedes agregar más validaciones según tus requisitos

        // Si todas las validaciones son exitosas, podrías enviar el formulario
        // Aquí puedes añadir el código para enviar los datos a través de AJAX o realizar cualquier acción necesaria

        document.getElementById('form1').submit();
    });
});

document.getElementById('btn_registrar').addEventListener('click', function (event) {
    event.preventDefault();
    // Validaciones (como se mencionó anteriormente)

    // Si todas las validaciones son exitosas:
    // Recolectar datos del formulario
    const nombre = document.getElementById('nombre').value;
    const control = document.getElementById('control').value;
    const correo = document.getElementById('correo').value;
    const num_tel = document.getElementById('num_tel').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const contraseña = document.getElementById('contraseña').value;

    // Crear un objeto con los datos a enviar al servidor
    const datos = {
        nombre: nombre,
        control: control,
        correo: correo,
        num_tel: num_tel,
        genero: genero,
        contraseña: contraseña
    };

    // Enviar los datos al servidor utilizando fetch API o XMLHttpRequest
    fetch('insertar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (response.ok) {
            // Si la inserción es exitosa, podrías redirigir a otra página o mostrar un mensaje
            alert('Registro exitoso');
            window.location.href = 'otra_pagina.html'; // Redirigir a otra página
        } else {
            alert('Error al registrar');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});