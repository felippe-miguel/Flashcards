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
    static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.deckName})
    
    /**
     * Handle da ação de toque no botão de adicionar Card
     */
    handleAddCard = () => {
        return this.props.navigation.navigate('AddCard', {deckId: this.props.deckId})
    }

    /**
     * Handle da ação de toque no botão de iniciar o quiz
     */
    handleStartQuiz = () => (this.props.deck.cards.length === 0 
        ? alert('Este deck não possui nenhum card') 
        : this.props.navigation.navigate('Question', {deckId: this.props.deckId})
    )
    

    componentDidMount() {
        Animated.timing(this.state.opacity, {toValue: 1, duration: 1000}).start()
    }

    render() {
        const { opacity } = this.state
        
        return(
            <Animated.View style={[styles.deck, { opacity }]}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{this.props.deck.title}</Text>
                <Text style={styles.count}>{this.props.deck.cards.length} cards</Text>
            </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.btn, {flex: 2, backgroundColor: orange}]} onPress={this.handleAddCard}>
                        <Text style={styles.btnText}>Adicionar Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {flex: 2, backgroundColor: lightBlue}]} onPress={this.handleStartQuiz}>
                        <Text style={[styles.btnText, {color: white}]}>Começar!</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {flex: 1,justifyContent: 'center',alignItems: 'center'},
    title: {fontSize: 30,color: black},
    count: {marginTop: 10,fontSize: 25,color: gray},
    btn: {flexDirection: 'row',width: 150,height: 50,backgroundColor: white,borderRadius: 30,borderColor: black,borderWidth: 1,padding: 15,marginLeft: 10,marginRight: 10,marginTop: 17,justifyContent: 'space-around',alignItems: 'center'},
    btnText: {fontSize: 16,color: white},
    btnContainer: {flex: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'},
    textContainer: {flex: 1,justifyContent: 'center',alignItems: 'center'}
  })
  
function mapStateToProps (state, {navigation}) {
    const { deckId } = navigation.state.params  
    return {
        deckId,
        deck: state[deckId],
    }
}

export default connect(mapStateToProps)(Deck)