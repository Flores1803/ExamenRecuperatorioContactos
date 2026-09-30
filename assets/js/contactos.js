let contactos = [];
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");

function mostrarContactos() {
    listaContactos.innerHTML = "";

    contactos.forEach(function(contacto, indice) {
        const li = document.createElement("li");
        li.className = "contacto";

        li.innerHTML = `
            <div class="datos-contacto">
                <span class="nombre-contacto">${contacto.nombre}</span>
                <span class="telefono-contacto">${contacto.telefono}</span>
            </div>
            <button class="btnEliminar">Eliminar</button>
        `;

        const btnEliminar = li.querySelector(".btnEliminar");

        btnEliminar.addEventListener("click", function() {
            contactos.splice(indice, 1);
            mostrarContactos();
        });

        listaContactos.appendChild(li);
    });
}

btnAgregar.addEventListener("click", function() {
    const nombreIngresado = nombre.value.trim();
    const telefonoIngresado = telefono.value.trim();

    if (nombreIngresado === "" || telefonoIngresado === "") {
        alert("Debes ingresar el nombre y el teléfono");
        return;
    }

    const nuevoContacto = {
        nombre: nombreIngresado,
        telefono: telefonoIngresado
    };

    contactos.push(nuevoContacto);
    mostrarContactos();

    nombre.value = "";
    telefono.value = "";
    nombre.focus();
});