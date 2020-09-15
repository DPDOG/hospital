import React, {Component} from 'react';
import DocData from '../res/JSon/DoctorData.json';

import {
    SafeAreaView,
    Text,
    View,
    ImageBackground,
    TouchableWithoutFeedback,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import * as StatusBar from "react-native";

const Item = ({ doctor }) => (
    <View style={styles.item}>
        <Image style={styles.logo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
        <Text style={styles.title}> {doctor.name} </Text>
        <Text style={styles.title}> {doctor.specialization} </Text>
    </View>
);

const renderItem = ({ item }) => (
    <Item doctor={item} />
);

export default class DoctorScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../res/welcome.jpeg')} style={{width: '100%', height: '100%'}}>
                    <SafeAreaView style={styles.container}>
                        <FlatList
                             data={DocData}
                            renderItem={renderItem}
                             keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar. || 0,
    },
    item: {
        backgroundColor: 'powderblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    logo: {
        width: 80,
        height: 80,
    },
});