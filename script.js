document.addEventListener('DOMContentLoaded', () => {
    // Animación al bajar (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card-precio, .info-bloque, .faq-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    console.log("%c Bernal Pro-Software Activado ", "background: #0072ff; color: white; padding: 5px; border-radius: 5px;");
});
