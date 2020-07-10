import { Button, Text, View, StyleSheet } from "react-native";
import React from "react";
import { Header } from "../components/Header";

export function RecordScreen({ navigation }) {
    return (
        <View style={style.container}>
            <Header title={"Record"} />

            <View style={style.content}>
                <Text>Record!</Text>
                <Button
                    title="Go to Dashboard"
                    onPress={() => navigation.navigate('Dashboard')}
                />
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});