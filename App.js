import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import listS from './src/screen/list';
import detailS from './src/screen/detail';
import addSimpsonsS from './src/screen/addSimpsons';
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
       <Stack.Navigator>
            <Stack.Screen
              name="list"
              component={listS}
              options={{
                headerShown: false,
              }}
            />
             <Stack.Screen
              name="detail"
              component={detailS}
              options={{
                headerShown: true,
                headerBackTitle:'Simpsons',
                headerTitle:'Details',
                headerTitleAlign:'center'       
              }}
            />
             <Stack.Screen
              name="addSimpsons"
              component={addSimpsonsS}
              options={{
                headerShown: true,
                headerTitle:'Add New Character',
                headerTitleAlign:'center'       
              }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
