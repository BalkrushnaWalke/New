import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Alert, Text, Dimensions, FlatList, RefreshControl } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';

import styles from '../../../../assets/Styles/Styles.js';

const token = 'YWRtaW5hZG1pbjEyMw==';
const BannerWidth = Dimensions.get('window').width;

export default function Profile({ navigation }) {
  const [provData, setProvData] = useState([]);
  const [chats,setChats]=useState([]);
  const [chatsName, setChatsName] = useState([]);
  const [servData, setServData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();
  const [load, setLoad] = useState('');

  setTimeout(() => {
    setLoad(false);
  }, 5000);

  useEffect(() =>{
    setLoad(true);

    if(global.sUser == null) {
      navigation.navigate('BusinessBook');
    }
    else {
      setProvData(JSON.parse(global.sUser));
      getServices();
    }
  }, [isFocused]);

  const getServices = () => {
  fetch('https://businessbook.co.in/api/api/services/read.php', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sp_id: global.providerID
    })
  }).then((response) => response.json())
.then((responseJson) => {
      setServData(responseJson.response.services);
      setLoad(false);
  })
.catch((error) => {
    console.log(error);
  });
}

const onClick = (sid) => {
          Alert.alert('Hold on!', 'Delete This Service?', [
       {
         text: 'Cancel',
         onPress: () => null,
         style: 'cancel',
       },
       { text: 'YES', onPress: () => {deleteService(sid)} },
     ]);
     return true;
        }

        const deleteService = (id) => {
          fetch('https://businessbook.co.in/api/api/services/', {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: id,
            })
          }).then((response) => response.json())
        .then((responseJson) => {
              getServices();
          })
        .catch((error) => {
            console.log(error);
          });
        }

const renderService = ({ item }) => {
  return (
  <View style={styles.center}>
    <TouchableOpacity onPress={() => {onClick(item.sid)}}>
      <Card containerStyle={styles.sprofile_card_container}>
          <View style={styles.center}>
            <Text style={styles.services}>{item.service_product_name}</Text>
          </View>
      </Card>
    </TouchableOpacity>
  </View>
);
};

  return (
    <SafeAreaView style={styles.flex_container}>
      <StatusBar style='Light'/>
        { load ? (
            <Spinner
        visible={true}
        indicatorStyle={styles.spinnerTextStyle}
        color= 'blue'
        animation='fade'
      />
  ) : (
              <ScrollView style={styles.scrollView}>

              <View style={styles.top_view}>
                <View style={styles.userInfoSection}>

                    <View>
                      <Title style={styles.title}>{provData.name}</Title>

                    </View>
                </View>


                <View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.row}>
                      <Text style={{color:'#777777', marginLeft: 20}}>{provData.mobile}</Text>
                    </View>
                    <View>
                      <Button type='outline' buttonStyle={{ borderColor: '#6a5acd', color: '#6a5acd', marginRight: 15, width: 100 }} title='Edit' onPress={() => {navigation.navigate('Edit Profile')}} />
                    </View>
                  </View>
                  <View style={styles.row}>
                    <Text style={{color:'#777777', marginLeft: 20}}>{provData.email}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.profile_menu}>
                <View style={styles.menuWrapper}>
                  <Button buttonStyle={{ backgroundColor: '#00fa9a', color: '#6a5acd', marginTop: 20 }} title='Chat' onPress={() => {navigation.navigate('Chats')}} />
                </View>

                <View style={styles.flat_container}>
                  <Text style={styles.services}>Services Offered</Text>
                  <FlatList
                    numColumns={2}
                    data={servData}
                    keyExtractor={({ id }, index) => id}
                    renderItem={ renderService }
                  />
                <Button buttonStyle={{ backgroundColor: '#6a5acd', width: BannerWidth / 2 - 30, borderRadius: 15, marginTop: 15, marginBottom: 100 }} title='Add New Service' onPress={() => {navigation.navigate('Add Service')}} />
                </View>
              </View>
      </ScrollView>
    )}
    </SafeAreaView>
  );
};
