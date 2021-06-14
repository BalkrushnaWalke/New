import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ProviderProfile from "./Profile";

import { StackActions } from '@react-navigation/native';

const Stack  = createStackNavigator();

console.disableYellowBox = true;

export default function ProviderStack({ navigation }) {
  const globalScreenOptions={
    headerStyle: { backgroundColor:"#4040a1"},
    headerTitleStyle: {color:"white"},
    headerTintColor:"white",

    headerLeft: ()=> (
    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>

        <TouchableOpacity onPress ={ () => navigation.openDrawer()}
                 activeOpacity={0.5} >
                    <Icon name='bars' size={30} color='white' />
                </TouchableOpacity>
    </View>
        ),
  };

  return (
      <Stack.Navigator
      //initialRouteName="ProviderProfile"

      screenOptions={globalScreenOptions}>
      <Stack.Screen  name='Profile' component={ProviderProfile}/>

      </Stack.Navigator>
  );
};
