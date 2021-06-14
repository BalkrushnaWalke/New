import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const styles = StyleSheet.create({

  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    color: 'red',
    backgroundColor: 'blue',
  },
  spinnerTextStyle: {
    color: 'blue',

    // backgroundImage: url('https://cdn.dribbble.com/users/450343/screenshots/2465762/loader.gif'),
  },

  //Options
  text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  icon: {
    height: 80,
    width: 80,
  },

  //Login Screen
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#040424',
  },
  flex_container: {
    flex: 1,
  },

  inputContainer: {
    flexDirection:  'row',
    marginTop:  20,
    marginBottom:  13,
    borderBottomWidth:  1,
    borderBottomColor: '#1e90ff',
    paddingBottom:  6,
    marginLeft: -40,
    marginRight: -40,
  },
  button: {
    width: 200,
    marginTop: 10,
    color: '#4040a1',
  },
  buttonStyle: {
    color: '#4040a1',
  },
  Backbutton: {
    width: 200,
    marginTop: 10,
    backgroundColor: 'red',
  },
  errorMsg: {
    color: 'red',
    fontSize: 13,
    padding: 6,
  },
  textInput:  {
    flex:  1,
    marginTop: -12,
    paddingLeft:  20,
    color: '#fff',
    placeholderTextColor: '#fff',
  },
  lg_image: {
    width: 150,
    height: 150,
    marginTop: 46,
    marginBottom: 46,
  },
  lg_btm: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  lg_create: {
    paddingTop: 30,
    paddingBottom: 30,
    color: '#fff',
  },
  frgt: {
    marginLeft: -20,
    marginBottom: 100,
  },
  white: {
    color: '#fff',
  },

  //Forgot Pass

  frgt_que: {
    letterSpacing: 0.31,
    fontSize: 26,
    color: '#fff',
  },
  email_state: {
    maxWidth: BannerWidth / 2,
    marginBottom: 60,
    color: '#fff',
 },
  verify_state: {
    maxWidth: BannerWidth / 2 + 40,
    marginLeft: -30,
    marginBottom: 60,
    color: '#fff',
  },
  send: {
    marginTop: 100,
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },
 
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },
 
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
 
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  //RegisterScreen

  regi_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  regi_scrollView: {
    backgroundColor: 'white',
    padding: 30,
    margin: 5,
    borderRadius: 20,
  },
  regi_button: {
    width: 250,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 20,
    marginLeft: '15%',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  edit_btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  Lbutton: {
    width: 260,
    marginLeft: 15,
  },
  LbuttonStyle: {
    backgroundColor: '#5098F2',
    borderRadius: 50,
  },
  regi_inputContainer: {
    //width:350,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#1e90ff',
    paddingBottom: 6,
  },
  picker_inputContainer: {
    //width:350,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#1e90ff',
  },
  datePickerStyle: {
    width: 335,
    marginTop: 20,
  },
  picker: {
    height: 80,
    width: 310,
    borderColor: 'grey',
    borderBottomColor: '#1e90ff',
    borderWidth: 2,
    marginTop: -20,
    marginLeft: 5,
    marginBottom: -15,
  },
  iconst: {
    marginBottom: 40,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  create_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  //HomeScreen
  home_container: {
    backgroundColor: '#fff',
    marginTop: 2,
  },
  home_card_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    marginVertical: 3,
    width: BannerWidth / 4 - 10,
    borderRadius: 15,
    borderColor: '#1e90ff',
    shadowColor: '#1e90ff',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 5,
  },
  cardFlat_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  type_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    marginVertical: 3,
    width: BannerWidth / 4 - 10,
    height: BannerWidth / 4 - 10,
    borderRadius: 15,
    borderColor: '#4040a1',
    shadowColor: '#4040a1',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
  typeFlat_container: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 3,
    borderRadius: 30,
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  ad_image: {
    width: BannerWidth - 30,
    height: 160,
    borderRadius: 20,
  },
  mrkt_image: {
    width: BannerWidth - 30,
    height: 100,
    borderRadius: 20,
  },
  banner_text: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 20,
  },

  //ProfileScreen
  top_view: {
    flex: 2,
  },
  userInfoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    marginBottom: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  menuWrapper: {
    marginTop: 10,
  },
  profile_menu: {
    height: '100%',
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#4040a1',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  sprofile_card_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#feb236',
    marginHorizontal: 2,
    marginVertical: 3,
    width: BannerWidth / 2 - 30,
    borderRadius: 15,
  },
  services: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#4040a1',
  },

  //EditProfileScreen
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    margin: 15,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,

    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  dp: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 30,
    borderRadius: 50,
  },
  prfl_img: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prfl_icon: {
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4040a1',
    borderRadius: 10,
  },
  prfl_txt: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4040a1',
  },
  action: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    paddingBottom: 6,
    borderRadius: 20,
    paddingTop: 15,
    paddingLeft: 15,
  },
  action_picker: {
    height: 80,
    width: 310,
    borderWidth: 2,
    marginTop: -30,
    marginLeft: 5,
    marginBottom: -15,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#4040a1',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

  //Cart
  cart_container: {
    height: '100%',
    backgroundColor: 'rgba(64, 64, 161, 0.2)',
    marginTop: 2,
  },

  //CartCard
  CartCard_container: {
    height: '100%',
    backgroundColor: 'rgba(64, 64, 161, 0.2)',
    paddingTop: '40%',
  },
  flat_container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card_container: {
    marginHorizontal: 2,
    marginVertical: 3,
    width: BannerWidth - 30,
    borderRadius: 15,
    borderColor: '#4040a1',
  },
  cartCard_width: {
    width: '50%',
  },
  cartCart_font: {
    fontSize: 14,
    color: '#666666',
  },
  cartCart_font_green: {
    fontSize: 14,
    color: '#00ff7f',
  },
  cartCart_font_blue: {
    fontSize: 14,
    color: '#1e90ff',
  },

  //ChatRoom
  chat: {
    flexDirection: 'column-reverse',
  },
  receiver: {
    padding: 15,
    paddingBottom: -15,
    backgroundColor: '#4040a1',
    alignSelf: 'flex-start',
    borderRadius: 25,
    borderBottomLeftRadius:  1,
    maxWidth: '80%',
  },
  sender: {
    padding: 15,
    paddingBottom: -15,
    backgroundColor: '#feb236',
    alignSelf: 'flex-end',
    borderRadius: 25,
    borderBottomRightRadius:  1,
    maxWidth: '80%',
  },
  senderText: {
    color: 'black',
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 25,
  },
  receiverText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 25,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  chat_textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },

  //ChatList
  chat_card_container: {
    marginHorizontal: 2,
    marginVertical: .1,
    width: BannerWidth - 3,
    borderBottomRightRadius: 50,
  },

  //GetService
  get_button:{
      width:250,
      marginTop:30,
      marginBottom: 30,
      borderRadius: 20,
      marginLeft:'15%',

  },

  get_inputContainer:{
      //width:350,
      flexDirection: 'row',
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',

  },
get_textInput: {
  flex: 1,
  marginTop: -12,
  height:25,
  marginTop:3,
  color: '#05375a',
},
});

export default styles;
