function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >0 && idade < 2) {
                // baby boy
                img.setAttribute('src', 'babyboy.png')
            } else if (idade >= 2 && idade < 11) {
                // menino
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 11 && idade < 18) {
                // jovenzinho
                img.setAttribute('src', 'jovenzinho.png')
            } else if (idade >= 18 && idade < 35) {
                // adultinho
                img.setAttribute('src', 'adultinho.png')
            } else if (idade >= 35 && idade < 60) {
                // adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'MULHER'
            if (idade >= 0 && idade < 2) {
                // baby girl
                img.setAttribute('src', 'babygirl.png')
            } else if (idade >= 2 && idade < 11) {
                // menina
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 11 && idade < 18) {
                // jovenzinha
                img.setAttribute('src', 'jovenzinha.png')
            } else if (idade >= 18 && idade < 35) {
                // adultinha
                img.setAttribute('src', 'adultinha.png')
            } else if (idade >= 35 && idade < 60) {
                // adulta
                img.setAttribute('src', 'adulta.png')
            } else {
                // idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
   }
}