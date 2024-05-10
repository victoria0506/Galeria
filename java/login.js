const btnsesion = document.querySelector("#sesion")

btnsesion.addEventListener("click", (e) =>{
    e.preventDefault()
    const correo = document.querySelector("#correo").value
    const contraseña = document.querySelector("#contraseña").value
    const nomUsuario = document.querySelector("#usuario").value
    

    if (correo != "" && contraseña != ""){

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
        const valiusu = usuarios.find(usu => usu.correo == correo && usu.contraseña == contraseña)

        if(!valiusu){
            alert("Contraseña y/o correo incorrectos")

        }else{

            alert("Bienvenido")
            window.location.href= "index.html"
            localStorage.setItem("usuario", JSON.stringify(usuarios))
        }

    }else{

        alert("Ingrese sus datos")
    }
 

})