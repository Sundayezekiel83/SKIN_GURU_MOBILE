import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Input from '../../Component/Input';
import Header from '../../Component/Header';
import CustomButton from '../../Component/CustomButton';
import Styles from '../../../../../Font/GeneralFont';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ForgetPassword({navigation}) {
  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full px-4">
      <StatusBar
        hidden={false}
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
      />
      <Header text="Forget Password" show />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View className="mt-10">
          <Text
            className="text-[32px] text-dark font-semibold"
            style={Styles.font}>
            Forgot
          </Text>
          <Text
            className="text-[32px] text-dark font-semibold"
            style={Styles.font}>
            Password ?
          </Text>
          <View className="mt-10 mb-16">
            <Input placeholder={'sundayezekiel83@gmail.com'} label={'Email'} />

            <Text className="text-sm text-[#707070] mt-5">
              We will send you a message to set or reset your new Password
            </Text>
          </View>
          <CustomButton
            text="Continue"
            classN={'!bg-primary'}
            onPress={() => navigation.navigate('ForgetPasswordMessage')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
