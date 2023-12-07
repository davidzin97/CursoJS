function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const tabuadaDiv = document.getElementById("tabuada");

    if (!isNaN(numero)) {
        let tabuadaHTML = "<h2>Tabuada de " + numero + "</h2>";
        tabuadaHTML += "<ul>";

        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            tabuadaHTML += "<li>" + numero + " x " + i + " = " + resultado + "</li>";
        }

        tabuadaHTML += "</ol>";
        tabuadaDiv.innerHTML = tabuadaHTML;
    } else {
        tabuadaDiv.innerHTML = "<p>Por favor, insira um número válido.</p>";
    }
}