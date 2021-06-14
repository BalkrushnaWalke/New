import React,{useLayoutEffect} from 'react'
import {StyleSheet, Text, View,TouchableOpacity,Alert,TextInput,Platform} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import  { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import styles from '../../assets/Styles/Styles.js';

const token = 'YWRtaW5hZG1pbjEyMw==';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState('');
  const isFocused = useIsFocused();

  setTimeout(() => {
    setLoad(false);
  }, 5000);

  useEffect(()=>{
    setLoad(false);

    if(global.sUser != null) {
      navigation.navigate('ProviderDrawer');
    }

    },[isFocused])


    const signIn = () =>{
      setLoad(true);

}

  return (
    <View behavior='padding' style={styles.container}>
            <StatusBar Style='light'/>
          <View>
            <Image source={require('../../assets/images/Life.jpg')}
            style={styles.lg_image}
            />
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email'
                autoFocus type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={[
                  styles.textInput,
                ]}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput placeholder='Password'
                 secureTextEntry
                 type='password'
                 value={password}
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={signIn}
                style={[
                  styles.textInput,
                ]}
                 />
            </View>

            <View style={styles.lg_btm}>
              <View style={styles.frgt}>
                <Text onPress={() => navigation.navigate('Forgot')} style={styles.white}>Forgot Password?</Text>
              </View>
              <View>
                <Button containerStyle={styles.button} buttonStyle={styles.LbuttonStyle} onPress={() => navigation.navigate('TabNavigation')} title='Login'/>
                <Text style={styles.lg_create}>Dont have an account? <Text onPress={() => navigation.navigate('Register')}>Create one</Text></Text>
              </View>
            </View>
        </View>

        </View>
  );
};
