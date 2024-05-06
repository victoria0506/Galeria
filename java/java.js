


let correo = document.getElementById("correo")
let contraseña = document.getElementById("contraseña")
let nomUsuario = document.getElementById("usuario")
let btnregistro = document.getElementById("registro")

btnregistro.addEventListener("click", function(){
   localStorage.setItem("Correo", correo.value)
   localStorage.setItem("contraseña", contraseña.value)
   localStorage.setItem("nombreUsuario", nomUsuario.value) 
})

function llamar() {
    localStorage.getItem("Correo")
    localStorage.getItem("contraseña")
    localStorage.getItem("nombreUsuario")
}

