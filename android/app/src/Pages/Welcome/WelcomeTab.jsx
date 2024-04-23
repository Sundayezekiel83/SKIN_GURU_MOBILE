import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import OnboardingItems from '../../Component/OnboardingItems';
import Goback from '../../Component/Goback';
import Loading1 from '../../../../../Assest/Image/loading1.svg';
import Welcome from '../../../../../Assest/Image/welcome1.svg';

export default function WelcomeTab({setActiveTabs}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Goback text="" />
      <View className="mt-5 justify-center mx-auto">
        <Welcome />
      </View>
      <OnboardingItems
        text1={'Welcome to Skin'}
        text2={'Guru'}
        text3={
          'Skin Guru makes caring for your skin easy. Message your dermatologist, track skin conditions, and schedule appointments all in one place.'
        }
      />
      <View className="flex-row justify-between items-center mt-5">
        <View className="flex-row space-x-2">
          <View className="w-[46px] rounded-lg h-3 bg-primary " />
          <View className="w-[30px] rounded-lg h-3 bg-secondary" />
          <View className="w-[30px] rounded-lg h-3 bg-secondary" />
        </View>
        <View>
          <TouchableOpacity onPress={() => setActiveTabs(1)}>
            <Loading1 />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
