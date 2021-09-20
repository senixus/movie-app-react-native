import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/screen/HomeScreen';
import FilmsScreen from '../src/screen/FilmsScreen';
import SerialsScreen from '../src/screen/SerialsScreen';
import DetailScreen from '../src/screen/DetailScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Stack.Screen
        name="All"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Films"
        component={FilmsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Serials"
        component={SerialsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={({navigation, route}) => ({
          title:
            route.params.show.original_title || route.params.show.original_name,
          // headerTitle:
          //   route.params.show.original_title || route.params.show.original_name,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
