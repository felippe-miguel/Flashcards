import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, lightBlue, orange } from '../utils/colors'
import { withNavigation } from 'react-navigation'

/**
 * Componente stateless que exibe o resultado do quiz
 * @param props - props recebidas pelo componente
 */
const Score = (props) => (
    <View style={styles.center}>
        <View style={styles.center}>
            <Text style={styles.score}>Acertos: {props.correct}</Text>
            <Text style={styles.score}>Erros: {props.incorrect}</Text>
            <Text style={styles.score}>{Math.round((props.correct/props.deck.cards.length)*100)}%</Text>
        </View>

        <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btn, {backgroundColor: lightBlue}]} onPress={props.restart}>
                <Text style={styles.btnText}>Reiniciar Quiz!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, {backgroundColor: orange}]} onPress={() => props.navigation.navigate('Deck', {deckId: props.deckId, deckName: props.deck.title})}>
                <Text style={[styles.btnText, {color: white}]}>Retorner ao Deck</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    center: {flex: 1,justifyContent: 'center',alignItems: 'center'},
    btn: {width: 150,height: 50,justifyContent: 'center',alignItems: 'center',borderRadius: 30,borderColor: black,textAlign: 'center',borderWidth: 1,padding: 15,marginLeft: 10,marginRight: 10,},
    btnText: {textAlign: 'center',color: white,fontSize: 16},
    score: { color: black, fontSize: 25,},
    btnContainer: {flex: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}
  })

export default withNavigation(Score)