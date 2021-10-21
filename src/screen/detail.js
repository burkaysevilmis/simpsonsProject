import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import style from '../style/detail';
export default function Detail(params) {
    const item =params.route.params.item;
    console.log(item)
    return (
        <View style={style.screen}>
           <View style={style.imgBox}>
           <Image
        source={{uri:item.avatar}}
        resizeMode="contain"
        style={{width: 200, height: 200}}
      />
           </View>
           <View style={style.textBox}>
            <Text style={style.txtName}>{item.name}</Text>
            <Text style={style.txtJob}>{item.job}</Text>
            <Text style={style.txtAbout}>{item.about}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({})
