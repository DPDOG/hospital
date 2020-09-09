/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Home';


const rootStack = createStackNavigator({
    Home: {screen: Home},

}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        gestureEnabled: false,
    },
});

const Route = createAppContainer(rootStack);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Route />
        );
    }
}


export default App;
