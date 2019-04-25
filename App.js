import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckLists from './components/DeckLists'
import Deck from './components/Deck'
import Question from './components/Question'
import { white, black, orange } from './utils/colors'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

/** Store da aplicação */
const store = createStore(reducer)

/**  Barra de status (Superior) */
MainStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

/** Barra inferior de navegação */
const Tabs = createBottomTabNavigator({
    DeckLists: {
        screen: DeckLists,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'ADD DECK'
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: orange,
        labelStyle: {
            fontSize: 20,
            paddingBottom: 10,
            fontWeight: 'bold',
        }
    }
})

/** StackNavigator padrão */
const Stack = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    AddDeck: {
        screen: AddDeck
    },
    AddCard: {
        screen: AddCard
    },
    Deck: {
        screen: Deck
    },
    Question: {
        screen: Question
    }
}, {
    navigationOptions: {
        headerTintColor: black,
        headerTitleStyle: {
            fontSize: 22,
        }
    },
    cardStyle: {
        backgroundColor: white
    }
})

/** Componente App - Principal componente da aplicação */
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <MainStatusBar backgroundColor={black} barStyle="light-content" />
                    <Stack />
                </View>
            </Provider>
        )
    }
}


