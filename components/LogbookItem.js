import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LogbookItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key )}>
            <View style={style.item}>
                <Ionicons
                    style={style.icon}
                    name="ios-book"
                    size={24}
                    color="lightblue"
                />
                <Text style={style.itemText}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        fontSize: 18,
    },
    icon: {
        paddingRight: 10,
    },
});