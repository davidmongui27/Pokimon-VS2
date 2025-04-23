function cerrarSesion(){
    localStorage.removeItem("Usuario")
    window.location.href="/INDEX.html"
    alert("Has cerrado sesion")
}
function Eliminar(){
    localStorage.clear("Usuario")
    window.location.href="../INDEX.html"
    alert("Cuenta Elimnada")
}
