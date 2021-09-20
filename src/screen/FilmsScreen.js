import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Films from '../components/Films';
import Navbar from '../components/Navbar';
import RandomShow from '../components/RandomShow';
import {useSelector} from 'react-redux';

const FilmsScreen = ({navigation, route}) => {
  const [isRouteFilms, setIsRouteFilms] = useState(false);
  const {actionMovie} = useSelector(state => state.movie);

  useEffect(() => {
    if (route.name === 'Films') {
      setIsRouteFilms(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar navigation={navigation} isRouteFilms={isRouteFilms} />
        <RandomShow shows={actionMovie.results} />
        <Films navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
  },
});
export default FilmsScreen;
