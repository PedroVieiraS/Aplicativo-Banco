import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home.js';
import Pix from './src/screens/Pix.js';
import 'react-native-gesture-handler';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pix" component={Pix} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


