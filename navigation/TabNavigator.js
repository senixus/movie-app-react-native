import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './StackNavigator';
import SearchScreen from '../src/screen/SearchScreen';
import FavoriteScreen from '../src/screen/FavoriteScreen';
import ProfileScreen from '../src/screen/ProfileScreen';
import {View, Image, Button, TouchableOpacity} from 'react-native';
import heart from '../assets/heart.png';
import home from '../assets/home.png';
import user from '../assets/user.png';
import search from '../assets/search.png';
import arrow from '../assets/back_arrow.png';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  tabBarShowLabel: false,
  tabBarIcon: true,
  headerShown: false,
  headerStyle: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },

  headerBackTitle: 'Back',
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#000',
        },
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#370102' : 'transparent',
                borderRadius: 100,
                padding: 10,
              }}>
              <Image
                source={home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E40405' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={({navigation, route}) => ({
          //  headerTitle: 'Selam', // route.params.original_title || route.params.original_name
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#ffffff',
                }}
                source={arrow}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#370102' : 'transparent',
                borderRadius: 100,
                padding: 10,
              }}>
              <Image
                resizeMode="contain"
                source={search}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E40405' : '#748c94',
                }}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#370102' : 'transparent',
                borderRadius: 100,
                padding: 10,
              }}>
              <Image
                source={heart}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E40405' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation, route}) => ({
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#ffffff',
                }}
                source={arrow}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#370102' : 'transparent',
                borderRadius: 100,
                padding: 10,
              }}>
              <Image
                resizeMode="contain"
                source={user}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E40405' : '#748c94',
                }}
              />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

// headerLeft: () => (
//   <Button
//     onPress={() => alert('This is a button!')}
//     title="Info"
//     color="red"
//   />
// ),
// tabBarIcon: ({focused}) => (
//   <Image
//     source={search}
//     style={{
//       width: 25,
//       height: 25,
//       tintColor: focused ? '#e32f45' : '#748c94',
//     }}
//   />
// ),
