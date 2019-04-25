import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

/** Lista de dados iniciais da aplicação */
let decks = {
    Quimica: {
        title: 'Química',
        questions: [
            {
                question: 'O número do período é o número da camada eletrônica. Verdadeiro ou falso?',
                answer: 'Verdadeiro'
            },
            {
                question: 'Qual o elemento químico é um metal e é líquido à temperatura ambiente?',
                answer: 'Mercúrio'
            },
        ]
    },
    Fisica: {
        title: 'Física',
        questions: [
            {
                question: 'Por quem foi introduzida, em 1798, a ideia de que o calor é energia?',
                answer: 'Benjamin Thompson – Conde de Rumford'
            },
            {
                question: 'Quais as unidades de medidas utilizadas para medir calor?',
                answer: 'Celsius e Joule'
            },
            {
                question: 'Qual o nome do processo de transmissão de calor?',
                answer: 'Condução'
            }
        ]
    }
}

/** Retorna os dados iniciais da aplicação para a API */
function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

/** Formata os dados do retorno (Utilizado na API) */
export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}