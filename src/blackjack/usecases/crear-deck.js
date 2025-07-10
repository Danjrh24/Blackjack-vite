import _ from 'underscore';

export const crearDeck = (tipoDeCarta, tipoEspeciales) => {

        let deck = [];
        for ( let i = 2; i <= 10; i++) {
            for( let tipo of tipoDeCarta){
                deck.push(i + tipo);
            }
        }
        for(let especial of tipoEspeciales){
            for( let tipo of tipoDeCarta){
                deck.push(especial + tipo);
            }
        }
        return deck = _.shuffle(deck)

    }