


let correo = document.getElementById("correo")
let contraseña = document.getElementById("contraseña")
let nomUsuario = document.getElementById("usuario")
let btnSesion = document.getElementById("sesion")
let btnregistro = document.getElementById("registro")



btnregistro.addEventListener("click", (e)=> {
    e.preventDefault()
    const data = {
        correo : correo.value,
        contraseña : contraseña.value,
        nomUsuario : nomUsuario.value
    }
   localStorage.setItem("Correo", data.correo)
   localStorage.setItem("contraseña", data.contraseña)
   localStorage.setItem("usuario", data.nomUsuario)
    //document.getElementById("correo").value = ""
    //document.getElementById("contraseña").value = ""
})
btnregistro.addEventListener("click", function () {
    if (correo.value != "" && contraseña.value != ""){
        window.location.href= "login.html" 
    }else{
        alert("Llene sus datos")
    }
})
let datos = []
btnSesion.addEventListener("DomcotentLoaded", function(){
    let datos = []
    function datosExisten(dato) {
        const existe= datos.find(elemento => elemento === dato)
        if (!existe) {
            datosExisten.push(dato)
            window.location.href= "login.html"
        } else {
            console.log("datos no exiten")
        }
    }
    
})

btnSesion.getElementById("sesion").addEventListener("click", function () {
    const indato = document.getElementById("correo").value
    datosExisten(indato)
    
})








