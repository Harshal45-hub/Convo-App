import { StyleSheet, Text, Touchable, TouchableOpacity, View ,TextInput, ScrollView} from 'react-native'
import React from 'react'
import { widthToDP, heightToDP } from 'react-native-responsive-screens'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { AuthGradient } from '../Login&AccountPages/LoginStack';





const HomePage = ({navigation}:any) => {
  
  return (
    <LinearGradient colors={AuthGradient} style={{flex:1}}>
      <View style={styles.headingContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.navbarContainer}>
            <Text style={styles.navbarText}>Find Your Tribe</Text>
            <Text style={styles.descriptionText}>Connect with people who share your interests!</Text>
          </View>
          <TouchableOpacity style={styles.iconStyle}  onPress={() => {
            navigation.navigate('Notifications');
          }}>
            <Ionicons name='notifications-outline' size={(heightToDP('4%'))} color='white' />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarContainer}>
          <Ionicons name='search' size={(widthToDP('6%'))} color='#A9A9A9' style={styles.searchIcon} />
          <TextInput placeholder='Search for groups, events, or topics' placeholderTextColor='#A9A9A9' style={styles.TextInputStyle} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}></View>
        <View style={styles.contentContainer}></View>
        <View style={styles.contentContainer}></View>
        <View style={styles.contentContainer}></View>
        <View style={styles.contentContainer}></View>
        <View style={styles.contentContainer}></View>
      </ScrollView>
    </LinearGradient>
  )
}

export default HomePage

const styles = StyleSheet.create({
  headingContainer:{
    width: widthToDP('100%'),
    height: heightToDP('23%'),
    zIndex:10,
    elevation:5
  },
  mainContainer: {
    flexDirection: 'row',
    width: widthToDP('100%'),
    height: heightToDP('11%'),
    marginTop: heightToDP('2%'),
    alignItems: 'center',
  },

  navbarContainer: {
    width: '80%',
    height: '90%',
    alignSelf: 'flex-start',
  },
  navbarText: {
    fontFamily: 'Poppins-Condensed',
    color: 'white',
    fontSize: heightToDP('3.5%'),
    fontWeight: 'bold',
    marginLeft: '5%'
  },
  descriptionText: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: heightToDP('1.7%'),
    marginLeft: '5%'
  },
  iconStyle: {
    position: 'absolute',
    right: widthToDP('4%'),
    top: heightToDP('2%'),
  },
  searchBarContainer:{
    flexDirection:'column',
    width: widthToDP('90%'),
    height: heightToDP('6%'),
    backgroundColor: '#2E2E2E',
    alignSelf:'center',
    borderRadius: widthToDP('15%'),
    marginTop: heightToDP('2%'),
    justifyContent:'center',
  },
  searchIcon:{
    position: 'absolute',
    marginLeft: widthToDP('5%')
  },
  TextInputStyle:{
     color: 'white',
     paddingLeft: 10, 
     height: '100%',
     marginLeft: widthToDP('10%')  
  },
  contentContainer:{
    width: widthToDP('100%'),
    height:heightToDP('20%'),
    backgroundColor:'#3E3E3E',
    marginTop: heightToDP('2%')
  }

})

