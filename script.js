document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    // Agregué '.demo-wrapper' a la lista para que también se anime
    document.querySelectorAll('.card-precio, .v-card, .perfil-card, .demo-wrapper').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});

function abrirModal(plan) {
    document.getElementById('planElegido').value = plan;
    document.getElementById('modalContacto').style.display = "block";
}

function cerrarModal() {
    document.getElementById('modalContacto').style.display = "none";
}

function enviarWhatsApp() {
    const nombre = document.getElementById('nombreCliente').value;
    const plan = document.getElementById('planElegido').value;
    const numero = "573104411255"; 

    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    const texto = `Hola Kevin, mucho gusto saludarte.%0A%0AMi nombre es *${nombre}* y estoy interesado en el *${plan}*. Vi tu perfil como Programador Técnico y me gustaría iniciar con mi catálogo personalizado.`;

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    cerrarModal();
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modalContacto')) {
        cerrarModal();
    }
}
