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
    top: Dimensions.get('window').height / 2.5,
  },
  headerIcon: {
    marginRight: '18%',
    color: Colors.textPrimaryDark,
    marginLeft: '4%',
    marginTop: '4%',
  },
  imageBackground: {
    width: '100%',
    height: Dimensions.get('window').height / 2.2,
    position: 'absolute',
  },
});
