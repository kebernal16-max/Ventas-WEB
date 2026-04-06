document.addEventListener('DOMContentLoaded', () => {
    // Animaciones de aparición suave al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card-precio, .v-card, .foto-box').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "all 0.7s ease-out";
        observer.observe(el);
    });
});

// FUNCIONES DEL FORMULARIO MODAL
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
    const saludo = `Hola Kevin, un gusto saludarte.%0A%0AMi nombre es *${nombre}* y estoy interesado en adquirir el *${plan}* para mi negocio.%0A%0AVi tu página Bernal Pro-Software y me gustaría asegurar el precio de lanzamiento.`;

    const url = `https://wa.me/${numeroPropio}?text=${saludo}`;
    
    // Abre WhatsApp en pestaña nueva
    window.open(url, '_blank');
    cerrarModal();
}

// Cerrar si hacen clic fuera de la ventana blanca
window.onclick = function(event) {
    const modal = document.getElementById('modalContacto');
    if (event.target == modal) {
        cerrarModal();
    }
}
