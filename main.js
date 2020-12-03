import { dibujarMonedas } from "./js/monedas.js";
import { dibujarLogin } from "./js/login.js";
import { dibujarNoticias } from "./js/noticias.js";


window.addEventListener('load', () => {

    document.querySelector('#estadisticas').addEventListener('click', () => {
        dibujarMonedas();
    });

    document.querySelector('#login').addEventListener('click', () => {
        document.body.innerHTML = '';
        dibujarLogin();
    });

    document.querySelector('#noticias').addEventListener('click', () => {
        dibujarNoticias();
    });
});
