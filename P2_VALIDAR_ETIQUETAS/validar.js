function sanitizarInput(input) {
    // Expresión regular para eliminar etiquetas <script> y su contenido
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

function validar(form) {
    // Validar y sanitizar nombre
    var nombre = form.nombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }
    // Sanitizar el nombre
    nombre = sanitizarInput(nombre);
    if (nombre !== form.nombre.value.trim()) {
        alert("El nombre contiene contenido no permitido y ha sido sanitizado.");
    }
    form.nombre.value = nombre; // Actualizar el valor del campo con el nombre sanitizado

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Si todo es válido
    return true;
}
