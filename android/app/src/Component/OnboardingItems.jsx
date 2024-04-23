import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import Welcome from '../assets/welcome1.svg';
import Styles from '../../../../Font/GeneralFont';

export default function OnboardingItems({text1, text2, text3}) {
  return (
    <ScrollView>
      <View className="flex-1  px-2">
        <Text
          className="text-[32px] font-semibold text-[#111111] mt-10"
          style={Styles.font}>
          {text1}
        </Text>
        <Text
          className="text-[32px] font-semibold text-[#111111]"
          style={Styles.font}>
          {text2}
        </Text>

        <Text
          className="text-[14px] font-medium  leading-5 mt-3 text-[#707070]"
          style={Styles.font}>
          {text3}
        </Text>
      </View>
    </ScrollView>
  );
}
