import { ADICIONAR_CARD, ADICIONAR_DECK, GET_DECKS } from '../actions'

/**
 * Reducers da aplicação
 * Arquivo único por se tratar de uma aplicação com pouca alteração de estado
 * 
 * @param state  - state da aplicação
 * @param action - action que está sendo disparada
 */
export default function decks(state={}, action) {
    switch (action.type) {
        case ADICIONAR_CARD:
            return {
                ...state,
                [action.deckId]: {
                    title: state[action.deckId].title,
                    cards: state[action.deckId].cards.concat({
                        pergunta: action.pergunta,
                        resposta: action.resposta
                    })
                }
            }
        case ADICIONAR_DECK: {
            return {
                ...state,
                [action.deckId]: action.deck
            }
        }
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}