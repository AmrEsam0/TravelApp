import {ImageBackground} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../Globals/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SharedElement} from 'react-navigation-shared-element';

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
      <SharedElement id={item.picture}>
        <ImageBackground
          source={{uri: item.picture}}
          resizeMode="cover"
          style={styles.imageBackground}
        />
      </SharedElement>
      <Icon
        style={[globalStyles.globalText, styles.headerIcon]}
        name="arrow-left-circle"
        size={42}
        onPress={() => navigation.goBack()}
      />
      <SharedElement id={item.name}>
        <Text style={[globalStyles.globalText, styles.headerTitle]}>
          {item.name}
        </Text>
      </SharedElement>
    </SafeAreaView>
  );
};

export default AttractionDetailsScreen;
