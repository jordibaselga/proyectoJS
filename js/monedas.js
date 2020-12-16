export { dibujarMonedas };
export { fotosMonedas };
import { cartaMoneda } from "./invertir.js";

const monedasImportantes = ['Bitcoin', 'Ethereum', 'XRP'];
const fotosMonedas = ['img/bitcoin.jpg', 'img/ethereum.jpg', 'img/xrp.jpg'];


function dibujarMonedas() {
  document.querySelector('#main').innerHTML = '';

  const tablaDatos = document.createElement('div');

  for (let index = 0; index < 3; index++) {
    tablaDatos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${fotosMonedas[index]}" alt="Card image cap">
    <div class="card-body">
    <h3 class="card-title">${monedasImportantes[index]}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a class="btn btn-success" id="invertir">INVERTIR</a>
    </div>
    </div><th><br>
   
    `;
    document.querySelector('#main').appendChild(tablaDatos);
  }
  document.querySelector('#invertir').addEventListener('click', () => {
    cartaMoneda();
  });
};

