// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. EFECTO DE APARICIÓN (REVEAL) AL BAJAR
    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Solo se anima una vez
            }
        });
    }, observerOptions);

    // Seleccionamos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.card-precio, .perfil-box, .faq-item');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealOnScroll.observe(el);
    });

    // 2. LOGO EN CONSOLA (Detalle de Programador Pro)
    console.log("%c Bernal Pro-Software ", "background: #0072ff; color: white; font-size: 20px; font-weight: bold; border-radius: 5px; padding: 5px;");
    console.log("Desarrollado por Kevin Bernal - Técnico en Programación.");

});
