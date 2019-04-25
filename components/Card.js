import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { orange, white, black, lightBlue } from '../utils/colors'
import TextButton from './TextButton'

export default function Card(props) {
    const { index, deck, showAnswer, flip, answer } = props
    const card = deck.questions[index]

    return(
        <View style={styles.center}>
            <View style={styles.center}>
                <Text style={styles.cardText}>{showAnswer ? card.answer : card.question}</Text>
                <TextButton
                onPress={flip}
                style={{ fontSize: 18, fontWeight:'bold'}}
                >
                    {showAnswer ? 'Mostrar pergunta' : 'Mostrar resposta'}
                </TextButton>
            </View>
        
            {showAnswer ?
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => answer('correct')}
                    >
                        <Text style={styles.btnText}>Acertei! =D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: orange}]}
                        onPress={() => answer('incorrect')}
                    >
                        <Text style={styles.btnText}>Errei. :(</Text>
                    </TouchableOpacity>
                </View>
            : <View style={styles.btnContainer}></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: lightBlue,
        borderRadius: 10,
        borderColor: black,
        borderWidth: 1,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: white,
        fontSize: 16
    },
    cardText: {
        fontSize: 25,
        color: black,
        marginLeft: 15,
        marginRight: 15
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})