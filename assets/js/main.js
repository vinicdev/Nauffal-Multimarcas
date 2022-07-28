

function mostraValor() {
    let valor = document.getElementById("rangePreco").value
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `Valor escolhido: R$${valor}`
}