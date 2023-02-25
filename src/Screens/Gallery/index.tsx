import {FlatList, Image, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../Globals/Styles';
import {styles} from './styles';

const GalleryScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {imageList} = route.params;
  const [visible, setIsVisible] = useState(false);
  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={imageList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Image source={{uri: item}} style={[styles.image]} />
        )}
      />
    </View>
  );
};

export default GalleryScreen;
