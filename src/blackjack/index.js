
import _ from 'underscore';
import {crearDeck} from './usecases/crear-deck';

const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C','D','H','S'],
        especiales = ['A','J','K','Q'];
        
    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedirCarta = document.querySelector('#btnPedirCarta'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        jugadorCartasContainer = document.querySelectorAll('.divCartas'),
        showPuntos = document.querySelectorAll('small');
        
    //Esta función inicializa el juego 
    const inicializarJuego = ( numJugadores = 1) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        jugadorCartasContainer.forEach( (div) => div.innerHTML = '' );
        for (let i = 0 ; i < numJugadores ; i++){
            puntosJugadores.push(0);
        }
    }
    //Esta funcion desabilita los botones de pedir carta y detener
    const disabledButtons = (boolean) =>{
        btnPedirCarta.disabled = boolean;
        btnDetener.disabled = boolean;
    }
    //Esta funcion ejecuta la funcion de pedirCartas y agrega una imagen al contenenedor del jugador o la 
    //computadora con la carta obtenida 
    const addImage = ( turno) => {
        const carta = pedirCartas();
        const cartaImg = document.createElement('img');
        jugadorCartasContainer[turno].append(cartaImg);
        cartaImg.className = 'carta';
        cartaImg.src = `assets/cartas/${carta}.png`
        return carta;
    }
    //Esta funcion acumula los puntos de los jugadores y lo muestra
    const acumularPuntos = (turno,carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        showPuntos[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    //Esta funcion sirve para pedir una carta
    const pedirCartas = () => {
        if (deck.length === 0 ){
            throw 'No hay cartas en el deck';
        }
        let carta = deck.pop();
        console.log(carta);
        return carta;
    }
    //Esta funcion sirve para obtener el valor de la carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length-1);
        return ( valor === 'A') 
        ? 11 
        :( isNaN(valor) ) 
        ? 10 
        : valor * 1;
    }

    //TURNO DE LA COMPUTADORA
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora;
        do{
            const carta = addImage(jugadorCartasContainer.length-1);
            puntosComputadora = acumularPuntos(puntosJugadores.length-1,carta)
        }while( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );
        ( puntosComputadora >= 21 || puntosComputadora >= puntosMinimos ) 
        ? disabledButtons(true)
        : disabledButtons(false);
        setTimeout(() => {
            ( puntosComputadora === puntosMinimos ) 
            ? (alert('Nadie gana :('))
            :( puntosComputadora > 21 ) 
            ?(alert('Felicidades, ganaste!!')) 
            :(alert('Computadora gana'));
        }, 300);
    }

    //EVENTOS
    btnPedirCarta.addEventListener( 'click', () => {

        const carta = addImage(0);
        const puntosJugador = acumularPuntos(0, carta);
        ( puntosJugador >= 21 ) 
        ? disabledButtons(true)
        : disabledButtons(false);
        setTimeout(() => {
            ( puntosJugador === 21 ) 
            ? (console.warn('21, genial!'), turnoComputadora(puntosJugador)) 
            :( puntosJugador > 21 ) ? (alert('Computadora gana')) 
            : ''
        }, 300);
        return puntosJugador;
    }) ;

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disable = true;
        turnoComputadora(puntosJugadores[0]);
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






