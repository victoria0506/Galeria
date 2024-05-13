
let btnSubir = document.getElementById("btnSubir")
let titulo = document.getElementById("titulo")
const contenedorImg = document.getElementById("Modal")
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

//const imagenes = document.querySelectorAll("img")

//imagenes.forEach(image => {
     //image.addEventListener("click", ()=>{
        //addImage(image.getAttribute("src"), image.getAttribute("alt"))
        //contenedorImg.classList.toggle()
    //})
//})


















