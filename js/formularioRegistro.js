const formulario = document.querySelector("#formulario-registro");

formulario.addEventListener("submit", e => {

    //No me redirige al action (se espera para comprobar las validaciones)
    e.preventDefault();

    const nombre = document.querySelector("#registroNombre").value;
    const email = document.querySelector("#registroEmail").value;
    const password = document.querySelector("#registroPassword").value;

    const alertaPrevia = document.querySelector(".alert");

    const spinnerPrevio = document.querySelector(".spinner-border");

    if (spinnerPrevio) {
        spinnerPrevio.remove();
    }

    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement("DIV");

    const spinner = document.createElement("DIV");

    //Añade una clase al elemento creado anteriormente
    alerta.classList.add("alert");

    if (nombre === "" || email === "" || password === "") {
        alerta.textContent = "Todos los campos son obligatorios";
        alerta.classList.add("alert-danger");
    } else {
        alerta.textContent = "Todo correcto, creando la cuenta...";
        alerta.classList.add("alert-success");
        spinner.classList.add("spinner-border", "text-success");

        almacenarDatos(nombre, email, password);
        ocultarModal();
    }

    //Le añado al formulario un div hijo que es alerta
    formulario.appendChild(alerta);
    formulario.appendChild(spinner);

});


function almacenarDatos(nombre, email, password) {
    const usuario = {
        nombre: nombre,
        email: email,
        password: password
    };
    const usuarioString = JSON.stringify(usuario);
    localStorage.setItem("usuario", usuarioString);

    recuperarDatos();

}


function recuperarDatos() {
    const identificacion = document.getElementById("identificador");

    const usuarioJSON = localStorage.getItem("usuario");
    const usuarioObjeto = JSON.parse(usuarioJSON);

    identificacion.innerHTML = usuarioObjeto.nombre;
}

function ocultarModal() {
    const modalClose = document.querySelector('#modalRegistro');
    const modal = bootstrap.Modal.getInstance(modalClose);

    setTimeout(() => {
        modal.hide();
    }, 1500)

    $("#identificador").attr("data-bs-target", "#modalCerrarSesion");

}

function cerrarSesion() {
    localStorage.removeItem("usuario");
    location.reload();
}