// 1º - Criar Array com números.

var listaNumeros = ['0', '1', '2', '3', '4', '5', '6'];


// 2º - Perguntar ao utilizador por um número.

var numero = prompt("Digite o seu número");

// 3º - Verificar se o número inserido está no array.
// 4º - Dizer que SIM/NÃO.

if (listaNumeros.includes(numero)) {
    alert("O seu número ESTÁ na lista!")
} else {
    alert("O seu número NÃO ESTÁ na lista!")
}