import React from 'react';
import {styles} from './Styles';
import {Dimensions, FlatList, View} from 'react-native';
import HomeScreenHeader from '../../Components/HomeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import AttractionFlatList from '../../Components/AttractionFlatList';
import AttractionCard from '../../Components/AttractionCard';
import {MotiView, useAnimationState} from 'moti';

const HomeScreen = () => {
  const categories = ['All', 'Museums', 'Parks', 'Restaurants'];
  const [selectedId, setSelectedId] = React.useState('All');
  const animateState = useAnimationState({
    from: {
      opacity: 0,
      // scale: 0,
      translateX: Dimensions.get('window').width,
    },
    to: {
      opacity: 1,
      // scale: 1,
      translateX: 0,
    },
    final: {
      opacity: 1,
      // scale: 1,
      translateX: 0,
    },
  });
  const animate = () => {
    if (animateState.current === 'to') {
      animateState.transitionTo('from');
    } else {
      animateState.transitionTo('to');
    }
  };

  const items = JSON.parse(
    JSON.stringify(require('../../data/mockedData.json')),
  );

  const [museums, setMuseums] = React.useState<
    {name: string; url: string; type: string}[]
  >([]);
  const [parks, setParks] = React.useState<
    {name: string; url: string; type: string}[]
  >([]);
  const [restaurants, setRestaurants] = React.useState<
    {name: string; url: string; type: string}[]
  >([]);

  React.useEffect(() => {
    const filteredMuseums = items.filter(
      (item: {type: string}) => item.type === 'M',
    );
    const filteredParks = items.filter(
      (item: {type: string}) => item.type === 'P',
    );
    const filteredRestaurants = items.filter(
      (item: {type: string}) => item.type === 'R',
    );
    setMuseums(filteredMuseums);
    setParks(filteredParks);
    setRestaurants(filteredRestaurants);
    animateState.transitionTo('final');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
      <AttractionFlatList
        onPressAnimate={animate}
        selectedCategory={selectedId}
        categories={categories}
        onCategoryPress={setSelectedId}
      />
      <View style={styles.cardContainer}>
        <MotiView state={animateState}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={
              selectedId === 'All'
                ? items
                : selectedId === 'Museums'
                ? museums
                : selectedId === 'Parks'
                ? parks
                : selectedId === 'Restaurants'
                ? restaurants
                : []
            }
            renderItem={({item}: {item: any}) => (
              <AttractionCard
                iconName={
                  item.type === 'M'
                    ? 'bank-outline'
                    : item.type === 'P'
                    ? 'forest'
                    : 'silverware-fork-knife'
                }
                imageSrc={item.picture}
                name={item.name}
              />
            )}
            numColumns={2}
          />
        </MotiView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
