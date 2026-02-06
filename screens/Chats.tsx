import { InputAccessoryView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

const Chats = () => {
  return (
    <LinearGradient colors={['#0F172A', '#0B0F1A']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Chats
             Screen</Text>
            
        </View>
      </SafeAreaView>
    </LinearGradient> 
  )
}

export default Chats

const styles = StyleSheet.create({})