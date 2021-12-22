import "react-native-gesture-handler";
import Main from "./components/Main/index";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Result from "./components/Result/index";
import { LogBox } from "react-native";
import ExeList from "./components/ExeList";

const Stack = createStackNavigator();
LogBox.ignoreLogs(["Remote debugger"]);

const navTheme = DefaultTheme;
navTheme.colors.background = "#1E1E1E";

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HOME"
          component={Main}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EXELIST"
          component={ExeList}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RESULT"
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
