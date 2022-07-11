const botao = document.getElementById("mode-selector")
botao.addEventListener("click", alteraMode)

var elemento_footer = document.querySelector("footer")
var elemento_button = document.querySelector("button")
var elemento_h1 = document.getElementById("page-title")
var elemento_body = document.querySelector("body")

function alteraMode() {
    alterarElemento()
    alterarTexto()
}

function alterarTexto(){
    if(botao.classList.contains("dark-mode")) {
        botao.innerHTML = "Light Mode"
        elemento_h1.innerHTML = "Dark Mode ON"
    } else {
        botao.innerHTML = "Dark Mode"
        elemento_h1.innerHTML = "Light Mode ON"
    }

}

function alterarElemento(){
    elemento_body.classList.toggle("dark-mode")
    elemento_footer.classList.toggle("dark-mode")
    elemento_button.classList.toggle("dark-mode")
}

