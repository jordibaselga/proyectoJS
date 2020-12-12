import { dibujarMonedas } from "./js/mercado.js";
import { dibujarLogin ,validar} from "./js/login.js";
import { dibujarNoticias } from "./js/noticias.js";

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
    
});
