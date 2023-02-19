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
        <AttractionCard imageSrc="https://picsum.photos/id/200/200/300" />
        <AttractionCard imageSrc="https://picsum.photos/id/320/200/300" />
        <AttractionCard imageSrc="https://picsum.photos/id/400/200/300" />
        <AttractionCard imageSrc="https://picsum.photos/id/500/200/300" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
