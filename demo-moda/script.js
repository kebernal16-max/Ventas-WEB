const productos = [
    { id: 1, nombre: "Chaqueta Cuero Pro", precio: 250000, desc: "Chaqueta de cuero sintético de alta durabilidad con forro térmico. Ideal para motociclistas o estilo urbano pesado.", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600" },
    { id: 2, nombre: "Camiseta Basic White", precio: 85000, desc: "Algodón 100% premium. Cuello redondo reforzado y tejido transpirable para máxima comodidad diaria.", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600" },
    { id: 3, nombre: "Jeans Slim Fit Dark", precio: 140000, desc: "Mezclilla elástica de alta calidad. Corte ajustado que mantiene la forma tras cada lavado.", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600" },
    { id: 4, nombre: "Gorra Urban Tech", precio: 60000, desc: "Diseño minimalista con tela repelente al agua y ajuste micrométrico. Logo bordado en negro mate.", img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600" }
];

let carrito = [];

// Inicializar tienda
const lista = document.getElementById('productos-lista');
productos.forEach(p => {
    lista.innerHTML += `
        <div class="product-card" onclick="verDetalle(${p.id})">
            <img src="${p.img}" class="product-img" alt="${p.nombre}">
            <div class="product-info">
                <h4>${p.nombre}</h4>
                <p style="color: var(--azul); font-weight:bold; font-size: 1.1rem">$${p.precio.toLocaleString()}</p>
            </div>
        </div>
    `;
});

// Función para ver detalle del producto
function verDetalle(id) {
    const p = productos.find(prod => prod.id === id);
    document.getElementById('detalle-nombre').innerText = p.nombre;
    document.getElementById('detalle-desc').innerText = p.desc;
    document.getElementById('detalle-precio').innerText = `$${p.precio.toLocaleString()}`;
    document.getElementById('detalle-img').src = p.img;
    document.getElementById('modal-producto').style.display = "block";
    
    document.getElementById('btn-agregar-modal').onclick = () => {
        agregar(p.id);
        cerrarDetalle();
    };
}

function cerrarDetalle() {
    document.getElementById('modal-producto').style.display = "none";
}

// Lógica del Carrito
function agregar(id) {
    const itemEnCarrito = carrito.find(item => item.id === id);
    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        const prod = productos.find(p => p.id === id);
        carrito.push({ ...prod, cantidad: 1 });
    }
    actualizarCarrito();
    abrirCart();
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(i => i.id === id);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(i => i.id !== id);
        }
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const count = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('cart-count').innerText = count;
    
    const container = document.getElementById('cart-items');
    container.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        container.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.nombre}</h4>
                    <p>$${(item.precio * item.cantidad).toLocaleString()}</p>
                </div>
                <div class="item-controls">
                    <button class="btn-qty" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <span>${item.cantidad}</span>
                    <button class="btn-qty" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    });
    document.getElementById('cart-total').innerText = `$${total.toLocaleString()}`;
}

function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('open'); }
function abrirCart() { document.getElementById('cart-sidebar').classList.add('open'); }

// Lógica de Finalización con Redirección (Tu pedido especial)
function finalizarPedido() {
    if(carrito.length === 0) return alert("El carrito está vacío. ¡Prueba agregando algo!");

    const total = document.getElementById('cart-total').innerText;

    const avisoSimulacion = 
        `🛒 SIMULACIÓN DE PEDIDO COMPLETADA\n\n` +
        `En una tienda real, el vendedor recibiría un mensaje con tu pedido por un valor de ${total}.\n\n` +
        `Este sistema automatiza ventas y organiza tu negocio. ¿Quieres ver cómo contratar este servicio?\n\n` +
        `Haz clic en "Aceptar" para volver a mi página principal.`;

    if(confirm(avisoSimulacion)) {
        // Redirige un nivel atrás (donde está tu index principal)
        window.location.href = "../index.html"; 
    }
}

// Cerrar modal si se hace clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modal-producto');
    if (event.target == modal) cerrarDetalle();
}