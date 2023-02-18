import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {Text} from 'react-native-paper';

export default function HomeScreenHeader() {
  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Where do you</Text>
      <Text variant="displayMedium" style={{fontWeight: 'bold'}}>
        want to go?
      </Text>
      <Text variant="bodyLarge" style={styles.subHeader}>
        Explore Attractions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: '2%',
  },
  subHeader: {
    fontWeight: '200',
    paddingTop: '8%',
  },
});
