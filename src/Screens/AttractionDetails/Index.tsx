import {ImageBackground} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../Globals/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Globals/Colors';

const AttractionDetailsScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {item} = route.params || {};
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <ImageBackground
        source={{uri: item.picture}}
        resizeMode="cover"
        style={styles.imageBackground}>
        <LinearGradient
          style={styles.tint}
          colors={[Colors.backgroundDarker, Colors.transparent]}
          start={{x: 0, y: 0.05}}
          end={{x: 0, y: 0.6}}
        />
      </ImageBackground>
      <Icon
        style={[globalStyles.globalText, styles.headerIcon]}
        name="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
      />
      <Text style={[globalStyles.globalText, styles.title]}>{item.name}</Text>
    </SafeAreaView>
  );
};

export default AttractionDetailsScreen;
