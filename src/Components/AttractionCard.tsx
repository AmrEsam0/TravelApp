import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {BlurView} from '@react-native-community/blur';

const AttractionCard = ({imageSrc}: {imageSrc: string}) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>Attraction</Text>
    </TouchableOpacity>
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
    margin: '2%',
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
    color: Colors.textPrimaryDark,
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    backgroundColor: Colors.backgroundAccent,
    width: '100%',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    flex: 0.15,
    padding: '4%',
  },
});
