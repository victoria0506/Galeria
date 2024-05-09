const btnsesion = document.querySelector("#sesion")

btnsesion.addEventListener("click", (e) =>{
    e.preventDefault()
    const correo = document.querySelector("#correo").value
    const contraseña = document.querySelector("#contraseña").value
    const nomUsuario = document.querySelector("#usuario").value
 
    const usuarios = JSON.parse(localStorage.getItem("usu")) || []
    const valiusu = usuarios.find(usu => usu.correo == correo, usu => usu.contraseña == contraseña)
    if(!valiusu){
        alert("Datos invalidos")
    }else{
        alert("Bienvenido")
        window.location.href= "index.html"
    }
})