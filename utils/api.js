import { AsyncStorage } from 'react-native'
import { formatDecksResults, DECKS } from './decks_iniciais'

/** Requisição dos Decks da API */
export function getDecks () {
    return AsyncStorage.getItem(DECKS).then(formatDecksResults)
}

/** Salva um Deck na storage */
export function saveDeck(key, deck) {
    return AsyncStorage.mergeItem(DECKS, JSON.stringify({
        [key]: deck
    }))
}

/** Salva um Card na storage */
export function saveCard(key, pergunta, resposta) {
    AsyncStorage.getItem(DECKS).then((result) => {
        let decks = JSON.parse(result)
        decks[key].cards.push({pergunta: pergunta, resposta: resposta})
        AsyncStorage.mergeItem(DECKS, JSON.stringify(decks))
    })
}