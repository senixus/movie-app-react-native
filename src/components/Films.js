import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getActionMovies,
  getCrimeMovies,
  getDramaMovies,
  getPopularMovies,
  getTrendingMovies,
} from '../store/actions/movieActions';
import Card from './Card';
import RandomShow from './RandomShow';

const Films = ({navigation}) => {
  const dispatch = useDispatch();
  const {actionMovie} = useSelector(state => state.movie);
  const {crimeMovie} = useSelector(state => state.movie);
  const {dramaMovie} = useSelector(state => state.movie);
  const {popularMovie} = useSelector(state => state.movie);
  const {trendingMovie} = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(getActionMovies());
    dispatch(getCrimeMovies());
    dispatch(getDramaMovies());
    dispatch(getPopularMovies());
    dispatch(getTrendingMovies());
  }, []);

  return (
    <View>
      <Card
        shows={actionMovie.results}
        title="Action"
        navigation={navigation}
      />
      <Card shows={crimeMovie.results} title="Crime" navigation={navigation} />
      <Card shows={dramaMovie.results} title="Drama" navigation={navigation} />
      <Card
        shows={popularMovie.results}
        title="Popular"
        navigation={navigation}
      />
      <Card
        shows={trendingMovie.results}
        title="Trending"
        navigation={navigation}
      />
    </View>
  );
};

export default Films;

const styles = StyleSheet.create({});
