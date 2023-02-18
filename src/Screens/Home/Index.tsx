import React from 'react';
import {styles} from './Styles';
import HomeScreenHeader from '../../Components/HomeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
    </SafeAreaView>
  );
};

export default HomeScreen;
