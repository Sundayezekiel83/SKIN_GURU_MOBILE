/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Doctor from './android/app/src/Pages/Doctor';
import SplashScreen from './android/app/src/Pages/Welcome/SplashScreen.jsx';
import Onboarding from './android/app/src/Pages/Welcome/index.jsx';
import CreateAccount from './android/app/src/Pages/Auth/CreateAccount.jsx';
import CreateInfo from './android/app/src/Pages/Auth/CreateInfo.jsx';
import Login from './android/app/src/Pages/Auth/Login.jsx';
import ForgetPassword from './android/app/src/Pages/Auth/ForgetPassword.jsx';
import ForgetPasswordMessage from './android/app/src/Pages/Auth/ForgetPasswordMessage.jsx';
import HomeLayout from './android/app/src/Pages/Home';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* Onboarding */}
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Stack.Screen
          name="User"
          component={CreateAccount}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Stack.Screen
          name="Professional"
          component={CreateAccount}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Stack.Screen
          name="CreateInfo"
          component={CreateInfo}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Stack.Screen
          name="ForgetPasswordMessage"
          component={ForgetPasswordMessage}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />

        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />

        {/* end of onboarding */}

        {/* Home Dashboard */}
        <Stack.Screen
          name="Root"
          component={HomeLayout}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: 'red',
  },
});

export default App;
