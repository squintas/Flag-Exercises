// 1º - Criar Array com palavras.

var listaNumeros = ['cao', 'gato', 'zebra', 'girafa', 'cavalo'];


// 2º - Perguntar ao utilizador por um número.

var numero = prompt("Digite a sua palavra");

// 3º - Verificar se o número inserido está no array.
// 4º - Dizer que SIM/NÃO.

if (listaNumeros.includes(numero)) {
    alert("A sua palavra ESTÁ na lista!")
} else {
    alert("A sua palavra NÃO ESTÁ na lista!")
}