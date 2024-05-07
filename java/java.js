


let correo = document.getElementById("correo")
let contraseña = document.getElementById("contraseña")
let nomUsuario = document.getElementById("usuario")


let btnregistro = document.getElementById("registro")
btnregistro.addEventListener("click", (e)=> {
    e.preventDefault()
    const data = {
        correo : correo.value,
        contraseña : contraseña.value
    }
   localStorage.setItem("Correo", data.correo)
   localStorage.setItem("contraseña", data.contraseña)
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

let btnSesion = document.getElementById("sesion")
btnSesion.addEventListener("click", function() {
    let user = JSON.parse(localStorage.getItem("user")).value || [ ]
    let td = user.find(user => user.correo === correo)
   
    if (td) {
        alert("usuario registrado")
        console.log(td);
    } else {
        
    }

})





