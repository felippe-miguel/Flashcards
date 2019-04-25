import { AsyncStorage } from 'react-native'
import { formatDecksResults, DECKS_KEY } from './_decks'

/** Requisição dos Decks da API */
export function getDecks () {
    return AsyncStorage.getItem(DECKS_KEY)
    .then(formatDecksResults)
}

/** Salva um Deck na storage */
export function saveDeck(key, deck) {
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
        [key]: deck
    }))
}

/** Salva um Card na storage */
export function saveCard(key, question, answer) {
    AsyncStorage.getItem(DECKS_KEY).then((result) => {
        let decks = JSON.parse(result)
        decks[key].questions.push({question: question, answer: answer})
        AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decks))
    })
}