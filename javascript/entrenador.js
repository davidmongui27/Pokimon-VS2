
document.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(localStorage.getItem("usuario"));
    if (user && user[2]) {
        
        let nombre_usuario = user[2];
        document.getElementById("nombre").setAttribute("value", nombre_usuario);
    }
});


function guardarEntrenador() {
   
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let ciudad = document.getElementById('ciudad').value;
    let genero = document.getElementById('genero').value;

    // Crear un objeto con los datos del entrenador
    const entrenador = {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad,
        genero: genero
    };

    // Guardar los datos del entrenador en localStorage
    localStorage.setItem('entrenador', JSON.stringify(entrenador));

    // Confirmar que los datos se guardaron correctamente
    alert('Entrenador registrado con éxito!');
}

  


