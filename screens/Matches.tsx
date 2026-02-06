import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { heightToDP, widthToDP } from 'react-native-responsive-screens'
import MatchesTabs from '../Navigation/MatchesTabs'

const Matches = () => {
  return (
    <LinearGradient colors={['#0F172A', '#0B0F1A']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headingContainer}>
           <Text style={styles.headingText}>Matches</Text>
           <Text style={styles.subHeadingText}>connect with like minded people who share your interests!</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>    
  )
}

export default Matches

const styles = StyleSheet.create({
  headingContainer: {
    width: widthToDP('90%'),
    height: heightToDP('7%'),
    alignSelf: 'center',
    marginTop: heightToDP('3%'),
  },
  headingText:{
    color: 'white',
    fontSize:heightToDP('3.5%'),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  subHeadingText:{
    color: 'white',
    fontSize:heightToDP('1.5%'),
    fontWeight:'condensedBold',
    fontFamily: 'Poppins',
    marginTop: heightToDP('0.5%'),
  }
})