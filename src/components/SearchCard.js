import React from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import SearchCardItem from './SearchCardItem';

const SearchCard = ({searchedShows, navigation}) => {
  const renderItem = ({item}) => {
    return <SearchCardItem show={item} navigation={navigation} />;
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={searchedShows}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
