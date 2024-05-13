//variables, se llaman por medio de un id
let btnSubir = document.getElementById("btnSubir")
let titulo = document.getElementById("titulo")
const contenedorImg = document.getElementById("Modal")
let titu = document.querySelector("#tituloImg")
let titu1 = document.querySelector("#tituImg")


//evento para pasar la imgen a base base64
btnSubir.addEventListener("click", function(){
   
    const archivo = img.files[0];
    //pasar a base 64
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
    //load funciona cuando todo deja de cargar
    //evento pasar cargar la imagen en la pagina 
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

//funcion para el modal
function imagen(image) {
    console.log(image.src)

    //cuando se le de click a la imagen se muestra la alert de si quiere agrandar la imagen si o no
    contenedorImg.addEventListener("click", function() {
        let respu =  confirm("Desea abrir imagen")
        if(respu) {
         let imagenM = document.getElementById("imagenM");
         
         //console.log(imagenM)
         imagenM.src=image.src
    
            //let de el modal ETIQUETA DIALOG
            const alertDialog = document.querySelector("#alert-dialog")
            //console.log(alertDialog)
            //para cerrar el modal
            alertDialog.show()
        }else{
            
        }
       
    })
}


