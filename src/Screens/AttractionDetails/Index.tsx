import {ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../Globals/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Globals/Colors';
import {View} from 'moti';

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
    item.picture,
  );
  const imageListToDisplay = item.imageList.slice(0, 4);

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
        <View style={styles.imageListContainer}>
          {imageListToDisplay.map((image: string, index: number) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              style={styles.imageListItem}
              onPress={() => {
                //if it's the last item, show the full list from GalleryScreen
                if (imageListToDisplay.indexOf(image) === 3) {
                  navigation.navigate('Gallery', {
                    imageList: item.imageList,
                  });
                  return;
                }
                setSelectedImageIndex(index);
                setSelectedImage(image);
              }}>
              <ImageBackground
                style={[
                  styles.imageListItemBackground,
                  selectedImageIndex === index && styles.selectedImage,
                ]}
                source={{uri: image}}
                resizeMode="cover">
                {
                  //show view overlay if it's the last item
                  imageListToDisplay.indexOf(image) ===
                    imageListToDisplay.length - 1 && (
                    <View style={styles.lastItemOverlay}>
                      <Text style={styles.lastItemOverlayText}>
                        {item.imageList.length - 4}+
                      </Text>
                    </View>
                  )
                }
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
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
