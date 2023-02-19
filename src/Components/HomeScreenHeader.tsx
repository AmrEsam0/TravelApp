import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {Colors} from '../Globals/Colors';

export default function HomeScreenHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} variant="displayMedium">
        Where do <Text style={{color: Colors.textAccent}}>you</Text>
      </Text>

      <Text style={[styles.text, {fontWeight: 'bold'}]} variant="displayMedium">
        want to <Text style={{color: Colors.textAccent}}>go</Text>?
      </Text>
      <Text style={[styles.text, styles.subHeader]} variant="bodyLarge">
        <Text style={[{fontWeight: 'bold'}, styles.text]}>Explore</Text>{' '}
        Attractions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: '2%',
  },
  text: {
    color: Colors.textPrimaryDark,
  },
  subHeader: {
    fontWeight: '200',
    paddingTop: '8%',
  },
});
