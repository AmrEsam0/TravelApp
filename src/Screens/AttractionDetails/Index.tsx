import {Dimensions, Image, View} from 'react-native';
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
        <Image
          source={{uri: item.picture}}
          style={{
            width: '100%',
            height: Dimensions.get('window').height / 2.4,
            resizeMode: 'cover',
            position: 'absolute',
          }}
        />
      </SharedElement>
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
