export { datosUsuario, getCookie, Usuario };

let nombre = getCookie('usuario');

class Usuario {
  constructor(datosUsuario) {
    Object.assign(this, datosUsuario);
  }

}

function comprar(tipoMoneda, cantidadElegida) {
  let monedasUsuario = [];
  if (this.saldoEuros >= cantidadElegida) {
    monedasUsuario.push(tipoMoneda);

  }
  return monedasUsuario;
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function getUser(name) {
  return new Promise(async (resolve) => {
    let response = await fetch('/json/usuarios.json', {});
    response = await response.json();
    response.forEach(element => {
      if (name == element.nombre) {
        resolve(new Usuario(element));
      }
    });
    resolve(null);
  });

}

function datosUsuario() {
  document.querySelector('#main').innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="./img/persona2.jpeg" alt="Card image cap">
    <div class="card-body">
    <h1 class="card-title">${nombre}</h1>
    <p class="card-text">Saldo Disponible: </p>

    </div>
    </div><th><br>
   
    `;
  console.log(usuario);
}