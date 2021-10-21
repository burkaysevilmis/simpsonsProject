import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Color from '../constants/Color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({

   screen:{flex:1,marginTop:10,margin:10},
   txtName:{
       color:Color.black,
       fontSize:17,
   },
   nameInput:{
    width:'100%',height:45,borderWidth:1,borderColor:'gray',borderRadius:8,
    marginBottom:10,color:Color.black
   },
   txtJob:{
    color:Color.black,
    fontSize:17,
    },
    jobInput:{
    width:'100%',height:45,borderWidth:1,borderColor:'gray',borderRadius:8,
    marginBottom:10,color:Color.black
    },
    txtAbout:{
        color:Color.black,
        fontSize:17,
        },
        aboutInput:{
        width:'100%',height:100,borderWidth:1,borderColor:'gray',borderRadius:8,
        marginBottom:10,textAlignVertical: 'top',color:Color.black
        },
        txtImage:{
            color:Color.black,
            fontSize:17,
            },
            imageInput:{
            width:'100%',height:45,borderWidth:1,borderColor:'gray',borderRadius:8,
            marginBottom:10,color:Color.black
            },
});