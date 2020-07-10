import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { DashboardScreen } from "../screens/DashboardScreen";
import {LogbookScreen} from "../screens/LogbookScreen";
import {RecordScreen} from "../screens/RecordScreen";
import {ShareScreen} from "../screens/ShareScreen";

// https://reactnavigation.org/docs/tab-based-navigation/#add-badges-to-icons
function IconWithBadge({ name, badgeCount, color, size }) {
    return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
            <Ionicons name={name} size={size} color={color} />
            {badgeCount > 0 && (
                <View
                    style={{
                        // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                        {badgeCount}
                    </Text>
                </View>
            )}
        </View>
    );
}

function HomeIconWithBadge(props) {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
}

const Tab = createBottomTabNavigator();

export class BottomNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'Home') {
                                return (
                                    <HomeIconWithBadge
                                        name={
                                            focused
                                                ? 'ios-information-circle'
                                                : 'ios-information-circle-outline'
                                        }
                                        size={size}
                                        color={color}
                                    />
                                );
                            } else if (route.name === 'Dashboard') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-stats' : 'ios-stats'}
                                        size={size}
                                        color={color}
                                    />
                                )
                            } else if (route.name === 'Logbook') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-book' : 'ios-book'}
                                        size={size}
                                        color={color}
                                    />
                                )
                            } else if (route.name === 'Record') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-add-circle' : 'ios-add-circle'}
                                        size={size} // 48
                                        color={color}
                                    />
                                )
                            } else if (route.name === 'Share') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-share' : 'ios-share'}
                                        size={size}
                                        color={color}
                                    />
                                )
                            } else if (route.name === 'Settings') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-list-box' : 'ios-list'}
                                        size={size}
                                        color={color}
                                    />
                                );
                            }
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Dashboard" component={DashboardScreen} />
                    <Tab.Screen name="Logbook" component={LogbookScreen} />
                    <Tab.Screen name="Record" component={RecordScreen} />
                    <Tab.Screen name="Share" component={ShareScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
