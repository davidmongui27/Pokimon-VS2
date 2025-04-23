function Registrar() {
    let nombre = document.getElementById("nombre").value;
    if (nombre.length < 3){
        alert("El nombre no tiene por lo menos 3 caracteres")
        return false;
    }

    
    let apellido = document.getElementById("apellido").value;
    if (apellido.length < 3){
        alert("El apellido no tiene por lo menos 3 caracteres")
        return false;
    }


    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let correo = document.getElementById("correo").value;

    if (nombre && apellido && username && password && correo) {

        let usuario = [
            nombre,
            apellido, 
            username,
            correo,
            password,
        ];

        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Registro exitoso. Redirigiendo a iniciar sesion...");
        window.location.href = "../vistas/login.html";
    } else {
        alert("Complete todos los campos.");
        return;
    }
}

