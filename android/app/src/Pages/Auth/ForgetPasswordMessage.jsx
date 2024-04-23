import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../Component/CustomButton';
import ForgetMesage from '../../../../../Assest/Image/rafikiforgetPassword.svg';
import Styles from '../../../../../Font/GeneralFont';
import Header from '../../Component/Header';

export default function ForgetPasswordMessage({navigation}) {
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
        <View className="items-center justify-center mx-auto mt-20 ">
          <View className="mt-10">
            <View>
              <ForgetMesage />
              <Text
                className="text-[32px] font-semibold text-dark mb-3 text-center mt-5"
                style={Styles.font}>
                Sent
              </Text>
              <Text
                className="text-sm font-normal text-[#707070] w-[265px] text-center mb-5"
                style={Styles.font}>
                {' '}
                Password Reset Link has been sent to John******16@gmail.com
              </Text>
            </View>

            <CustomButton
              text="Continue"
              classN={'!bg-primary'}
              onPress={() => navigation.navigate('Login')}
            />
            <Text
              onPress={() => navigation.navigate('ForgetPassword')}
              className="text-sm text-primary text-center mt-5"
              d
              style={Styles.font}>
              {' '}
              Change email and send again
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
