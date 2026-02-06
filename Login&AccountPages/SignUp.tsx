import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { heightToDP, heightToFonts, widthToDP } from 'react-native-responsive-screens'


const SignUp = () => {
  return (
    <SafeAreaView style={{flex:1}}>

        <LinearGradient colors={['#0F172A', '#0B0F1A']} style={styles.container}>

           <Image source={{uri:'https://res.cloudinary.com/dpbecypyl/image/upload/v1770391099/ChatGPT_Image_Feb_6_2026_08_27_10_PM_krp6hz.png'}} 
           style={styles.image}
           />

           <Text style={styles.headingText}>Welcome to FRIND</Text>
           <Text style={styles.subheadingText}>Sign up to connect with like-minded people who share your interests!</Text>
        </LinearGradient>

    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    image: {
      width: widthToDP('80%'),
      height: heightToDP('30%'),
      alignSelf:'center',
    },
    headingText: {
      alignSelf :'center',
      fontWeight: 'bold',
      marginTop:heightToDP('2%'),
      fontSize: heightToFonts('3%'),
      color:'white'
    },
    subheadingText: {
        marginTop: heightToDP('1%'),
        color:'white',
        alignSelf:'center',
        fontSize : heightToFonts('1.3%'),
    }
})