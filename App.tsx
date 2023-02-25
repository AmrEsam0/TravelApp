import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Colors} from './src/Globals/Colors';
import {NavigationContainer} from '@react-navigation/native';
import AttractionDetailsScreen from './src/Screens/AttractionDetails';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/Home';

const Stack = createStackNavigator();
const App = () => {
  StatusBar.setBackgroundColor(Colors.transparent);
  StatusBar.setTranslucent(true);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenListeners={{
          focus: () => {
            StatusBar.setBarStyle('dark-content');
          },
        }}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AttractionDetails"
          component={AttractionDetailsScreen}
          listeners={{
            focus: () => {
              StatusBar.setBarStyle('light-content');
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
