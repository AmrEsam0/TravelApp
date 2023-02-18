import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {Text} from 'react-native-paper';

export default function HomeScreenHeader() {
  return (
    <View>
      <Text style={styles.header}>Where do you</Text>
      <Text style={[styles.header, styles.headerBold]}>want to go?</Text>
      <Text style={styles.subHeader}>Explore Attractions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 44,
    color: Colors.textPrimaryDark,
  },

  headerBold: {
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    color: Colors.textPrimaryDark,
    fontWeight: '200',
    paddingLeft: '2%',
    paddingTop: '8%',
  },
});
