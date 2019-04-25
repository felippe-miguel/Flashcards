import { AsyncStorage } from 'react-native'

export const DECKS = 'DECKS'

/**
 * Lista de dados iniciais da aplicação 
 * Questões retiradas do site  https://rachacuca.com.br
 * Referência de estrutura em:
 * https://github.com/AdithyaBhat17/udacity-flashcards
 */
let decks = {
    Quimica: {
        title: 'Química',
        cards: [
            {
                pergunta: 'O número do período é o número da camada eletrônica. Verdadeiro ou falso?',
                resposta: 'Verdadeiro'
            },
            {
                pergunta: 'Qual o elemento químico é um metal e é líquido à temperatura ambiente?',
                resposta: 'Mercúrio'
            },
        ]
    },
    Fisica: {
        title: 'Física',
        cards: [
            {
                pergunta: 'Por quem foi introduzida, em 1798, a ideia de que o calor é energia?',
                resposta: 'Benjamin Thompson – Conde de Rumford'
            },
            {
                pergunta: 'Quais as unidades de medidas utilizadas para medir calor?',
                resposta: 'Celsius e Joule'
            },
            {
                pergunta: 'Qual o nome do processo de transmissão de calor?',
                resposta: 'Condução'
            }
        ]
    },
    Historia: {
        title: 'História',
        cards: [
            {
                pergunta: 'Qual foi o primeiro faraó do Egito?',
                resposta: 'Menés'
            },
            {
                pergunta: 'Em qual mar o Rio Nilo deságua?',
                resposta: 'Mar Mediterrânio'
            },
            {
                pergunta: 'Qual o nome do processo em que o corpo do falecido era tratado, e depois envolvido em faixas de linho?',
                resposta: 'Mumificação'
            }
        ]
    }
}

/** Retorna os dados iniciais da aplicação para a API */
function setData() {
    AsyncStorage.setItem(DECKS, JSON.stringify(decks))
    return decks
}

/** Formata os dados do retorno (Utilizado na API) */
export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}