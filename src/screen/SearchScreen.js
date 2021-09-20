import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import search from '../../assets/search.png';
import camera from '../../assets/camera.png';
import {useDispatch, useSelector} from 'react-redux';
import {searchShows} from '../store/actions/searchAction';
import SearchCard from '../components/SearchCard';

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {searchedShows} = useSelector(state => state.search);

  const handleSearch = text => {
    dispatch(searchShows(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image source={search} style={styles.image} resizeMode="contain" />
        <View style={styles.image_container}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#ddd"
            onChangeText={handleSearch}
          />
          <View style={styles.image_wrapper}>
            <Image
              style={styles.camera_image}
              source={camera}
              resizeMode="contain"
            />
          </View>
        </View>
        <SearchCard
          searchedShows={searchedShows.results}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  inner_container: {
    margin: 10,
    flex: 1,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 100,
    paddingHorizontal: 40,
    width: Dimensions.get('window').width / 1.25,
  },
  image_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image_wrapper: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: 45,
    width: 45,
    borderRadius: 100,
    padding: 10,
    marginHorizontal: 10,
  },
  image: {
    position: 'absolute',
    zIndex: 1,
    top: 14,
    left: 10,
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  camera_image: {
    tintColor: 'gray',
    width: 25,
    height: 25,
  },
});
