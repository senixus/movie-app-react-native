import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import play from '../../assets/play.png';

const RandomShow = ({shows}) => {
  const [randIndex, setRandIndex] = useState(0);

  useEffect(() => {
    setRandIndex(Math.floor(Math.random() * shows.length));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${shows[randIndex].poster_path}`,
          }}
        />
      </View>
      <View style={styles.info_container}>
        <Text style={styles.text_header}>You started watching: </Text>
        <Text style={styles.title}>
          {shows[randIndex].original_title || shows[randIndex].original_name}
        </Text>
        <View style={styles.icon_container}>
          <Image style={styles.play_icon} source={play} />
        </View>
      </View>
    </View>
  );
};

export default RandomShow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('screen').width / 2,
    marginVertical: 10,
  },
  image_container: {},
  info_container: {},
  image: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  text_header: {
    color: 'gray',
    fontSize: 12,
  },
  title: {
    color: '#ffffff',
    marginVertical: 10,
    fontSize: 14,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  icon_container: {
    backgroundColor: '#370102',
    borderRadius: 100,
    width: 50,
    height: 50,
    padding: 20,
  },
  play_icon: {
    width: 10,
    height: 10,
    tintColor: '#E40405',
  },
});
