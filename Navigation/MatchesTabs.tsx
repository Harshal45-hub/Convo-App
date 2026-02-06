import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';    
import AllMatches from '../screens/AllMatches';
import Matches from '../screens/Matches';
import MutualInterests from '../screens/MutualInterests';
import NewPeople from '../screens/NewPeople';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightToDP, widthToDP } from 'react-native-responsive-screens';


const MatchesTabs = () => {
    const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#040911ff' }}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Matches</Text>
      </View>
      <Tab.Navigator initialRouteName="All Matches" screenOptions={{ tabBarStyle: { backgroundColor: '#040911ff' }, tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'gray', tabBarIndicatorStyle: { backgroundColor: 'beige' }, tabBarLabelStyle: { fontSize: heightToDP('1.5%'), fontWeight: 'semibold' } }}>
        <Tab.Screen name="All Matches" component={AllMatches} />
        <Tab.Screen name="Mutual Interests" component={MutualInterests} />
        <Tab.Screen name="New People" component={NewPeople} />
      </Tab.Navigator>
    </SafeAreaView>
    
  )
}

export default MatchesTabs

const styles = StyleSheet.create({
  headingContainer: {
    height: heightToDP('7%'),
    justifyContent: 'center', 
  },
  headingText:{
    marginTop: heightToDP('1%'),
    color: 'white',
    fontSize:heightToDP('3.5%'),  
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginLeft: widthToDP('5%'),
  },
})

