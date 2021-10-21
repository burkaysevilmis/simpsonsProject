import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Color from '../constants/Color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({

   screen:{flex:1,backgroundColor:Color.white},
   imgBox:{
    flex:0.5,
    justifyContent:'center',
    alignItems:'center'
   },
   textBox:{
       flex:0.5,
       padding:10
   },
   txtName:{
       textAlign:'center',
       marginBottom:5,
       fontWeight:'bold',
       color:Color.black,
       fontSize:20
   },
   txtJob:{
       textAlign:'center',
       fontSize:18,
       color:Color.gray
   },
   txtAbout:{
       textAlign:'center',
       marginTop:10,
       color:Color.gray
   }

});