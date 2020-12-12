export { cartaMoneda };
import { monedasImportantes } from './mercado.js';
import { getUser, getCookie } from './usuario.js';
//import {bitcoin} from './datosCrypto.js';
async function cartaMoneda(idMoneda) {
  let usuario = await getUser(getCookie('usuario'));
  document.querySelector('#main').innerHTML = '';
  let datosMoneda = document.createElement('div');
  datosMoneda.classList.add('container');
  let indiceMoneda = '';
  let valorMoneda;
  switch (idMoneda) {
    case 'invertir0':
      indiceMoneda = 0;
      valorMoneda = 100;
      break;
    case 'invertir1':
      indiceMoneda = 1;
      valorMoneda = 50;
      break;
    case 'invertir2':
      indiceMoneda = 2;
      valorMoneda = 10;
      break;
  }
  datosMoneda.innerHTML = `
    <div class="form-row">
      <div class="col">
        <label type="text" class="form-control">Usuario:  ${usuario.nombre}</label>
      </div><br>
      <div class="col">
        <label type="text" class="form-control">Saldo Disponible:  ${usuario.saldo} </label>
      </div>
    </div>
    <br><br>
    <h2>${monedasImportantes[indiceMoneda]}</h2>
    <form>  
    <div class="form-row">
      <div class="col">
      <label type="text">Cantidad de dinero a invertir:</label>
      <input id="cantidadCompra" type="number" class="form-control">
      </div>
    </div><br>
    <div class="form-row">
    <div class="col">
    <label type="text" class="form-control">Valor: ${valorMoneda}</label>
  </div><br>
    <div class="col">
        <label type="text" class="form-control">Cantidad:<span id="valor"></span> </label>
      </div><br>
      </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" required="required/>
        <label class="form-check-label" for="gridCheck">
        Confirma compra
        </label>
      </div>
    </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    `;
  document.querySelector('#main').appendChild(datosMoneda);

  document.querySelector('#cantidadCompra').addEventListener('change', (event) => {
    if (usuario.saldo < event.target.value) {
      let avsioError = document.createElement('p');
      avsioError.textContent = 'Error al comprar. Compra superior al saldo';
      avsioError.style.color = 'red';
      document.querySelector('form').appendChild(avsioError);
    }else{
      let valor= document.querySelector('#valor');
      let valorCantidad=event.target.value / valorMoneda;
      console.log(valorCantidad);
    }
  })

}
