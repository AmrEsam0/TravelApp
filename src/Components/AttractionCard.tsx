import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

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
      key={imageSrc}
      activeOpacity={0.75}
      style={styles.container}
      onPress={() => onPressNavigate()}>
      <ImageBackground
        style={styles.image}
        source={{uri: imageSrc}}
        resizeMode={'cover'}
        imageStyle={{borderRadius: 6}}>
        <LinearGradient
          style={styles.gradient}
          colors={['#FFFFFF00', '#000000']}
          start={{x: 0, y: 0.6}}
          end={{x: 0, y: 1}}
        />
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
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default AttractionCard;

const styles = StyleSheet.create({
  container: {
    width: '46%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    margin: '2%',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 6,
  },
  title: {
    textAlign: 'center',
    color: Colors.textPrimaryLight,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
    position: 'absolute',
    bottom: '2%',
    left: '2%',
  },
  bottomSection: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    left: '2%',
    bottom: '12%',
    position: 'absolute',
  },
  gradient: {
    width: '100%',
    height: 170,
    borderRadius: 6,
    position: 'absolute',
    bottom: 0,
  },
});
