import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Loading3 from '../../../../../Assest/Image/loading3.svg';
import Welcome3 from '../../../../../Assest/Image/welcome3.svg';
import Goback from '../../Component/Goback';
import OnboardingItems from '../../Component/OnboardingItems';
export default function ScheduleTab({setActiveTabs}) {
  const payload = 1;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Goback text="" show setActiveTabs={setActiveTabs} payload={payload} />
      <View className="mt-10 items-center justify-center">
        <Welcome3 />
      </View>
      <OnboardingItems
        text1={'Schedule'}
        text2={'Appointments with Ease'}
        text3={
          'Schedule, reschedule or cancel your dermatology appointments through the app. Get reminders too!'
        }
      />
      <View className="flex-row justify-between items-center mt-5">
        <View className="flex-row space-x-2">
          <View className="w-[30px] rounded-lg h-3 bg-secondary" />
          <View className="w-[30px] rounded-lg h-3 bg-secondary" />
          <View className="w-[46px] rounded-lg h-3 bg-primary " />
        </View>
        <View>
          <TouchableOpacity onPress={() => setActiveTabs(3)}>
            <Loading3 />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
