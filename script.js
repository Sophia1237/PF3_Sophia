document.getElementById("btncalcular").onclick=function(){

    let valorAplicado =  parseFloat(document.getElementById("valorAplicado").value)
    let taxaJuros =  parseFloat(document.getElementById("taxaJuros").value / 100)
    let numeroParcelas =  parseFloat(document.getElementById("numeroParcelas").value)

    if (valorAplicado != 0 && taxaJuros != 0 && numeroParcelas != 0){
        let produto = (valorAplicado*((((1+taxaJuros)**numeroParcelas)-1)/taxaJuros)).toFixed(3)
        var formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'BRL',
        });
        alert (`Jose da Silva, se voce aplicar ${formatter.format(valorAplicado)}, à taxa de juros de ${taxaJuros}% ao mês, durante ${numeroParcelas} meses, acumulará uma poupança de ${formatter.format(produto)}`)
    }
    

}