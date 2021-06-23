// Fazer com que o Input seja escrito na console




var texto = document.querySelector(".texto")
var btn = document.getElementById("btn");

// Por Função

function escreveConsole() {
    console.log(texto.value);
}

// btn.addEventListener("click", escreveConsole);

// Por função anonima

// btn.addEventListener("click", function() { console.log(texto.value); });


// Por arrow function

btn.addEventListener("click", () => { console.log(texto.value); });