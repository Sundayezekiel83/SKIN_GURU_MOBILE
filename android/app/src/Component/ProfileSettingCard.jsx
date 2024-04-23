import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Right from 'react-native-vector-icons/AntDesign';

export default function ProfileSettingCard({Icon, text}) {
  return (
    <View className="p-5">
      <TouchableOpacity className="flex-row justify-between w-full items-center">
        <View className="flex-row space-x-3 items-center">
          {Icon}
          <Text className="text-subText">{text}</Text>
        </View>
        <View>{<Right name="right" size={25} color={'#8389A8'} />}</View>
      </TouchableOpacity>
      <View className="border-[#000000]/[0.04] border-t mt-4" />
    </View>
  );
}
