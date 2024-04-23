import {View, Text, Image} from 'react-native';
import React from 'react';
import Styles from '../../../../Font/GeneralFont';

export default function Chat() {
  return (
    <View className="px-5 mt-10 ">
      <View className="flex-row items-center justify-between">
        <Image
          source={require('../../../../Assest/Image/chats.png')}
          style={{borderWidth: 2, borderColor: '#6B34BC', borderRadius: 20000}}
        />
        <View className="gap-2">
          <Text className="text-sm font-medium text-dark" style={Styles.font}>
            Dr. Vera Lane
          </Text>
          <Text className="text-sm font-bold text-dark" style={Styles.font}>
            You are very Welcome!...
          </Text>
        </View>
        <View className="gap-2">
          <Text
            className="text-sm text-subText font-normal"
            style={Styles.font}>
            08:30am
          </Text>
          <View className="w-4 h-4 bg-primary rounded-full items-center justify-center">
            <Text className="text-white" style={Styles.font}>
              2
            </Text>
          </View>
        </View>
      </View>
      <View className="border-[#000000]/[0.04] border-t mt-4" />
    </View>
  );
}
