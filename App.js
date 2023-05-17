import { useFonts } from 'expo-font';
import CatNavigator from './src/navigation/CatNavigator';

export default function App() {

  const [loadedFont] = useFonts({
    "Comme-Regular": require('./src/assets/fonts/Comme-Regular.ttf')
  });

  if (!loadedFont) {
    return (null);
  }

  return (
      <CatNavigator />
  );
}
