import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginSignUp from '../Login&AccountPages/LoginSignUp'
import { NavigationContainer } from '@react-navigation/native'
import App from '../App'
import BottomTabs from '../Navigation/BottomTabs'
import Information from './Information'
import SignUp from './SignUp'

const LoginStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginSignUp" component={LoginSignUp} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
   
  )
}

export const AuthGradient = ['#0F172A', '#0B0F1A']

export default LoginStack