// In App.js in a new project

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AvailableDesk, Bookpage} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookPage" component={Bookpage} />
        <Stack.Screen name="Desk" component={AvailableDesk} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
