
let btnSubir = document.getElementById("btnSubir")
let titulo = document.getElementById("titulo")
const contenedorImg = document.getElementById("Modal")
let titu = document.querySelector("#tituloImg")
let titu1 = document.querySelector("#tituImg")

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
        image.height = 150
        image.src = reader.result

        imagen(image);
        contenedorImg.appendChild(image)
        titu.innerHTML = titulo.value
        //show1.innerHTML = titulo.value
        
    })
    reader.readAsDataURL(archivo);
})

function imagen(image) {
    console.log(image.src)

    contenedorImg.addEventListener("click", function() {
        let respu =  confirm("Desea abrir imagen")
        if(respu) {
         let imagenM = document.getElementById("imagenM");
         
         console.log(imagenM)
         imagenM.src=image.src
    
       
            const alertDialog = document.querySelector("#alert-dialog")
            console.log(alertDialog)
            alertDialog.show()
        }else{
            
        }
       
    })
}


