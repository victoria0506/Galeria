

const btnregistro = document.querySelector("#registro")

btnregistro.addEventListener("click", (e) =>{
    
    e.preventDefault()
     
    const correo = document.querySelector("#correo").value
    const contraseña = document.querySelector("#contraseña").value

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [] 
    const valiusu = usuarios.find(usu => usu.correo === correo)

    if (valiusu) {
        return alert("El usuario ya esta registrado")
    }
     usuarios.push({correo: correo, contraseña:contraseña})
     alert("Registro existoso")
     localStorage.setItem("usuarios", JSON.stringify(usuarios))
     window.location.href= "login.html"
     
})











