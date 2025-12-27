import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../screens/HomePage'
import Notifications from '../screens/Notifications'
import LoginSignUp from '../Login&AccountPages/LoginSignUp'
import { BottomTabs } from 'react-native-screens'


const Stack = createNativeStackNavigator();
export const HomePageStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>

    )
}



const StackNavigate = () => {
  return (
    <View>
      <Text>StackNavigate</Text>
    </View>
  )
}

export default StackNavigate

const styles = StyleSheet.create({})