import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Globals/Colors';

export const styles = StyleSheet.create({
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
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
    width: '20%',
    height: '85%',
    position: 'absolute',
    right: '2%',
    top: '12%',
    borderRadius: 20,
  },

  imageListItem: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    paddingVertical: 2,
    elevation: 2,
  },
  imageListItemBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    overflow: 'hidden',
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
  selectedImage: {
    borderWidth: 2,
    borderColor: Colors.backgroundAccent,
  },
  imageZoom: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2.35,
    left: '2%',
    color: Colors.textPrimaryLight,
    borderRadius: 40,
    padding: 8,
    elevation: 1,
  },

  bottomView: {
    width: '100%',
    height: '100%',
    marginTop: Dimensions.get('window').height / 2.2,
    position: 'relative',
  },
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: Colors.textPrimaryDark,
    fontSize: 24,
    fontWeight: 'bold',
    left: '4%',
    alignSelf: 'flex-start',
  },
});
