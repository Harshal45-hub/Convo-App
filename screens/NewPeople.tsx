import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-linear-gradient'

const NewPeople = () => {
  return (
    <LinearGradient colors={['#0F172A', '#0B0F1A']} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>NewPeople Screen</Text>
      </View>
    </LinearGradient>
  )
}

export default NewPeople

const styles = StyleSheet.create({})