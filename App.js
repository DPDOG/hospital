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
import DoctorScreen from "./src/DoctorScreen";
import PatientScreen from "./src/PatientScreen";


const rootStack = createStackNavigator({
    Home: {screen: Home},
    DoctorScreen: {screen: DoctorScreen},
    PatientScreen: {screen: PatientScreen},

}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        gestureEnabled: true,
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
