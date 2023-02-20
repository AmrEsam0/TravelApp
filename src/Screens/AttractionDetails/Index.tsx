import {View} from 'react-native';
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
      <View style={styles.header}>
        <Icon
          style={[globalStyles.globalText, styles.headerIcon, styles.text]}
          name="arrow-left-circle"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text
          variant="bodyLarge"
          style={[globalStyles.globalText, styles.text]}>
          {item.name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AttractionDetailsScreen;
