import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from '../constants/colors';
import List from '../screens/List';

const TabNavigator = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name='Map' component={List} />
            <Stack.Screen name='Item' component={Item}
                options={() => ({
                    title: "Cat's Profile"
                })} />
        </Stack.Navigator>
    )
}

export default TabNavigator