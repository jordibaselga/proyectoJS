export { dibujarLogin,validar};
import { datosUsuario,Usuario,getUser } from './usuario.js';

function dibujarLogin() {
  let login = document.createElement('div');
  login.innerHTML = `
<div class="login-box">
<h2>Login</h2>
<form id="validar">
  <div class="user-box">
    <input type="text" name="usuario" required="">
    <label>Username</label>
  </div>
  <div class="user-box">
    <input type="password" name="password" required="">
    <label>Password</label>
  </div>
  <a>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    ENTRAR
    <input type="submit" value="" class="glyphicon glyphicon-ok">
  </a>
</form>
</div>
`;
  document.querySelector('#main').appendChild(login);
};

async function validar() {
    let response = await fetch('./json/usuarios.json');
    let users = await response.json();
    console.log(users);
    console.log(document.querySelector('#validar'));

    document.querySelector('#validar').addEventListener('submit',async (event) => {
      event.preventDefault();
      let userValid = false;
      for (const user of users) {
        console.log(user.nombre, event.target[0].value, user.password, event.target[1].value);
        if (user.nombre == event.target[0].value && user.password == event.target[1].value) {
          userValid = true;

          function setCookie(cnombre, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cnombre + "=" + cvalue + ";" + expires + ";path=/";
          }
          setCookie('usuario',user.nombre,365);
          
          /*   DATOS EN LES COOKIES USUARIO 
          let usuarioActual=await getUser(user.nombre);
          console.log(usuarioActual);*/
        }
      }
      if (!userValid) {
        let avsioError = document.createElement('p');
        avsioError.textContent = 'Error al validar';
        avsioError.style.color = 'red';
        document.querySelector('form').appendChild(avsioError);
      } else {
        datosUsuario();
      }
    })
}