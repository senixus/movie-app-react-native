import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCreditsAction} from '../store/actions/creditActions';

const DetailScreen = ({navigation, route}) => {
  const {show} = route.params;
  const dispatch = useDispatch();
  const {credits} = useSelector(state => state.credit);

  // useEffect(() => {
  //   dispatch(getCreditsAction(show?.id));
  // }, [show]);

  // const overview =
  //   show.overview.length > 175 ? (
  //     show.overview.substr(0, 175)
  //   ) : (
  //     <Text style={styles.description}>{show.overview} </Text>
  //   );

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${show.backdrop_path}`,
        }}
      />
      <View style={styles.inner_container}>
        <Text style={styles.header}>
          {show.original_title || show.original_name}
        </Text>
        <Text style={styles.description}>{show.overview}</Text>

        <Text>The Cost</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  inner_container: {
    padding: 20,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
  header: {
    color: '#ffffff',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: '#dddddd',
    textAlign: 'justify',
  },
});

export default DetailScreen;
