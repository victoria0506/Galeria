
let btnSubir = document.getElementById("btnSubir")
let titulo = document.getElementById("titulo")
let img = document.getElementById("img")

btnSubir.addEventListener("click", function(){
   
    const archivo = img.files[0];
    const reader = new FileReader();

    console.log(archivo)
    reader.onload= function(event) {
        const img64= event.target.result;
        // console.log(img64)
        const porta ={
            titulo: titulo.value,
            img: img64
        }

        localStorage.setItem("porta", JSON.stringify(porta))
    }
   
    reader.readAsDataURL(archivo);
   
})


