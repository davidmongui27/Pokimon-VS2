function Loguear() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario === null) {
        alert("No has sido registrado");
        window.location.href ="../vistas/registro.html";
        return;
    }

    if (usuario[2] === username && usuario[4] === password) {
        alert("Usuario válido");
        window.location.href = "../vistas/inicio.html";
    } else {
        alert("Credenciales incorrectas");
    }
}
