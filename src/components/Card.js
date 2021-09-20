import React from 'react';
import {StyleSheet, FlatList, ScrollView, Text, View} from 'react-native';
import CardItem from './CardItem';

const Card = ({shows, title, navigation}) => {
  const renderItem = ({item}) => {
    return <CardItem show={item} navigation={navigation} />;
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.header_container}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.sub_header}>View All</Text>
      </View>
      <FlatList
        horizontal
        data={shows}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    color: '#ffffff',
  },
  sub_header: {
    color: 'gray',
  },
});
