import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList, Image ,TouchableNativeFeedback,Alert} from 'react-native'
import style from '../style/listStyle';
import style2 from '../style/simpsonItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function List(props) {
  let navigation  = props.navigation;    
  console.log(navigation)
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const getData = async (deger) => {
    try {
      let value = await AsyncStorage.getItem('@dataList')
     
      if(value !==  "0"&&value!==null ) {
        
        setData(JSON.parse(value));
      }
      else {
     if(deger){
      axios.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
      .then(function (response) {
        setData(response.data)
        const jsonValue = JSON.stringify(response.data)
         AsyncStorage.setItem('@dataList', jsonValue)
        
      })
      .catch(function (error) {
        console.log(error);
      });
     }
     else{
      setData(JSON.parse(value));
     }
       
      }
    } catch(e) {
     console.log(e)
    }

  }
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    getData(true);  
    });
    return unsubscribe;
  }, [navigation]);
  const simpsonsItem =(item,navigation)=>{
    const deleteItem=async(id)=>{
       
            try {
              let value = await AsyncStorage.getItem('@dataList')
           
              if(value !== null) {
              value= JSON.parse(value);
             let newList= value.filter(i=>i.id!==id);           
             saveData(newList)       
              }
            } catch(e) {
              console.log(e)
            }
          
    }
    const saveData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          
          if(value.length<1){
            console.log("baasaasas")
            await AsyncStorage.setItem('@dataList', "0")
            getData(false);
         
          }else{
            await AsyncStorage.setItem('@dataList', jsonValue)
            getData(true);
          
          }
         
          
        } catch (e) {
          console.log(e)
        }
      }
    return(
        <View style={style2.screen}>
            <View style={style2.borderBox}>
                <TouchableNativeFeedback  onPress={()=>{navigation.navigate('detail',{item})}} >
                <Image
        source={{uri:item.avatar}}
        resizeMode="contain"
        style={{width: 80, height: 80}}
      />
                </TouchableNativeFeedback>
            
            </View>
            <View style={style2.nameBox}>
            <Text onPress={()=>{navigation.navigate('detail',{item})}}  style={style2.nameText}>{item.name}</Text>
            </View>
            <View style={style2.deleteBox}>
            <Icon onPress={()=>{
               Alert.alert(
                '',
               "Silmek İstediğine Eminmisin?",
                [
                  {
                    text: 'Vazgeç',
                    onPress: () => {},
                    style: 'cancel',
                  },
                  {
                    text: 'Evet',
                    onPress: () =>
                    deleteItem(item.id),
                  },
                ],
                {cancelable: false},
              );
            }} name="trash" color="black" size={25} /> 
            </View>
        </View>
    )
}

 useEffect(() => {
  getData();
   return () => {   
   }
 }, [])
    return (
        <View style={style.screen}>
           <View style={style.textBox}>
            <Text style={style.simpsonsTextBox}>Simpsons</Text>
           </View>
           <View style={style.simpsonsListBox}>
           <FlatList
          style={{marginTop: 15}}
          numColumns={1}
          data={data}
          renderItem={({item,}) => simpsonsItem(item, navigation)}
          keyExtractor={(item) => {
            item.id;
          }}
        />
           </View>
           <View style={style.addButtons}>
               <View style={style.addButtonsBox}>
               <Icon onPress={()=>{navigation.navigate('addSimpsons')}}  name="plus" color="white" size={25} /> 
               </View>
           
           </View>
        </View>
    )
}

