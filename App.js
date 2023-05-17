import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { COLORS } from './src/constants/colors';
import CatNavigator from './src/navigation/CatNavigator';

export default function App() {

  const [loadedFont] = useFonts({
    "Comme-Regular": require('./src/assets/fonts/Comme-Regular.ttf')
  });

  if (!loadedFont) {
    return (null);
  }

  return (
    <View style={styles.container}>
      <CatNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
});