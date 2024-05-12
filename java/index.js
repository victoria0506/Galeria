
let btnSubir = document.getElementById("btnSubir")
let titulo = document.getElementById("titulo")
let img = document.getElementById("img")
const contenedorImg = document.getElementById(" myModal")
let show = document.querySelector("#tituloImg")
let show1 = document.querySelector("#tituImg")

btnSubir.addEventListener("click", function(){
   
    const archivo = img.files[0];
    const reader = new FileReader();

     //console.log(reader)
    reader.onload= function(event) {
        const img64= event.target.result
        // console.log(img64)
        const imagen ={
            titulo: titulo.value,
            img: img64
        }
         localStorage.setItem("imagen", JSON.stringify(imagen))
    }
    //load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar
    reader.addEventListener("load", ()=>{
        
        const image = new Image()
        image.height = 100
        image.src = reader.result
        contenedorImg.appendChild(image)
        show.innerHTML = titulo.value
        //show1.innerHTML = titulo.value
        
    })
    reader.readAsDataURL(archivo);
})





















