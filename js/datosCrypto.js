export {CryptoMoneda};
function makeRequest(method, url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () { done(null, xhr.response); };
    xhr.onerror = function () { done(xhr.response); };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
    makeRequest('GET', 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=1b63d79b482e225d982f01a5b8e0e52840fcf7363fe0aa636edc3c2ae97ba944',
        function (err, resultat) {
            if (err) { throw err; }
            let llista = JSON.parse(resultat);
       
            bitcoin = new CryptoMoneda("Bitcoin", llista.DISPLAY.BTC.EUR.PRICE,llista.DISPLAY.BTC.EUR.HIGHDAY,llista.DISPLAY.BTC.EUR.LOWDAY);
        }
    )
})

class CryptoMoneda {
    constructor(name, valorActual, valorMaximo, valorMinimo) {
        this.name = name;
        this.valor = valorActual = valorActual;
        this.valorMaximo = valorMaximo;
        this.valorMinimo = valorMinimo;
    }
}
