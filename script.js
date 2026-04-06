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
    if (!nombre) return alert("Por favor escribe tu nombre");
    
    const texto = `Hola Kevin, mi nombre es ${nombre}. Me interesa el ${plan}.`;
    window.open(`https://wa.me/573104411255?text=${texto}`, '_blank');
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modalContacto')) cerrarModal();
}
