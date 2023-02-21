import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../Globals/Colors';
import {Text} from 'react-native-paper';

export default function AttractionFlatList({
  categories,
  selectedCategory,
  onCategoryPress,
  onPressAnimate,
}: {
  categories: string[];
  selectedCategory: string;
  onCategoryPress: (category: string) => void;
  onPressAnimate: () => void;
}) {
  const [selected, setSelected] = React.useState(selectedCategory);

  React.useEffect(() => {
    //delayed animation
    onPressAnimate();
    setTimeout(() => {
      setSelected(selectedCategory);
    }, 100);
  }, []);
  React.useEffect(() => {
    //delayed animation
    onPressAnimate();
    setTimeout(() => {
      setSelected(selectedCategory);
    }, 100);
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        ListHeaderComponent={() => <View style={{width: 12}} />}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}: {item: any}) => (
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.categoryItem}
            disabled={selected === item}
            onPress={() => {
              onCategoryPress(item);
              onPressAnimate();
            }}>
            <Text
              variant="bodyMedium"
              style={[
                styles.text,
                selectedCategory === item ? styles.selectedCategoryItem : {},
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  categoryItem: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  selectedCategoryItem: {
    padding: 4,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.textAccent,
    backgroundColor: Colors.backgroundAccent,
    color: Colors.textPrimaryLight,
  },
  text: {
    color: Colors.textPrimaryDark,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 6,
  },
});
