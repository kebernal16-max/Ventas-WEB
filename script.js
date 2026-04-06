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
        alert("Por favor, escribe tu nombre.");
        return;
    }

    const msg = `Hola Kevin, soy *${nombre}*. Me interesa el *${plan}*. Vi tus ejemplos y quiero iniciar mi catálogo personalizado.`;
    window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
    cerrarModal();
}

window.onclick = function(e) {
    if (e.target == document.getElementById('modalContacto')) cerrarModal();
}
