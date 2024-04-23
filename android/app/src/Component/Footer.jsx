import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from 'react-native-vector-icons/Feather';
import Calender from 'react-native-vector-icons/AntDesign';
import History from 'react-native-vector-icons/FontAwesome';
import Wallet from 'react-native-vector-icons/AntDesign';
import Profile from 'react-native-vector-icons/FontAwesome';
import Styles from '../../../../Font/GeneralFont';
import {useNavigation} from '@react-navigation/native';

export default function Footer() {
  const [activeTabs, setActiveTabs] = useState(0);
  const navigation = useNavigation();

  const route = [
    {
      icon: Home,
      name: 'Home',
      iconName: 'home',
    },
    {
      icon: Calender,
      name: 'Appointment',
      iconName: 'calendar',
    },
    {
      icon: History,
      name: 'History',
      iconName: 'history',
    },
    {
      icon: Wallet,
      name: 'Wallet',
      iconName: 'wallet',
    },
    {
      icon: Profile,
      name: 'Profile',
      iconName: 'user-o',
    },
  ];

  return (
    <SafeAreaView>
      <View className="bg-white h-[80px] shadow-md elevation w-full">
        <View className="px-3 flex-row justify-between items-center">
          {route.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setActiveTabs(index);
                navigation.navigate(item.name);
              }}
              key={index}>
              <View className="items-center gap-1">
                <View
                  className={` w-[52px] ${
                    activeTabs === index ? 'bg-primary' : 'bg-white'
                  }  h-[5px] rounded-b-lg mb-2`}
                />
                <View className="items-center pt-2">
                  <item.icon
                    size={23}
                    name={item.iconName}
                    style={[activeTabs === index ? styles.iconColor : '']}
                  />
                  <Text
                    className={`${
                      activeTabs === index ? 'text-primary' : ''
                    } text-sm font-semibold`}
                    style={Styles.font2}>
                    {item.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconColor: {
    color: '#6B34BC',
  },
});
