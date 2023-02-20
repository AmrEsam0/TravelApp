import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Colors} from './src/Globals/Colors';
import HomeScreen from './src/Screens/Home/Index';
import {NavigationContainer} from '@react-navigation/native';
import AttractionDetailsScreen from './src/Screens/AttractionDetails/Index';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const App = () => {
  return (
    StatusBar.setBarStyle('dark-content'),
    StatusBar.setBackgroundColor(Colors.backgroundLight),
    (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="AttractionDetails"
            component={AttractionDetailsScreen}
            sharedElements={route => {
              const {item: item} = route.params;
              return [{id: item.picture}, {id: item.name, animation: 'fade'}];
            }}
            options={() => ({
              cardStyleInterpolator: ({current: {progress}}) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                };
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};
export default App;
