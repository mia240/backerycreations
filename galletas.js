function mostrarDescripcion(boton) {
    const contenedor = boton.closest('.producto');
    const descripcion = contenedor.querySelector('.descripcion-oculta');

    if (descripcion.style.display === "none" || descripcion.style.display === "") {
        descripcion.style.display = "block";
        boton.textContent = "Ocultar descripción";
    } else {
        descripcion.style.display = "none";
        boton.textContent = "Ver descripción";
    }
}
