export const ADICIONAR_CARD = 'ADICIONAR_CARD'
export const ADICIONAR_DECK = 'ADICIONAR_DECK'
export const GET_DECKS = 'GET_DECKS'

export function addCard(deckId, pergunta, resposta) {
    return {
        type: ADICIONAR_CARD,
        deckId,
        pergunta,
        resposta
    }
}

export function addDeck(deckId, deck) {
    return {
        type: ADICIONAR_DECK,
        deckId,
        deck
    }
}

export function receiveDecks(decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}