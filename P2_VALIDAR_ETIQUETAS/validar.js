function sanitizarInput(input) {
    return input.replace(/<[^>]+>/g, '');
}

function validar() {
    var form = document.forms["registro"];

    // Validar y sanitizar nombre
    var nombre = form.nombre.value.trim();
    var nombreSanitizado = sanitizarInput(nombre);

    if (nombre !== nombreSanitizado) {
        alert("El nombre contiene contenido no permitido.");
        return false; 
    }

    alert(nombreSanitizado);

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false; 
    }

    alert(edad);

    return true; 
}
