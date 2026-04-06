document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card-precio, .perfil-card, .demo-wrapper').forEach(el => {
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
    if (!nombre) return alert("Ingresa tu nombre");
    const texto = `Hola Kevin, mi nombre es *${nombre}* y me interesa el *${plan}*.`;
    window.open(`https://wa.me/573104411255?text=${texto}`, '_blank');
}
