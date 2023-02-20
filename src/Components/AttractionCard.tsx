import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AttractionCard = ({
  name,
  imageSrc,
  iconName,
  onPressNavigate,
}: {
  name: string;
  imageSrc: string;
  iconName: string;
  onPressNavigate: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.container}
      onPress={() => onPressNavigate()}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <View style={styles.bottomSection}>
        <Icon
          style={styles.icon}
          name={iconName}
          size={20}
          color={Colors.textPrimaryLight}
        />
        <Text numberOfLines={1} style={styles.title}>
          {name}
        </Text>
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
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  bottomSection: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.backgroundAccent,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
  },
  icon: {
    marginRight: '2%',
  },
});
