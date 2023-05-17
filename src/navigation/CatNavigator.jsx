import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLORS} from '../constants/colors';
import List from '../screens/List';
import Item from '../screens/Item';

const CatNavigator = () => {

    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List'>
                <Stack.Screen name='List' component={List} />
                <Stack.Screen name='Item' component={Item} 
                options={()=>({
                    title: "Cat's Profile"
                })}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default CatNavigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.light,
    },
  });