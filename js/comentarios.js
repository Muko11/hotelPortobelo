//Fetch API
//https://jsonplaceholder.typicode.com/comments

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    const modal = document.querySelector("#comentariosHabitacion");

    for (i = 0; i < 10; i++) {
        const nombre = document.createElement("H3");
        nombre.textContent = resultado[i].name;
        const mensaje = document.createElement("P");
        nombre.textContent = resultado[i].body;
        const separador = document.createElement("HR");

        modal.appendChild(nombre);
        modal.appendChild(mensaje);
        modal.appendChild(separador);
    }
}

consultarAPI();