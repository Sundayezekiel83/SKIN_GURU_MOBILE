import {View, Text, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import AppointmentCard from '../../Component/AppointmentCard';

export default function Appointment() {
  return (
    <SafeAreaView>
      {/* <StatusBar
        hidden={false}
        backgroundColor={'#F3F3F3'}
        barStyle="dark-content"
      /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Header text="Appointment" show classN="bg-[#F3F3F3] px-5" />

        <View className="mt-5">
          <AppointmentCard
            status={'Pending'}
            classN="bg-[#FFC727]/[0.1]"
            textC="text-[#E2AC11]"
          />
          <AppointmentCard
            status={'Declined'}
            classN="bg-[#E72D1E]"
            textC="text-white"
          />
          <AppointmentCard
            status={'Accepted'}
            classN="bg-[#009C77]"
            textC="text-white"
          />
          <AppointmentCard
            status={'Completed'}
            classN="bg-secondary"
            textC=""
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
