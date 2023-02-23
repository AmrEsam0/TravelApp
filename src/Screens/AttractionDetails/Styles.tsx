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
});
