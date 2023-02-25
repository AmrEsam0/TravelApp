import {ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'react-native-paper';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../Globals/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Globals/Colors';
import {View} from 'moti';
import {FlatList} from 'react-native-gesture-handler';

const AttractionDetailsScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {item} = route.params || {};
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);
  const [selectedImage, setSelectedImage] = React.useState<string>(
    item.imageList[0],
  );
  const [fullListSize, setFullListSize] = React.useState<number>(0);
  const [showImage, setShowImage] = React.useState<boolean>(false);
  const imageListToDisplay = item.imageList;
  useEffect(() => {
    setFullListSize(item.imageList.length);
    console.log(selectedImage);
  }, [item]);

  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <ImageBackground
        source={{uri: selectedImage}}
        resizeMode="cover"
        style={styles.imageBackground}>
        <LinearGradient
          style={styles.tint}
          colors={[Colors.backgroundDarker, Colors.transparent]}
          start={{x: 0, y: 0.05}}
          end={{x: 0, y: 0.6}}
        />
        {!showImage && (
          <FlatList
            style={styles.imageListContainer}
            data={imageListToDisplay}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                style={styles.imageListItem}
                onPress={() => {
                  setSelectedImageIndex(index);
                  setSelectedImage(item);
                }}>
                <ImageBackground
                  style={[
                    styles.imageListItemBackground,
                    selectedImageIndex === index && styles.selectedImage,
                  ]}
                  source={{uri: item}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          />
        )}
        <Icon
          name="image-search"
          size={32}
          style={styles.imageZoom}
          onPress={() => {
            showImage ? setShowImage(false) : setShowImage(true);
          }}
        />
      </ImageBackground>
      {!showImage && (
        <Icon
          style={[globalStyles.globalText, styles.headerIcon]}
          name="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
      )}
      <View style={styles.bottomView}>
        <Text style={[globalStyles.globalText, styles.title]}>{item.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AttractionDetailsScreen;
