

function verif () {
    var dt = new Date()
    var y = dt.getFullYear()
    var ano = document.getElementById('anonasc')
    var res = document.querySelector('div#res')
    var res2 = document.querySelector('div#res2')
    if (ano.value > y || ano.value.length == 0) {
        window.alert('[ERRO] Verifique os dados!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = y - Number(ano.value)
        var gen
        if (sexo[0].checked) {
            gen = 'Homem'
        }

        else {
            gen = 'Mulher'
        }
        res.innerHTML = `${gen} de ${idade} anos.`


    } 

    
    if (gen == 'Homem')  {
        if (idade < 15){
        res2.innerHTML=
        `<img src="images/criancaM.png" height=200px width= 200px alt="Criança Masculino">`
        } else if (idade < 20){
        res2.innerHTML=
        `<img src="images/jovemM.png" height=200px width= 200px alt="Jovem Masculino">`
        } else if (idade < 50) {
        res2.innerHTML=
        `<img src="images/adultoM.png" height=200px width= 200px alt="Adulto Masculino">`
        } else if (idade >= 50) {
        res2.innerHTML=
        `<img src="images/idosoM.png" height=200px width= 200px alt="Idoso Masculino">`
    }
    }
    if (gen == 'Mulher')  {
        if (idade < 15){
        res2.innerHTML=
        `<img src="images/criancaF.png" height=200px width= 200px alt="Criança Feminina">`
        } else if (idade < 20){
        res2.innerHTML=
        `<img src="images/jovemF.png" height=200px width= 200px alt="Jovem Feminina">`
        } else if (idade < 50) {
        res2.innerHTML=
        `<img src="images/adultoF.png" height=200px width= 200px alt="Adulta Feminina">`
        } else if (idade >= 50) {
        res2.innerHTML=
        `<img src="images/idosoF.png" height=200px width= 200px alt="Idosa Feminina">`
    }
    }


}

