import { dibujarMonedas } from "./js/mercado.js";
import { dibujarLogin ,validar} from "./js/login.js";
import { dibujarNoticias } from "./js/noticias.js";
import { admin} from './js/admin.js';
'use strict';
window.addEventListener('load', () => {
   
    document.querySelector('#estadisticas').addEventListener('click', () => {
        dibujarMonedas();
        
    });

    document.querySelector('#login').addEventListener('click', () => {
        dibujarLogin();
        validar();
    });
    
    document.querySelector('#noticias').addEventListener('click', () => {
        dibujarNoticias();
    });
    admin();
    
    /*document.querySelector('#logout').addEventListener('click', () => {
        document.cookie = 'usuario=; expires:Thu, 01 Jan  1970 00:00:00 UTC; path=/;';
        dibujarNoticias();
    });*/
});
