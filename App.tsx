import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Colors} from './src/Globals/Colors';
import HomeScreen from './src/Screens/Home/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    StatusBar.setBarStyle('dark-content'),
    StatusBar.setBackgroundColor(Colors.backgroundLight),
    StatusBar.setTranslucent(true),
    (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};
export default App;
