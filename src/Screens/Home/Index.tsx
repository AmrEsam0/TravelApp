import React from 'react';
import {styles} from './Styles';
import HomeScreenHeader from '../../Components/HomeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import AttractionFlatList from '../../Components/AttractionFlatList';
import AttractionCard from '../../Components/AttractionCard';
import {View} from 'moti';

const HomeScreen = () => {
  const categories = ['All', 'Museums', 'Parks', 'Restaurants'];
  const [selectedId, setSelectedId] = React.useState('All');
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
      <AttractionFlatList
        selectedCategory={selectedId}
        categories={categories}
        onCategoryPress={setSelectedId}
      />
      <View style={styles.cardContainer}>
        <AttractionCard random={200} />
        <AttractionCard random={200} />
        <AttractionCard random={200} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
