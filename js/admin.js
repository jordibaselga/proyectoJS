import { datosUsuario, getUser, getCookie, Usuario } from './usuario.js ';
import { dibujarLogin } from './login.js';
export { admin };

function dibujarUsuarios(users) {
    document.querySelector('#main').innerHTML = '';
    for (let usu of users) {
        let datos = `<div class="card" style="width: 18rem;"><h3 class="card-title">${usu.nombre}</h3>
            <p>${usu.saldo}</p>
            <img class="card-img-top"  src="${usu.fotoCarne}"> </img>
            </div><th><br>`;
        let bloque = document.createElement('div');
        bloque.classList.add('container');
        bloque.innerHTML = datos;
        document.querySelector('#main').append(bloque);

    }
}


async function admin() {
    let response = await fetch('./json/usuarios.json');
    let users = await response.json();
    let usuario = await getUser(getCookie('usuario'));
    console.log(usuario);
    document.querySelector('#usuario').addEventListener('click', () => {
        console.log(usuario.nombre);
        if (usuario.nombre === 'admin') {

            return dibujarUsuarios(users);
        } else {
            //document.cookie = 'usuario=; expires:Thu, 01 Jan  1970 00:00:00 UTC; path=/;';
            return dibujarLogin();
        }
    })

}

