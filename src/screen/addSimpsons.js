import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native'
import style from '../style/addSimpsons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function addSimpsons(props) {
    console.log(props)
    const [name, setName] = useState(0);
    const [job, setJob] = useState(0);
    const [about, setAbout] = useState(0);
    const [image, setImage] = useState(0);
    const [valid, setValid] = useState(false);
    const [data, setData] = useState([]);
    let navigation  = props.navigation; 
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setName('');
            setAbout('');
            setJob('');
            setImage('');
        });
        return unsubscribe;
      }, [navigation]);
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@dataList');
          if(jsonValue!=null){
              console.log(jsonValue)
              let parse=JSON.parse(jsonValue);
              const lastItemID=parse[parse.length-1].id;
              parse.push({id:parseInt(lastItemID)+1,name,avatar:image,job,about})
            console.log(parse)
           //setData(data.sort((a, b) => a.id - b.id)) ;
           const jsonValueNew = JSON.stringify([{id:lastItemID+1,name,avatar:image,job,about}])
           AsyncStorage.setItem('@dataList', JSON.stringify(parse));
            props.navigation.goBack();
       
          }else{
            const jsonValue = JSON.stringify([{id:1,name,avatar:image,job,about}])
            AsyncStorage.setItem('@dataList', jsonValue)
          }
          return;
        } catch(e) {
          // error reading value
        }
      }
    const check =()=>{
      
            if(name.length>2){
              
            }else{setValid(false);alert('Name alanını kontrol edin.');return false;}
            if(job.length>2){
               
            }else{setValid(false);alert('Job alanını kontrol edin.');return false;}
            if(about.length>2){
               
            }else{setValid(false);alert('About alanını kontrol edin.');return false;}
            if(image.length>2){
               
                getData();
               
            }else{setValid(false);alert('image alanını kontrol edin.');return false;}
    }
    return (
        <View style={style.screen}>
            <Text style={style.txtName}>Name Surname</Text>
            <TextInput style={style.nameInput} value={name} onChangeText={(value)=>{setName(value)}} />
            <Text style={style.txtJob}>Job Title</Text>
            <TextInput style={style.jobInput} value={job} onChangeText={(value)=>{setJob(value)}}  />
            <Text style={style.txtAbout}>About Him/Her</Text>
            <TextInput style={style.aboutInput} value={about} onChangeText={(value)=>{setAbout(value)}} />
            <Text style={style.txtImage}>Image Link</Text>
            <TextInput style={style.imageInput} value={image} onChangeText={(value)=>{setImage(value)}} />
            <Button title='Add Character' onPress={()=>{check()}} />
        </View>
    )
}

const styles = StyleSheet.create({})
