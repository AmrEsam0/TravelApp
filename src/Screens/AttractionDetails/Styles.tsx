import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Globals/Colors';

export const styles = StyleSheet.create({
  headerTitle: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: Colors.textPrimaryDark,
    fontSize: 20,
    fontWeight: 'bold',
    left: '4%',
    alignSelf: 'flex-start',
    top: Dimensions.get('window').height / 2.8,
  },
  headerIcon: {
    marginRight: '18%',
    color: Colors.textPrimaryLight,
    marginLeft: '4%',
    marginTop: '4%',
  },
  imageBackground: {
    width: '100%',
    height: Dimensions.get('window').height / 2.4,
    position: 'absolute',
    // top: 0,
    left: 0,
    right: 0,
    // bottom: 0,
  },
});
