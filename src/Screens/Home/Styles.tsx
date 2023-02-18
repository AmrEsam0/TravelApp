import {StyleSheet} from 'react-native';
import {Colors} from '../../Globals/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: '2%',
    paddingVertical: '4%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Colors.backgroundLight,
  },
});
