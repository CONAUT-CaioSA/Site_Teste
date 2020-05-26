function ifKey() {
    if (event.key == "Enter") {
        nacionalidade()
    }
}
function nacionalidade() {
    var Nac = document.querySelector('input#txtName')
    var Res = document.querySelector('div#Resultado')
    if (Nac.value.toUpperCase() =='BRASILEIRO') {
        Res.innerHTML = '<p>Você é Brasileiro!</p>'
    } else {
        Res.innerHTML = '<p>Você é Estrangeiro!</p>'
    }
}