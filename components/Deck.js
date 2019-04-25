import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { black, gray, white, lightBlue, orange } from '../utils/colors'

class Deck extends React.Component{
    state = {
        opacity: new Animated.Value(0)
    }
    
    /**
     * Define o titulo no topo da aplicação ao entrar na tela de Deck
     */
    static navigationOptions = ({ navigation }) => {
        const { deckName } = navigation.state.params

        return {
            title: deckName
        }
    }

    /**
     * Handle da ação de toque no botão de adicionar Card
     */
    handleAddCard = () => {
        const { deckId } = this.props

        return this.props.navigation.navigate('AddCard', {deckId: deckId})
    }

    /**
     * Handle da ação de toque no botão de iniciar o quiz
     */
    handleStartQuiz = () => {
        const { questions } = this.props.deck 
        const { deckId } = this.props

        return (questions.length === 0 
            ? alert('Este deck não possui nenhum card') 
            : this.props.navigation.navigate('Question', {deckId: deckId}))
    }

    componentDidMount() {
        const { opacity } = this.state

        Animated.timing(opacity, {toValue: 1, duration: 1000}).start()
    }

    render() {
        const { opacity } = this.state
        const { questions, title } = this.props.deck 
        
        return(
            <Animated.View style={[styles.deck, { opacity }]}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{questions.length} {questions.length === 1 ? `card` : `cards`}</Text>
            </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={[styles.btn, {flex: 2, backgroundColor: orange}]}
                        onPress={this.handleAddCard}
                    >
                        <Text style={styles.btnText}>Adicionar Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, {flex: 2, backgroundColor: lightBlue}]}
                        onPress={this.handleStartQuiz}
                    >
                        <Text style={[styles.btnText, {color: white}]}>Começar!</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: black
    },
    count: {
        marginTop: 10,
        fontSize: 25,
        color: gray
    },
    btn: {
        flexDirection: 'row',
        width: 150,
        height: 50,
        backgroundColor: white,
        borderRadius: 10,
        borderColor: black,
        borderWidth: 1,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 16,
        color: white
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  })
  
function mapStateToProps (state, {navigation}) {
    const { deckId } = navigation.state.params  
    return {
        deckId,
        deck: state[deckId],
    }
}

export default connect(mapStateToProps)(Deck)