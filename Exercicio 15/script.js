function verificar() {
   
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value >= ano){  
    window.alert('[ERRO] Verifique os Dados e Tente Novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src','homencrianca.png')
               }else if (idade < 25) {
                   //jovem
                   img.setAttribute('src','homenjovem.png')
               }else if (idade < 54) {
                   //Adulto
                   img.setAttribute('src','homenadulto.png')
               } else {
                   //idoso
                   img.setAttribute('src','homenidoso.png')
               }
           
        } 
        else {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src','mulhercrianca.png')
               }else if (idade < 25) {
                   //jovem
                   img.setAttribute('src','mulherjovem.png')
               }else if (idade < 54) {
                   //Adulto
                   img.setAttribute('src','mulheradulta.png')
               } else {
                   //idoso
                   img.setAttribute('src','mulheridosa.png')
               }
        }
        
        res.style.padding = 'px'
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos: ${genero} com  ${idade} Anos`
        res.appendChild(img)
    }
}