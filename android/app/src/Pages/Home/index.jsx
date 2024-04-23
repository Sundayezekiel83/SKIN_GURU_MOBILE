import {
  View,
  Text,
  Button,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import Home from './Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Footer from '../../Component/Footer';
import Appointment from '../Appointment';
import History from '../History/History';
import Wallet from '../Wallet';
import Profile from '../Profile';

export default function HomeLayout({}) {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView className="bg-secondary h-full">
      <StatusBar
        hidden={false}
        backgroundColor={'#6B34BC'}
        barStyle="light-content"
      />

      <Tab.Navigator tabBar={() => <Footer />}>
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={Appointment}
          name="Appointment"
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={History}
          name="History"
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={Wallet}
          name="Wallet"
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={Profile}
          name="Profile"
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
