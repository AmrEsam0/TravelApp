import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {BlurView} from '@react-native-community/blur';

const AttractionCard = ({random}: {random: number}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `https://picsum.photos/id/${random}/200/300`}}
      />
      <Text style={styles.title}>Attraction</Text>
    </View>
  );
};

export default AttractionCard;

const styles = StyleSheet.create({
  container: {
    height: '24%',
    width: '46%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    shadowColor: Colors.backgroundDarker,
    margin: '2%',
    backgroundColor: Colors.textAccent,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 0.85,
  },
  title: {
    textAlign: 'center',
    color: Colors.textPrimaryLight,
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    backgroundColor: Colors.backgroundDark,
    width: '100%',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    flex: 0.15,
    padding: '4%',
  },
});
