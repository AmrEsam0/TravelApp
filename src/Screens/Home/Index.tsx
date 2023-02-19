import React from 'react';
import {styles} from './Styles';
import {FlatList, View} from 'react-native';
import HomeScreenHeader from '../../Components/HomeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import AttractionFlatList from '../../Components/AttractionFlatList';
import AttractionCard from '../../Components/AttractionCard';
import {FlatGrid, SimpleGrid} from 'react-native-super-grid';

const HomeScreen = () => {
  const categories = ['All', 'Museums', 'Parks', 'Restaurants'];
  const [selectedId, setSelectedId] = React.useState('All');
  const items = [
    {name: 'MUSEUM', url: 'https://picsum.photos/id/320/150/150'},
    {name: 'PARK', url: 'https://picsum.photos/id/330/150/150'},
    {name: 'RESTAURANT', url: 'https://picsum.photos/id/340/150/150'},
    {name: 'MUSEUM', url: 'https://picsum.photos/id/350/150/150'},
    {name: 'PARK', url: 'https://picsum.photos/id/360/150/150'},
    {name: 'RESTAURANT', url: 'https://picsum.photos/id/370/150/150'},
    {name: 'MUSEUM', url: 'https://picsum.photos/id/380/150/150'},
    {name: 'PARK', url: 'https://picsum.photos/id/390/150/150'},
    {name: 'RESTAURANT', url: 'https://picsum.photos/id/400/150/150'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
      <AttractionFlatList
        selectedCategory={selectedId}
        categories={categories}
        onCategoryPress={setSelectedId}
      />
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({item}) => (
            <AttractionCard imageSrc={item.url} name={item.name} />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
