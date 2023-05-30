import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import { List, Item } from "../screens";

const Stack = createNativeStackNavigator();

const ListNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.quaternary,
        headerTitleStyle: {
          color: COLORS.white,
        },
      }}
    >
      <Stack.Screen
        name="List"
        component={List}
        options={{
          title: "Cat List",
        }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={({ route }) => ({
          title: ` ${route.params.name}'s profile`,
        })}
      />
    </Stack.Navigator>
  );
};

export default ListNavigator;
