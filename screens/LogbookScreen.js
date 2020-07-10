import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React from "react";
import { Header } from '../components/Header';
import LogbookItem from "../components/LogbookItem";
import SleepLogbook from "../components/Logbooks/SleepLogbook";

export function LogbookScreen({ navigation }) {

    const [ logBooks, setLogBooks ] = React.useState([
        { key: 'sleep', title: 'Sleep Logbook', component: SleepLogbook },
        { key: 'fluid', title: 'Fluid Logbook' },
        { key: 'food', title: 'Food Logbook' }
    ]);

    const pressHandler = (key) => {
        let book = logBooks.find((loopItem) => loopItem.title);
        navigation.navigate('Settings');
    };

    return (
        <View style={style.container}>
            <Header title="Logbook" />

            <View style={style.content}>
                <FlatList
                    data={logBooks}
                    renderItem={({ item }) => (
                        <LogbookItem item={item} pressHandler={pressHandler} />
                    )}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
   },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
    }
});