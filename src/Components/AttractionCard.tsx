import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {Text} from 'react-native-paper';

const AttractionCard = ({name, imageSrc}: {name: string; imageSrc: string}) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <View style={styles.bottomSection}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AttractionCard;

const styles = StyleSheet.create({
  container: {
    width: '46%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    margin: '2%',
    backgroundColor: Colors.backgroundAccent,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    textAlign: 'center',
    color: Colors.textPrimaryLight,
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  bottomSection: {
    width: '100%',
    backgroundColor: Colors.backgroundAccent,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
  },
});
