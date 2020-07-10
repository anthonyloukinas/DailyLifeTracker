import {Button, Text, View, TextInput, StyleSheet, Alert} from "react-native";
import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {Header} from "../components/Header";

const _storeData = async (data) => {
    try {
        await AsyncStorage.setItem(
            'uid1',
            data
        );
    } catch (error) {
        console.error(error);
    }
};

const _getData = async () => {
    try {
        const value = await AsyncStorage.getItem('uid1');
        if (value !== null) {
            return value;
        }
    } catch (error) {
        console.error(error);
    }
};

export function DashboardScreen({ navigation }) {

    const [ value, onTextChange ] = React.useState('test');

    return (
        <View style={styles.container}>
            <Header title={"Dashboard"} />

            <View style={styles.sandbox}>
                <Text>Dashboard!</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => navigation.navigate('Settings')}
                />

                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => onTextChange(text)}
                />
                <Button
                    title="Save"
                    onPress={() => {
                        Alert.alert('Data has been saved');
                        _storeData(value).then(r => console.log(r));
                    }}
                />

                <Button
                    title="Get data"
                    onPress={() => {
                        _getData().then(r => onTextChange(r));
                    }}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 10,
        height: 40,
        width: 320,
        borderColor: 'gray',
        borderWidth: 1
    },
    container: {
        flex: 1,
    },
    sandbox: {
        flex: 1,
        padding: 20
    },
})