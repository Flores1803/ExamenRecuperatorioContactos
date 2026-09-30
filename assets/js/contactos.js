let contactos = [];
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const contador = document.getElementById("contador");
const buscar = document.getElementById("buscar");

function mostrarContactos(lista = contactos) {
    listaContactos.innerHTML = "";
    lista.forEach(function(contacto) {
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
            const indice = contactos.indexOf(contacto);
            contactos.splice(indice, 1);
            mostrarContactos();
            actualizarContador();
        });
        listaContactos.appendChild(li);
    });
}
function actualizarContador() {
    contador.textContent = contactos.length;
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
    actualizarContador();
    nombre.value = "";
    telefono.value = "";
    nombre.focus();
});

buscar.addEventListener("input", function() {
    const texto = buscar.value.toLowerCase();
    const resultados = contactos.filter(function(contacto) {
        return contacto.nombre.toLowerCase().includes(texto);
    });
    mostrarContactos(resultados);
});