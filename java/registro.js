

const btnregistro = document.querySelector("#registro")

btnregistro.addEventListener("click", (e) =>{
    e.preventDefault()

    const correo = document.querySelector("#correo").value
    const contraseña = document.querySelector("#contraseña").value

    const usuarios = JSON.parse(localStorage.getItem("usu")) || [] 
    const valiusu = usuarios.find(usu => usu.correo === correo)

    if (valiusu) {
        alert("El usuario ya esta registrado")
    }
     usuarios.push({correo: correo, contraseña:contraseña})
     localStorage.setItem("usuarios", JSON.stringify(usuarios))
     alert("Registro existoso")
     window.location.href= "login.html"
     
})











