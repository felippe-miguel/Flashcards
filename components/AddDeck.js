import React from 'react'
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'
import { connect } from 'react-redux'
import { white, black, lightBlue } from '../utils/colors'
import { idGenerator } from '../utils/helpers'

SubmitDeck = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
            <Text style={styles.submitBtnText}>Criar Deck</Text>
        </TouchableOpacity>
    )
}

class AddDeck extends React.Component{
    state = {
        nameOfDeck: ''
    }

    /**
     * Cria um objeto no formato do novo deck
     * Dispara a ação addDeck
     * Salva o deck com a api
     * Redireciona para a página de decks
     */
    submit = () => {
        const { nameOfDeck } = this.state

        if (nameOfDeck === '') {
            alert('O Deck precisa de um nome!')
            return
        }

        const deckId = idGenerator()
        const title = nameOfDeck
        const newDeck = { title: nameOfDeck.trim(), cards: []}
        this.props.dispatch(addDeck(deckId, newDeck))
        this.setState({nameOfDeck: ''})
        this.props.navigation.navigate('Deck', {deckId: deckId, deckName: title})
        saveDeck(deckId, newDeck)
    }

    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.pergunta}>Informe o nome do novo Deck!</Text>
                <TextInput value={this.state.nameOfDeck} style={styles.input}
                 onChangeText={(nameOfDeck) => this.setState({nameOfDeck})}
                />
                <SubmitDeck onPress={this.submit} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: 'center',alignItems: 'center'},
    pergunta: {alignItems: 'center',justifyContent: 'center',fontSize: 30,marginLeft: 20,textAlign: 'center',marginRight: 20,color: black},
    input: {width: 250,height: 44,padding: 8,borderWidth: 1,borderColor: black,margin: 20},
    submitBtn: {borderWidth: 1,borderColor: black,backgroundColor: lightBlue,padding: 10,borderRadius: 30,height: 45,marginLeft: 40,marginRight: 40,justifyContent: 'center',marginBottom: 60},
    submitBtnText: {color: white,fontSize: 22,textAlign: 'center'}
})

export default connect()(AddDeck)