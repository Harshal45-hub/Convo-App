import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginSignUp from '../Login&AccountPages/LoginSignUp'
import { NavigationContainer } from '@react-navigation/native'
import App from '../App'
import BottomTabs from '../Navigation/BottomTabs'

const LoginStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginSignUp" component={LoginSignUp} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
   
  )
}

export default LoginStack