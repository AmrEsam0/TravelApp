import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../Globals/Colors';

const HomeExploreButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text
          style={[
            styles.text,
            {
              color: Colors.textPrimaryLight,
              paddingLeft: '5%',
            },
          ]}>
          Looking for other places?
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Text style={styles.text}>Explore Now</Text>
        <Icon name="arrow-right" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeExploreButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '3%',
    height: '9%',
    width: '96%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    backgroundColor: Colors.backgroundDark,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  button: {
    flex: 0.9,
    flexDirection: 'row',
    backgroundColor: Colors.backgroundAccent,
    height: '100%',
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  text: {
    color: Colors.textPrimaryLight,
    textAlignVertical: 'center',
    fontSize: 18,
  },
  icon: {
    color: Colors.textPrimaryLight,
    textAlignVertical: 'center',
  },
});
