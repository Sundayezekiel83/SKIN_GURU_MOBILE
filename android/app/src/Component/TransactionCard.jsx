import {View, Text} from 'react-native';
import React from 'react';
import Styles from '../../../../Font/GeneralFont';

export default function TransactionCard({color}) {
  return (
    <View className="px-5 mt-10 ">
      <View className="flex-row items-center justify-between">
        <View className="gap-2">
          <Text className="text-sm font-medium text-dark" style={Styles.font}>
            Skin care
          </Text>
          <Text
            className="text-sm font-normal text-subText"
            style={Styles.font}>
            Pyramind Clinic
          </Text>
        </View>
        <View className="gap-2">
          <Text
            className={`text-sm  font-normal ${
              color ? 'text-red-600' : 'text-emerald-600'
            }`}
            style={Styles.font}>
            -N200,0000
          </Text>
          <Text className="text-subText text-sm" style={Styles.font}>
            Sep 23, 2023 9:30am
          </Text>
        </View>
      </View>
      <View className="border-[#000000]/[0.04] border-t mt-4" />
    </View>
  );
}
