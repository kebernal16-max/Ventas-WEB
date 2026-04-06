document.addEventListener('DOMContentLoaded', () => {
    // Configuramos el observador para las animaciones de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    // Seleccionamos tus tarjetas originales + la nueva de la demo para animarlas
    document.querySelectorAll('.card-precio, .v-card, .perfil-card, .demo-wrapper').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});

// Función para abrir el modal de contacto
function abrirModal(plan) {
    document.getElementById('planElegido').value = plan;
    document.getElementById('modalContacto').style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modalContacto').style.display = "none";
}

// Función original para enviar a WhatsApp con tu número y mensaje técnico
function enviarWhatsApp() {
    const nombre = document.getElementById('nombreCliente').value;
    const plan = document.getElementById('planElegido').value;
    const numero = "573104411255"; 

    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    // Tu mensaje original que destaca tu perfil técnico
    const texto = `Hola Kevin, mucho gusto saludarte.%0A%0AMi nombre es *${nombre}* y estoy interesado en el *${plan}*. Vi tu perfil como Programador Técnico y me gustaría iniciar con mi catálogo personalizado.`;

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    cerrarModal();
}

// Cerrar el modal si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
    const modal = document.getElementById('modalContacto');
    if (event.target == modal) {
        cerrarModal();
    }
}
