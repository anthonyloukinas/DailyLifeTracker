import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "../components/Header";

export function ShareScreen({ navigation }) {
    return (
        <View style={style.container}>
            <Header title={"Share"} />

            <View style={style.content}>
                <Text>Share!</Text>
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