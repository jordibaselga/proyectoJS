
export{bitcoin};
function makeRequest(method, url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () { done(null, xhr.response); };
    xhr.onerror = function () { done(xhr.response); };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
    makeRequest('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        function (err, resultat) {
            if (err) { throw err; }
            let llista = JSON.parse(resultat);
            //console.log(llista);
            bitcoin = new CryptoMoneda(llista[0]['name'], llista[0]['current_price'], llista[0]['max_supply']);
            ethereum = new CryptoMoneda(llista[1]['name'], llista[1]['current_price'], llista[1]['max_supply']);
            //console.log(bitcoin);
        }
    )
})

class CryptoMoneda {
    constructor(name, valorActual, valorMaximo) {
        this.name = name;
        this.valor = valorActual;
        this.valorMaximo = valorMaximo;
    }
    static getName() { return this.name }
    static setName(name) { this.name = name }
}
