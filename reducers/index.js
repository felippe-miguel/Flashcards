import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions'

/**
 * Reducers da aplicação
 * Arquivo único por se tratar de uma aplicação com pouca alteração de estado
 * 
 * @param state  - state da aplicação
 * @param action - action que está sendo disparada
 */
export default function decks(state={}, action) {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    title: state[action.deckId].title,
                    questions: state[action.deckId].questions.concat({
                        question: action.question,
                        answer: action.answer
                    })
                }
            }
        case ADD_DECK: {
            return {
                ...state,
                [action.deckId]: action.deck
            }
        }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}