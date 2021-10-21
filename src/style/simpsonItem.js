import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Color from '../constants/Color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({

   screen:{flex:1,flexDirection:'row',marginTop:10},
   borderBox:{flex:0.2,justifyContent:'center',alignItems:'center'},
   nameBox:{flex:0.6,justifyContent:'center',marginLeft:10},
   nameText:{fontSize:17,color:'black',fontWeight:'bold'},
   deleteBox:{flex:0.2,justifyContent:'center',
   alignItems:'center'},
   

});