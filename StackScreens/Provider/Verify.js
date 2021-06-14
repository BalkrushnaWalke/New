import React,{useLayoutEffect} from 'react'
import {StyleSheet, Text, View,TouchableOpacity,Alert,TextInput,Platform} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import  { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import styles from '../../assets/Styles/Styles.js';

const token = 'YWRtaW5hZG1pbjEyMw==';

export default function Verify({navigation}) {
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
            <Text style={styles.frgt_que}>Verification</Text>
            <Text style={styles.verify_state}>We have sent you a verification code to your email ID davidwalb@gmail.com</Text>
            </View>
            <OTPInputView
              style={{width: '80%', height: 200}}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled = {(code => {
                  console.log(`Code is ${code}, you are good to go!`)
              })}
          />

          <Text>Didnt get a code? Resend it</Text>


            <View style={styles.lg_btm}>

              <View style={styles.send}>
                <Button containerStyle={styles.button} buttonStyle={styles.LbuttonStyle} onPress={signIn} title='Send'/>
                <Text style={styles.lg_create}>Have an account? <Text onPress={() => navigation.navigate('Login')}>Log in</Text></Text>
              </View>
            </View>
        </View>

        </View>
  );
};
