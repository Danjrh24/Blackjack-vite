
import _ from 'underscore';

import { crearDeck, addImage, acumularPuntos, disabledButtons, btnPedirCarta, btnDetener, btnNuevo, jugadorCartasContainer, showPuntos, turnoComputadora } from "./usecases";

const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C','D','H','S'],
        especiales = ['A','J','K','Q'];
        
    let puntosJugadores = [];

    // Esta función inicializa el juego 
    const inicializarJuego = ( numJugadores = 1) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        jugadorCartasContainer.forEach( (div) => div.innerHTML = '' );
        for (let i = 0 ; i < numJugadores ; i++){
            puntosJugadores.push(0);
        }
    }
    //EVENTOS
    btnPedirCarta.addEventListener( 'click', () => {

        const carta = addImage( puntosJugadores, deck, 0 );
        const puntosJugador = acumularPuntos( puntosJugadores, 0, carta );
        ( puntosJugador >= 21 ) 
        ? disabledButtons(true)
        : disabledButtons(false);
        setTimeout(() => {
            ( puntosJugador === 21 ) 
            ? (console.warn('21, genial!'), turnoComputadora(puntosJugadores, deck, puntosJugador)) 
            :( puntosJugador > 21 ) ? (alert('Computadora gana')) 
            : ''
        }, 300);
        return puntosJugador;
    }) ;

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disable = true;
        turnoComputadora(puntosJugadores, deck, puntosJugadores[0]);
    })

    btnNuevo.addEventListener('click', () => {

        console.clear();

        inicializarJuego(2);

        showPuntos.forEach( (elem) => elem.innerHTML = 0 );

        disabledButtons(false);

    })

    return {
        nuevoJuego: inicializarJuego
    };

})();