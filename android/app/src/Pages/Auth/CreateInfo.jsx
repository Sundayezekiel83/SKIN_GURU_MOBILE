import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';

export default function CreateInfo({navigation}) {
  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full px-4">
      <StatusBar
        hidden={true}
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
      />
      <Header text="Additional Information" show />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View className="flex-row space-x-2 mt-6 justify-center items-center">
          <View className="w-[46px] rounded-lg h-3 bg-primary " />
          <View className="w-[30px] rounded-lg h-3 bg-secondary" />
        </View>
        <View className="mt-10">
          <Input placeholder={'Sunday '} label={'First Name'} />
          <Input placeholder={'Doe'} label={'Last Name'} />
          <Input placeholder={'Male'} label={'Gender'} />
          <Input placeholder={'09/12/2023'} label={'Date of birth'} />
          <Input placeholder={'0816686572'} label={'Phone Number'} />
          <View className="w-full mt-10">
            <CustomButton
              text="Continue"
              classN={'!bg-primary'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
