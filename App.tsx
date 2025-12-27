import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomePage from './screens/HomePage'
import BottomTabs from './Navigation/BottomTabs'
import { NavigationContainer } from '@react-navigation/native'
import LoginSignUp from './Login&AccountPages/LoginSignUp'
import LoginStack from './Login&AccountPages/LoginStack'



const App = () => {
  const [text, setText] = useState('')
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
