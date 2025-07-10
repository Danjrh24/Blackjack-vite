import { btnPedirCarta, btnDetener } from "./referencias-html";

/**
 * Esta funcion desabilita los botones de pedir carta y detener
 * @param {Boolean} boolean ( true || false )
 */

export const disabledButtons = (boolean) =>{
        btnPedirCarta.disabled = boolean;
        btnDetener.disabled = boolean;
    }