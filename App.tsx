import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomePage from './screens/HomePage'
import BottomTabs from './Navigation/BottomTabs'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const [text, setText] = useState('')
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
