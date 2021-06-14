import React,{useLayoutEffect} from 'react'
import {StyleSheet, Text, View,TouchableOpacity,Alert,TextInput,Platform} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import  { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import styles from '../../assets/Styles/Styles.js';

const token = 'YWRtaW5hZG1pbjEyMw==';

export default function Register({navigation}) {
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

            <View>
            <Text style={styles.frgt_que}>Reset Password?</Text>
            <Text style={styles.email_state}>E-mail address verified! Set a new password</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Username'
                autoFocus type='text'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={[
                  styles.textInput,
                ]}
                />
            </View>
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
                autoFocus type='password'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={[
                  styles.textInput,
                ]}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Confirm Password'
                autoFocus type='password'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={[
                  styles.textInput,
                ]}
                />
            </View>


            <View style={styles.lg_btm}>

              <View>
                <Button containerStyle={styles.button} buttonStyle={styles.LbuttonStyle} onPress={() => navigation.navigate('Login')} title='Create Account'/>
                <Text style={styles.lg_create}>Have an account? <Text onPress={() => navigation.navigate('Login')}>Log in</Text></Text>
              </View>
            </View>
        </View>

        </View>
  );
};
