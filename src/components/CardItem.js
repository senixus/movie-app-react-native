import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const CardItem = ({show, navigation}) => {
  const handleShowDetails = show => {
    navigation.navigate('Details', {
      show: show,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <TouchableOpacity onPress={() => handleShowDetails(show)}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${show.poster_path}`,
            }}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          {show.original_title?.substr(0, 12) ||
            show.original_name?.substr(0, 12)}
        </Text>
      </View>
      <View style={styles.rating}>
        <Text>Rating</Text>
        <Text>(39)</Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 100,
  },
  title: {
    marginTop: 5,
    color: '#ffffff',
    flex: 1,
    fontSize: 13,
  },

  inner_container: {
    flex: 1,
  },

  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  rating: {},
});
