import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import MapNavigator from './MapNavigator';
import ListNavigator from './ListNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTabs.Screen
                name="Map"
                component={MapNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabItem}>
                            <FontAwesome5 name="map-marked-alt" size={24} color={COLORS.primary} />
                            <Text>Map</Text>
                        </View>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="List"
                component={ListNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabItem}>
                            <FontAwesome5 name="cat" size={24} color={COLORS.primary} />
                            <Text>Cats</Text>
                        </View>
                    ),
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: "#fff",
      paddingTop: 10,
      height: 80,
      position: "absolute",
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    tabItem: {
        display:'flex',
        alignItems: "center",
        fontFamily: FONTS.main,
    }
  });