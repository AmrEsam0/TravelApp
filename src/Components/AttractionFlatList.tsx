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
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}: {item: any}) => (
          <TouchableOpacity
            activeOpacity={0.75}
            style={[
              styles.categoryItem,
              item === 'All' ? styles.firstItem : {},
              item === 'Restaurants' ? styles.lastItem : {},
            ]}
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
                selectedCategory !== item ? {opacity: 0.86} : {},
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
    paddingTop: '1%',
    paddingLeft: '3%',
    width: '100%',
    alignItems: 'flex-start',
  },
  categoryItem: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  selectedCategoryItem: {
    fontWeight: 'bold',
    borderRadius: 4,
    backgroundColor: Colors.backgroundAccent,
    color: Colors.textPrimaryLight,
  },
  text: {
    color: Colors.textPrimaryDark,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.backgroundAccent,
  },
  firstItem: {
    paddingLeft: 0,
  },
  lastItem: {
    paddingRight: 0,
  },
});
