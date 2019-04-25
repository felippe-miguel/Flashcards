import React from 'react'
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'
import { connect } from 'react-redux'
import { white, black, orange } from '../utils/colors'

SubmitBtn = ({ onPress }) => {
    return (
        <TouchableOpacity
         style={styles.submitBtn}
         onPress={onPress}>
            <Text style={styles.submitBtnText}>Criar Card</Text>
        </TouchableOpacity>
    )
}

class AddCard extends React.Component{
    state = {
        pergunta: '',
        resposta: ''
    }

    submit = () => {
        const { pergunta, resposta } = this.state
        const { deckId, dispatch } = this.props

        if (pergunta === '' || resposta === '') {
            alert('Os dois campos precisam estar preenchidos')
            return 
        }

        /** atualiza a store */
        dispatch(addCard(deckId, pergunta, resposta))

        /** reseta o estado do componente */
        this.setState({
            pergunta: '',
            resposta: ''
        })

        /** salva o card utilizando a API */
        saveCard(deckId, pergunta, resposta)
    }

    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.label}>Pergunta</Text>
                <TextInput value={this.state.pergunta} style={styles.input} onChangeText={(pergunta) => this.setState({pergunta})} autoFocus={true}/>
                <Text style={styles.label}>Resposta</Text>
                <TextInput value={this.state.resposta} style={styles.input} onChangeText={(resposta) => this.setState({resposta})}/>
                <SubmitBtn onPress={this.submit} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: 'center',alignItems: 'center',margin: 40},
    pergunta: {fontSize: 18,alignSelf: 'flex-start',color: black},
    input: {width: 250,height: 44,padding: 8,borderWidth: 1,borderColor: black,marginBottom: 15},
    submitBtn: {borderWidth: 1,justifyContent: 'center',backgroundColor: orange,borderColor: black,padding: 10,borderRadius: 30,height: 45,marginLeft: 40,marginRight: 40,marginBottom: 100},
    submitBtnText: {color: white,fontSize: 22,textAlign: 'center'}
})

function mapStateToProps(state, { navigation }){
    const { deckId } = navigation.state.params
    return {
        deckId
    }
}

export default connect(mapStateToProps)(AddCard)