let carrito = [];

        function toggleCarrito() {
            document.getElementById("carrito-contenido").classList.toggle("mostrar");
        }

        function agregarAlCarrito(nombre, precio) {
            carrito.push({ nombre, precio });
            actualizarCarrito();
        }

        function actualizarCarrito() {
            const listaCarrito = document.getElementById("lista-carrito");
            listaCarrito.innerHTML = "";
            let total = 0;

            carrito.forEach((producto, index) => {
                total += producto.precio;
                let item = document.createElement("li");
                item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
                let botonEliminar = document.createElement("button");
                botonEliminar.textContent = "❌";
                botonEliminar.onclick = () => eliminarDelCarrito(index);
                item.appendChild(botonEliminar);
                listaCarrito.appendChild(item);
            });

            document.getElementById("total").textContent = total.toFixed(2);
            document.getElementById("contador").textContent = carrito.length;
        }

        function eliminarDelCarrito(index) {
            carrito.splice(index, 1);
            actualizarCarrito();
        }

        function vaciarCarrito() {
            carrito = [];
            actualizarCarrito();
        }