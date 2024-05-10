
let btnSubir = document.getElementById("btnSubir")
let titulo = document.getElementById("titulo")
let img = document.getElementById("img")
const preview = document.getElementById("preview")

btnSubir.addEventListener("click", function(){
   
    const archivo = img.files[0];
    const reader = new FileReader();

 
    reader.onload= function(event) {
        const img64= event.target.result;
        // console.log(img64)
        const porta ={
            titulo: titulo.value,
            img: img64
        }

        localStorage.setItem("porta", JSON.stringify(porta))
    }

    reader.addEventListener("load", () =>{
        
        const image = new Image();
        image.height = 200;
        image.src = reader.result;
        preview.appendChild(image);

        let show = document.querySelector("#tituloImg")
        show.innerHTML = titulo.value
        
    })

    reader.readAsDataURL(archivo);
   
})




