import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Serials from '../components/Serials';

const FavoriteScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Serials navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
});

export default FavoriteScreen;
