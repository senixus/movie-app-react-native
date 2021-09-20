import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const SearchCardItem = ({show, navigation}) => {
  const handleShowDetails = show => {
    navigation.navigate('Details', {
      show: show,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleShowDetails(show)}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${
              show?.poster_path || show?.backdrop_path
            }`,
          }}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        {show?.original_title || show?.original_name}
      </Text>
    </View>
  );
};

export default SearchCardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    width: Dimensions.get('window').width / 2,
  },
  image: {
    //width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontSize: 13,
  },
});
