import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
