import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Navbar from '../components/Navbar';
import Films from '../components/Films';
import Serials from '../components/Serials';

const HomeScreen = ({navigation, route}) => {
  const [isRouteAll, setIsRouteAll] = useState(false);

  useEffect(() => {
    if (route.name === 'All') {
      setIsRouteAll(true);
    }
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar navigation={navigation} isRouteAll={isRouteAll} />
        <Films navigation={navigation} />
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

export default HomeScreen;
