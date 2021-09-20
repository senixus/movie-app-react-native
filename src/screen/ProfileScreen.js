import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Settings from '../components/Settings';
import UserCard from '../components/UserCard';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <UserCard />
      <Settings />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
  },
});
