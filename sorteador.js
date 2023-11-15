function sortear() {
    var txtnum = window.document.getElementById('txtnumero')
    var num =Number(txtnum.value)
    var res = window.document.getElementById('res')
    var randomNumero = Math.floor((Math.random() * (num))+1);
    res.innerHTML = `<p>O número sorteado foi: ${randomNumero}.</p>`
}