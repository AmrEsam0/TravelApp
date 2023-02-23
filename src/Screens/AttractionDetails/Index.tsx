import {ImageBackground} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../Globals/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        style={styles.imageBackground}
      />
      <Icon
        style={[globalStyles.globalText, styles.headerIcon]}
        name="arrow-left-circle"
        size={42}
        onPress={() => navigation.goBack()}
      />
      <Text style={[globalStyles.globalText, styles.headerTitle]}>
        {item.name}
      </Text>
    </SafeAreaView>
  );
};

export default AttractionDetailsScreen;
