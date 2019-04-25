import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { black, white, lightBlue, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class DeckList extends React.Component {
    /**
     * Handle para a ação de toque no deck
     */
    handlePress = () => this.props.navigation.navigate('Deck', {deckId: this.props.id, deckName: this.props.title})

    render = () => (
        <TouchableOpacity style={styles.item} onPress={this.handlePress}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.count}>{this.props.count} {this.props.count === 1 ? `card` : `cards`}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {fontSize: 30,color: white},
    count: {marginTop: 10,fontSize: 22,color: white},
    item: {backgroundColor: lightBlue,borderRadius: 50,borderColor: black,borderWidth: 1,padding: 15,marginLeft: 10,marginRight: 10,marginTop: 17,justifyContent: 'center',alignItems: 'center'}
})

function mapStateToProps(decks, props) {
    const { id } = props

    return {
        id,
        title: decks[id].title,
        count: decks[id].cards.length
    }
}

export default withNavigation(connect(mapStateToProps)(DeckList))