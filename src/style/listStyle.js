import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Color from '../constants/Color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.white,
  },
  textBox:{
      flex:0.1,
      justifyContent:'center',
      alignItems:'center'
  },
  simpsonsTextBox:{
      fontSize:18,
      fontWeight:'bold',
      color:Color.black
  },
  simpsonsListBox:{
      flex:0.8,
      
      },
      addButtons:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
      },
      addButtonsBox:{
        width:50,height:50,borderRadius:50,backgroundColor:'#0288D1',justifyContent:'center',alignItems:'center'
      }
});