import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Login from './StackScreens/Provider/Login.js'
import Forgot from './StackScreens/Provider/Forgot.js'
import Reset from './StackScreens/Provider/Reset.js'
import Register from './StackScreens/Provider/Register.js'
import Verify from './StackScreens/Provider/Verify.js'
// import Home from './StackScreens/Provider/Home.js'


import { StackActions } from '@react-navigation/native';

const Stack  = createStackNavigator();

const globalScreenOptions={
  headerStyle: { backgroundColor:"#040424"},
  headerTitleStyle: {color:"white"},
  headerTintColor:"white",
};

console.disableYellowBox = true;

export default function StackNavigation( { navigation }) {

  return (
      <Stack.Navigator
      //initialRouteName="Home"

      screenOptions={globalScreenOptions}>
      <Stack.Screen  name='Login' component={Login}/>
      <Stack.Screen  name='Register' component={Register}/>
      <Stack.Screen  name='Reset' component={Reset}/>
      <Stack.Screen  name='Forgot' component={Forgot}/>
      <Stack.Screen  name='Verify' component={Verify}/>


      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
