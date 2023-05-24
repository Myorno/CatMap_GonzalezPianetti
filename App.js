import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {

  const [loadedFont] = useFonts({
    "Comme-Regular": require('./src/assets/fonts/Comme-Regular.ttf')
  });

  if (!loadedFont) {
    return (null);
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
