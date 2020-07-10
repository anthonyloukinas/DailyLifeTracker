import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function Header({ title }) {
    return (
        <View style={style.header}>
            <Text style={style.title}>
                {title}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    header: {
        height: 65,
        paddingTop: 20,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});