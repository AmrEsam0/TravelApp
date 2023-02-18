import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from './src/Globals/Colors';
import {styles} from './src/Globals/Styles';
import HomeScreen from './src/Screens/Home/Index';

const App = () => {
  return (
    StatusBar.setBarStyle('light-content'),
    StatusBar.setBackgroundColor(Colors.backgroundDarker),
    StatusBar.setTranslucent(true),
    (
      <SafeAreaView style={styles.appContainer}>
        <HomeScreen />
      </SafeAreaView>
    )
  );
};
export default App;
