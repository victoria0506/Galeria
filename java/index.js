
let btnSubir = document.getElementById("btnSubir")
let titulo = document.getElementById("titulo")
let img = document.getElementById("img")
const contenedorImg = document.getElementById("contec-img")
let show = document.querySelector("#tituloImg")

btnSubir.addEventListener("click", function(){
   
    const archivo = img.files[0];
    const reader = new FileReader();

     //console.log(reader)
    reader.onload= function(event) {
        const img64= event.target.result
        // console.log(img64)
        const porta ={
            titulo: titulo.value,
            img: img64
        }
        localStorage.setItem("porta", JSON.stringify(porta))
    }

    reader.addEventListener("load", ()=>{
        
        const image = new Image()
        image.height = 100
        image.src = reader.result
        contenedorImg.appendChild(image)
        show.innerHTML = titulo.value
        
    })

    reader.readAsDataURL(archivo);
})





