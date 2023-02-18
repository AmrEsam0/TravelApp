import React from 'react';
import {styles} from './Styles';
import HomeScreenHeader from '../../Components/HomeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import AttractionFlatList from '../../Components/AttractionFlatList';

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
    </SafeAreaView>
  );
};

export default HomeScreen;
