// Funciones del formulario modal
function abrirModal(plan) {
    document.getElementById('planElegido').value = plan;
    document.getElementById('modalContacto').style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquea el scroll de fondo
}

function cerrarModal() {
    document.getElementById('modalContacto').style.display = "none";
    document.body.style.overflow = "auto"; // Libera el scroll
}

function enviarWhatsApp() {
    const nombre = document.getElementById('nombreCliente').value;
    const plan = document.getElementById('planElegido').value;
    const numeroPropio = "573104411255"; // Tu número de WhatsApp

    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre para poder saludarte.");
        return;
    }

    // Estructura del mensaje profesional
    const saludo = `Hola Kevin, un gusto saludarte.%0A%0AMi nombre es *${nombre}* y estoy interesado en adquirir el *${plan}* de Bernal Pro-Software.%0A%0AVi la oferta de lanzamiento y me gustaría recibir más información.`;

    const url = `https://wa.me/${numeroPropio}?text=${saludo}`;
    
    // Abre WhatsApp en pestaña nueva
    window.open(url, '_blank');
    cerrarModal();
}

// Cerrar si hacen clic fuera de la ventana modal
window.onclick = function(event) {
    const modal = document.getElementById('modalContacto');
    if (event.target == modal) {
        cerrarModal();
    }
}
