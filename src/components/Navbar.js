import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Navbar = ({navigation, isRouteAll, isRouteFilms, isRouteSerials}) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inner_container}>
            <Text
              style={isRouteAll ? styles.border : styles.text}
              onPress={() => navigation.navigate('All')}>
              All
            </Text>
            <Text
              style={isRouteFilms ? styles.border : styles.text}
              onPress={() => navigation.navigate('Films')}>
              Films
            </Text>
            <Text
              style={isRouteSerials ? styles.border : styles.text}
              onPress={() => navigation.navigate('Serials')}>
              Serials
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    margin: 20,
    flex: 1,
  },
  text: {
    color: '#dddddd',
    marginRight: 20,
  },
  inner_container: {
    flexDirection: 'row',
  },
  border: {
    color: '#ffffff',
    marginRight: 20,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderRadius: 1,
  },
});
