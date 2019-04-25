import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, lightBlue, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class DeckList extends React.Component {
    /**
     * Handle para a ação de toque no deck
     */
    handlePress = () => {
        const { id, title, navigation } = this.props

        return navigation.navigate('Deck', {deckId: id, deckName: title})
    }

    render() {
        const { title, count } = this.props

        return (
            <TouchableOpacity
             style={styles.item} 
             onPress={this.handlePress}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{count} {count === 1 ? `card` : `cards`}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: white
    },
    count: {
        marginTop: 10,
        fontSize: 22,
        color: white
    },
    item: {
        backgroundColor: lightBlue,
        borderRadius: 10,
        borderColor: black,
        borderWidth: 1,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(decks, props) {
    const { id } = props

    return {
        id,
        title: decks[id].title,
        count: decks[id].questions.length
    }
}

export default withNavigation(connect(mapStateToProps)(DeckList))