import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Goback from '../../Component/Goback';
import {SafeAreaView} from 'react-native-safe-area-context';
import OnboardingItems from '../../Component/OnboardingItems';
import WelcomeTab from './WelcomeTab';
import ConnectTabs from './ConnectTabs';
import ScheduleTab from './ScheduleTab';
import SelectCategory from './SelectCategory';

export default function Onboarding() {
  const [tabs, setActiveTabs] = useState(0);

  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full px-4">
      <StatusBar
        hidden={false}
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
      />
      {tabs === 0 && <WelcomeTab setActiveTabs={setActiveTabs} />}
      {tabs === 1 && <ConnectTabs setActiveTabs={setActiveTabs} />}
      {tabs === 2 && <ScheduleTab setActiveTabs={setActiveTabs} />}
      {tabs === 3 && <SelectCategory setActiveTabs={setActiveTabs} />}
    </SafeAreaView>
  );
}
