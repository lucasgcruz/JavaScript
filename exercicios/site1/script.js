var dt = new Date
var hr = dt.getHours()
var img = document.querySelector('div#img')
var info = document.querySelector('div#info')
info.innerHTML = `Agora são <strong>${hr}</strong> horas.`


if (hr >= 0 && hr < 6) {
    img.innerHTML = `<img src="images/madru.png" width=250px height=250px alt="Madrugada">`
    document.body.style.background = '#403b2c'

} else if ( hr < 13 ) {
    img.innerHTML = `<img src="images/manha.png" width=250px height=250px alt="Manhã">`
    document.body.style.background = '#77adb5'

} else if ( hr < 18 ) {
    img.innerHTML = `<img src="images/tarde.png" width=250px height=250px alt="Tarde">`
    document.body.style.background = '#ad875c'


} else if ( hr < 24 ) {
    img.innerHTML = `<img src="images/noite.png" width=250px height=250px alt="Noite">`
    document.body.style.background = '#282236'
}