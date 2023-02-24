import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Globals/Colors';

export const styles = StyleSheet.create({
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: Colors.textPrimaryDark,
    fontSize: 20,
    fontWeight: 'bold',
    left: '4%',
    alignSelf: 'flex-start',
    top: Dimensions.get('window').height / 2,
  },
  headerIcon: {
    color: Colors.textPrimaryLight,
    width: '14%',
    textAlign: 'center',
    marginLeft: '2%',
    borderRadius: 4,
    backgroundColor: Colors.backgroundAccent,
    padding: 6,
    position: 'absolute',
    top: '8%',
  },
  imageBackground: {
    width: '100%',
    height: Dimensions.get('window').height / 1.8,
    position: 'absolute',
    top: 0,
  },
  tint: {
    width: '100%',
    height: Dimensions.get('window').height / 1.8,
    position: 'absolute',
    top: 0,
  },

  imageListContainer: {
    width: '90%',
    height: '16%',
    position: 'absolute',
    top: Dimensions.get('window').height / 2.4,
    backgroundColor: Colors.backgroundGlassDark,
    borderRadius: 20,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 4,
  },

  imageListItem: {
    width: 70,
    height: '100%',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    overflow: 'hidden',
    marginHorizontal: 2,
  },
  lastItemOverlay: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.backgroundGlassDarker,
  },
  lastItemOverlayText: {
    color: Colors.textPrimaryLight,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
