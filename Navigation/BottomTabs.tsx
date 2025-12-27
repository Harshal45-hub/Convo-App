import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Matches from '../screens/Matches';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightToDP } from 'react-native-responsive-screens';
import Chats from '../screens/Chats';
import Events from '../screens/Events';
import { HomePageStack } from './StackNavigate';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
    
    return (

      <Tabs.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#1E1E1E',  height: 70, paddingBottom: 10, paddingTop: 10 }, tabBarLabelStyle: { fontSize: 12 } }} >
          <Tabs.Screen name="Home" component={HomePageStack} options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? 'home' : 'home-outline'} size={heightToDP('3%')} color={'white'} />
              ),
              tabBarActiveTintColor: '#FF6B6B',
              tabBarInactiveTintColor: 'gray',
          }} >
          </Tabs.Screen>
          <Tabs.Screen name="Matches" component={Matches} options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? 'heart' : 'heart-outline'} size={heightToDP('3%')} color={'white'} />
              ),
              tabBarActiveTintColor: '#FF6B6B',
              tabBarInactiveTintColor: 'gray',
          }} >
          </Tabs.Screen>
          <Tabs.Screen name="Chats" component={Chats} options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} size={heightToDP('3%')} color={'white'} />
              ),
              tabBarActiveTintColor: '#FF6B6B',
              tabBarInactiveTintColor: 'gray',
          }} >
          </Tabs.Screen>
          <Tabs.Screen name="Events" component={Events} options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={heightToDP('3%')} color={'white'} />
              ),
              tabBarActiveTintColor: '#FF6B6B',
              tabBarInactiveTintColor: 'gray',
          }} >
          </Tabs.Screen>
      </Tabs.Navigator>

    )
}

export default BottomTabs

const styles = StyleSheet.create({})