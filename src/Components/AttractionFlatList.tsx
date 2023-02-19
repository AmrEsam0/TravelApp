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
    setSelected(selectedCategory);
    //delayed animation
    setTimeout(() => {
      onPressAnimate();
    }, 200);
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
    justifyContent: 'center',
  },
  categoryItem: {
    paddingRight: 32,
    justifyContent: 'center',
  },
  selectedCategoryItem: {
    color: Colors.textAccent,
    borderBottomColor: Colors.textAccent,
    borderBottomWidth: 2,
    fontWeight: 'bold',
  },
  text: {color: Colors.textPrimaryDark},
});
