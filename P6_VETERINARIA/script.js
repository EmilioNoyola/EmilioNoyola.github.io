// URL ficticia de la API de mascotas
const apiUrl = "https://api.example.com/mascotas";

// Función para cargar el contenido de cada página
function loadPage(page) {
    const content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = `
                <h2>Bienvenidos a Veterinaria Amigo Fiel</h2>
                <p>Ofrecemos el mejor cuidado para tu mascota, con veterinarios experimentados y servicios completos.</p>
                <img src="img/veterinaria.jpg" alt="Veterinaria" style="width: 100%; max-width: 600px;">
            `;
            break;
        case 'services':
            content.innerHTML = `
                <h2>Nuestros Servicios</h2>
                <ul>
                    <li>Consultas y chequeos</li>
                    <li>Vacunación</li>
                    <li>Cirugía</li>
                    <li>Baños y estética</li>
                    <li>Emergencias 24/7</li>
                </ul>
                <h3>Mascotas en Adopción</h3>
                <div id="mascotas-container">
                    <p>Cargando mascotas en adopción...</p>
                </div>
            `;
            fetchMascotas();
            break;
        case 'contact':
            content.innerHTML = `
                <h2>Contáctanos</h2>
                <p>Dirección: Calle Principal #123, Ciudad Mascota</p>
                <p>Teléfono: +123 456 7890</p>
                <p>Email: contacto@veterinariaamigofiel.com</p>
            `;
            break;
        default:
            content.innerHTML = `<p>Esta página no existe.</p>`;
    }
}

// Función para obtener las mascotas en adopción
async function fetchMascotas() {
    const mascotasContainer = document.getElementById('mascotas-container');
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        mascotasContainer.innerHTML = ""; // Limpiamos el contenido previo
        
        data.mascotas.forEach(mascota => {
            const mascotaDiv = document.createElement('div');
            mascotaDiv.className = "mascota";
            mascotaDiv.innerHTML = `
                <h4>${mascota.nombre}</h4>
                <p>Edad: ${mascota.edad}</p>
                <p>Raza: ${mascota.raza}</p>
                <p>${mascota.descripcion}</p>
            `;
            mascotasContainer.appendChild(mascotaDiv);
        });
    } catch (error) {
        mascotasContainer.innerHTML = "<p>Error al cargar las mascotas en adopción. Intenta nuevamente más tarde.</p>";
    }
}

// Cargar la página de inicio por defecto
window.onload = () => loadPage('home');
