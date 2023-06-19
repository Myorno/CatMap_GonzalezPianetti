import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./db";

init()
.then(()=> console.log("Database initialized"))
.catch((err)=> {
  console.log("Database fail connect");
  console.log(err.message);
});

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
