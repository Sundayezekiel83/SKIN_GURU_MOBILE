import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // After 2000 milliseconds, hide the welcome screen
      navigation.navigate('Onboarding');
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // This effect runs only once when the component mounts

  return (
    <View className=" bg-primary h-screen flex-1 justify-center items-center">
      <StatusBar hidden />
      <Text className={`text-white text-[32px] font-semibold`}>Skin Guru</Text>
    </View>
  );
}
