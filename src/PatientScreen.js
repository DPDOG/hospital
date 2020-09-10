import React, {Component} from 'react';

import {
    Text,
    View,
    ImageBackground,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

export default class PatientScreen extends Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground  style={{width: '100%', height: '100%'}}>
                    <View style={styles.btnContainer}>
                        <TouchableWithoutFeedback onPress={() => {
                            // this.props.navigation.navigate('Welcome');
                            alert('Verma User Click');
                        }}>
                            <View style={styles.btnLeft}>
                                <Text style={styles.btnText}>User</Text>
                            </View>
                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={() => {
                            // this.props.navigation.navigate('Welcome');
                            alert('Deepak Admin Click');
                        }}>
                            <View style={styles.btnRight}>
                                <Text style={styles.btnText}>Admin</Text>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    btnContainer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        flexDirection: 'row'
        // justifyContent: 'space-between'
    },

    btnLeft: {
        width: 165,
        borderWidth: 1,
        borderColor: '#7e7e7e',
        backgroundColor: '#7e7e7e',
        borderRadius: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnRight: {
        width: 165,
        borderWidth: 1,
        borderColor: '#5C80BC',
        backgroundColor: '#5C80BC',
        borderRadius: 50,
        height: 60,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        color: '#FFF',
        fontSize: 16,
        letterSpacing: 1
    }
});