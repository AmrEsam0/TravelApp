import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Globals/Colors';

const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  customScreen: {
    transform: [{translateY: height / 2}],
  },
  header: {
    flexDirection: 'row',
    // backgroundColor: Colors.backgroundDark,
    width: '100%',
    paddingHorizontal: '4%',
    paddingTop: '4%',
    alignSelf: 'center',
  },
  headerIcon: {
    marginRight: '18%',
  },
});
