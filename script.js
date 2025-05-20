const carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("items-carrito");
  const totalSpan = document.getElementById("total");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
    total += item.precio;
  });
  totalSpan.textContent = total;
}

function procesarPedido() {
  if (carrito.length === 0) {
    alert("Agrega platillos al carrito antes de procesar el pedido.");
    return;
  }
  const numeroOrden = Math.floor(Math.random() * 1000000);
  document.getElementById("orden").textContent = `¡Gracias por tu pedido! Tu n.° de orden es ${numeroOrden}.`;
}

// Búsqueda
const inputBuscar = document.getElementById("buscar");
inputBuscar.addEventListener("keyup", () => {
  const valor = inputBuscar.value.toLowerCase();
  const items = document.querySelectorAll(".lista-platillos li");
  items.forEach(item => {
    const nombre = item.dataset.nombre.toLowerCase();
    item.style.display = nombre.includes(valor) ? "flex" : "none";
  });
});

// Menú responsive
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
