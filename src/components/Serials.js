import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Card from './Card';
import {
  getActionAdventureTv,
  getCrimeTv,
  getNetflixOriginal,
  getPopularTv,
  getTrendingTv,
} from '../store/actions/serialActions';

const Serials = ({navigation}) => {
  const dispatch = useDispatch();
  const {popularTv} = useSelector(state => state.serial);
  const {netflixOriginalTv} = useSelector(state => state.serial);
  const {trendingTv} = useSelector(state => state.serial);
  const {actionAdventureTv} = useSelector(state => state.serial);
  const {crimeTv} = useSelector(state => state.serial);

  useEffect(() => {
    dispatch(getActionAdventureTv());
    dispatch(getCrimeTv());
    dispatch(getNetflixOriginal());
    dispatch(getPopularTv());
    dispatch(getTrendingTv());
  }, []);

  return (
    <View>
      <Card
        shows={actionAdventureTv.results}
        title="Action"
        navigation={navigation}
      />
      <Card shows={crimeTv.results} title="Crime" navigation={navigation} />
      <Card
        shows={netflixOriginalTv.results}
        title="Netflix Original"
        navigation={navigation}
      />
      <Card shows={popularTv.results} title="Popular" navigation={navigation} />
      <Card
        shows={trendingTv.results}
        title="Trending"
        navigation={navigation}
      />
    </View>
  );
};

export default Serials;
