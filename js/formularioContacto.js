const formulario2 = document.querySelector("#formularioContacto");

formulario2.addEventListener("submit", e => {

    //No me redirige al action (se espera para comprobar las validaciones)
    e.preventDefault();

    const nombre = document.querySelector("#contactoNombre").value;
    const email = document.querySelector("#contactoEmail").value;
    const mensaje = document.querySelector("#contactoMensaje").value;

    const alertaPrevia = document.querySelector(".alert");

    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement("DIV");

    //Añade una clase al elemento creado anteriormente
    alerta.classList.add("alert");

    if (nombre === "" || email === "" || mensaje === "") {
        alerta.textContent = "Los campos nombre, email y mensaje son obligatorios";
        alerta.classList.add("alert-danger");
    } else {
        alerta.textContent = "Enviado";
        alerta.classList.add("alert-success");
        document.getElementById("contactoNombre").value = "";
        document.getElementById("contactoApellido").value = "";
        document.getElementById("contactoTelefono").value = "";
        document.getElementById("contactoEmail").value = "";
        document.getElementById("contactoMensaje").value = "";
    }

    //Le añado al formulario un div hijo que es alerta
    formulario2.appendChild(alerta);

});


