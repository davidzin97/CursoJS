function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        foto.src = 'Dia.png';
        document.body.style.background = '#fdebcc'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        foto.src = 'Tarde.png'
        document.body.style.background = '#f1af5d'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        foto.src = 'Noite.png'
        document.body.style.background = '#113751'
    }
}








