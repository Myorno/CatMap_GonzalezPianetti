import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const MapNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName='List'
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,

                },
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    color: COLORS.white
                },
            }}>
            <Stack.Screen name='Home' component={Home}
                options={{
                    title: "Cat Map",
                }} />
        </Stack.Navigator>
    )
}

export default MapNavigator;