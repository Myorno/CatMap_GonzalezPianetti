import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [loadedFont] = useFonts({
    "Comme-Regular": require("./src/assets/fonts/Comme-Regular.ttf"),
  });

  if (!loadedFont) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
