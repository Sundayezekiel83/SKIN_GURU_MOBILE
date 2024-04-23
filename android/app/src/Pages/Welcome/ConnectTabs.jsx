import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Goback from '../../Component/Goback';
import OnboardingItems from '../../Component/OnboardingItems';
import Loading2 from '../../../../../Assest/Image/loading2.svg';
import Welcome2 from '../../../../../Assest/Image/welcome2.svg';

export default function ConnectTabs({setActiveTabs}) {
  const payload = 0;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Goback text="" show setActiveTabs={setActiveTabs} payload={payload} />
      <View className="mt-[110] justify-center mx-auto mb-5">
        <Welcome2 />
      </View>
      <OnboardingItems
        text1={'Connect with Your'}
        text2={'Dermatologist'}
        text3={
          'Ask questions and get guidance between visits through secure in-app messaging, Chat and Calls'
        }
      />
      <View className="flex-row justify-between items-center mt-10">
        <View className="flex-row space-x-2">
          <View className="w-[30px] rounded-lg h-3 bg-secondary" />
          <View className="w-[46px] rounded-lg h-3 bg-primary " />
          <View className="w-[30px] rounded-lg h-3 bg-secondary" />
        </View>
        <View>
          <TouchableOpacity onPress={() => setActiveTabs(2)}>
            <Loading2 />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
