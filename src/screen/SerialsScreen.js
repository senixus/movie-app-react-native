import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Navbar from '../components/Navbar';
import Serials from '../components/Serials';
import RandomShow from '../components/RandomShow';

const SerialsScreen = ({navigation, route}) => {
  const [isRouteSerials, setIsRouteSerials] = useState(false);
  const {actionAdventureTv} = useSelector(state => state.serial);

  useEffect(() => {
    if (route.name === 'Serials') {
      setIsRouteSerials(true);
    }
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar navigation={navigation} isRouteSerials={isRouteSerials} />
        <RandomShow shows={actionAdventureTv.results} />
        <Serials navigation={navigation} />
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

export default SerialsScreen;
