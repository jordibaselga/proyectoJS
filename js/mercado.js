export { dibujarMonedas };
export { monedasImportantes };

import { cartaMoneda} from "./invertir.js";

const monedasImportantes = ['Bitcoin', 'Ethereum', 'XRP'];
const fotosMonedas = ['img/bitcoin.jpg', 'img/ethereum.jpg', 'img/xrp.jpg'];


function dibujarMonedas() {
  document.querySelector('#main').innerHTML = '';

  const tablaDatos = document.createElement('div');

  for (let index = 0; index < 3; index++) {
    tablaDatos.innerHTML += `
    <div class="card" style="width: 18rem; margin-left:15px;">
    <img class="card-img-top" src="${fotosMonedas[index]}" alt="Card image cap">
    <div class="card-body">
    <h3 class="card-title">${monedasImportantes[index]}</h3>
    <a class="btn btn-success botonInvertir" id="invertir${index}">INVERTIR</a>
    </div>
    </div>
    <th><br>
   
    `;
    tablaDatos.classList.add('form-row');
    tablaDatos.style.padding='10%';
    document.querySelector('#main').appendChild(tablaDatos);
  }
 
  Array.from(document.querySelectorAll('.botonInvertir')).forEach(boton =>{
    boton.addEventListener('click', (event) => {
        cartaMoneda(event.target.id);
        });
      
  });
  
};

