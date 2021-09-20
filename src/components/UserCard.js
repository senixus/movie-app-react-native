import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import user from '../../assets/user-image.jpg';

const UserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user_container}>
        <Image style={styles.user_image} source={user} />
        <Text style={styles.name}>Lesli Alexander</Text>
        <Text style={styles.email}>leslie.alexander@example.com</Text>
      </View>
      <View style={styles.count_container}>
        <View style={styles.counts}>
          <Text style={styles.count}>113</Text>
          <Text style={styles.count}>Watched</Text>
        </View>
        <View style={styles.counts}>
          <Text style={styles.count}>49</Text>
          <Text style={styles.count}>Started</Text>
        </View>
        <View style={styles.counts}>
          <Text style={styles.count}>3</Text>
          <Text style={styles.count}>Favorite</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  user_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  user_image: {
    marginVertical: 5,
    width: 90,
    height: 90,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  name: {
    marginVertical: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  email: {
    color: '#ddd',
  },
  count_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counts: {
    marginHorizontal: 10,
  },
  count: {
    color: '#fff',
    textAlign: 'center',
  },
});
