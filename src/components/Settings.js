import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import world from '../../assets/world.png';
import phone from '../../assets/smartphone.png';
import notification from '../../assets/alert.png';
import privacy from '../../assets/privacy.png';
import contact from '../../assets/contact.png';
import logout from '../../assets/exit.png';
import arrow from '../../assets/arrow.png';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={world} />
          <Text style={styles.text}>Language</Text>
        </View>
        <Text style={styles.text_icon}>English</Text>
      </View>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={phone} />
          <Text style={styles.text}>Phone Number</Text>
        </View>
        <Text style={styles.text_icon}>Add</Text>
      </View>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={notification} />
          <Text style={styles.text}>Notification</Text>
        </View>
        <Image style={styles.icon} source={arrow} />
      </View>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={privacy} />
          <Text style={styles.text}>Privacy settings</Text>
        </View>
        <Image style={styles.icon} source={arrow} />
      </View>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={contact} />
          <Text style={styles.text}>Contact support</Text>
        </View>
        <Image style={styles.icon} source={arrow} />
      </View>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={logout} />
          <Text style={styles.text}>Log out</Text>
        </View>
        <Image style={styles.icon} source={arrow} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161616',
    padding: 13,
    flex: 1,
  },
  image_container: {
    flexDirection: 'row',
  },
  text: {
    color: '#f2f2f2',
    marginHorizontal: 18,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#E40405',
  },
  text_icon: {
    color: '#E40405',
  },
  icon: {
    tintColor: '#E40405',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
