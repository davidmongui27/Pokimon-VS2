document.addEventListener("DOMContentLoaded", () => {
    let entrenador = JSON.parse(localStorage.getItem("entrenador"));

    if (entrenador) {
        document.getElementById("Username").textContent = entrenador.nombre;
        document.getElementById("edad-entrenador").textContent = entrenador.edad;
        document.getElementById("Ciudad-pokimon").textContent = entrenador.ciudad;
        document.getElementById("genero-entrenador").textContent = entrenador.genero;
    } else {
        alert("No se encontraron datos del entrenador.");
    }
});
