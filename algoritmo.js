window.onload = function() {
    // Función para mostrar u ocultar el panel al hacer clic en el botón
    function togglePanel(sectionId) {
        var panel = document.getElementById(sectionId + "-panel");
        panel.classList.toggle("show"); // Agrega o quita la clase 'show' para mostrar u ocultar el panel
    }

    // Agrega un evento de clic al botón "mercado-btn" para mostrar u ocultar el panel correspondiente
    document.getElementById("mercado-btn").addEventListener("click", function() {
        togglePanel("mercado");
    });

    // Agrega más eventos de clic para otros botones si es necesario
};
