import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoctorScreen from "./DoctorScreen";
import PatientScreen from "./PatientScreen";

const Tab = createBottomTabNavigator();

export default class Home extends Component {

    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Doctor" component={DoctorScreen} />
                    <Tab.Screen name="Patient" component={PatientScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}