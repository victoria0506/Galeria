if (document.getElementById("pin1")) {
    let van = document.getElementById("van")
    let btn = document.getElementById("btn")
    let span = document.getElementsByClassName("cerrar")[0]
    let body = document.getElementsByTagName("body")[0]

    btn.onclick = function() {
        van.style.display = "block"
        body.style.position = "static"
        body.style.height = "100%"
        body.style.overflow = "hidden"
    }
    span.onclick = function() {
        van.style.display = "none"
        body.style.position = "inherit"
        body.style.height = "auto"
        body.style.overflow = "visible"
    }
    window.onclick = function(event) {
        if (event.target == van) {
            van.style.display = "none"
            body.style.position = "inherit"
            body.style.height = "auto"
            body.style.overflow = "visible"
        }
    }
}