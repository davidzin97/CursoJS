function analisarNumero() {
    const numero = document.getElementById('numero').value
    const resultado = document.getElementById('resultado')

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.'
    } else {
        if (numero % 2 === 0){
            resultado.textContent = `${numero} é um número Par.`
        } else if {
            resultado.textContent = `${numero} é um número Impar.`
        } else {
            resultado.textContent = 'Você digitou zero.'
        }
    }
}