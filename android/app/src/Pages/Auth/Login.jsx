import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import Google from '../../../../../Assest/Image/Google.svg';
import Facebook from '../../../../../Assest/Image/facebook.svg';
import ApplePlay from '../../../../../Assest/Image/apple.svg';
import Input from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import Styles from '../../../../../Font/GeneralFont';
import {SafeAreaView} from 'react-native-safe-area-context';
import User from '../../../../../Assest/Image/user.svg';

export default function Login({navigation}) {
  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full px-4">
      <StatusBar
        hidden={false}
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
      />
      <Header text="Login" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View className="items-center mt-6">
          <View
            className={`w-[100px] h-[100px] mr-3 border-2 border-primary  rounded-full justify-center bg-secondary items-center`}>
            <User />
          </View>
        </View>
        <View>
          <Input placeholder={'Mobbin'} label={'Email'} />
          <Input placeholder={'Password'} label={'Password'} />
          <TouchableOpacity className="justify-end flex-row mt-3 mb-8">
            <Text
              className="text-primary text-sm"
              style={Styles.font}
              onPress={() => navigation.navigate('ForgetPassword')}>
              Forget Password
            </Text>
          </TouchableOpacity>
          <CustomButton
            text="Continue"
            classN={'!bg-primary'}
            onPress={() => navigation.navigate('Root')}
          />
          <Text
            className="mt-16 text-[16px] text-[#8389A8] text-center font-normal"
            style={Styles.font}>
            {' '}
            - OR Continue With -{' '}
          </Text>

          <View className="flex-row items-center justify-center gap-3 mt-2">
            <TouchableOpacity>
              <Google />
            </TouchableOpacity>
            <TouchableOpacity>
              <ApplePlay />
            </TouchableOpacity>
            <TouchableOpacity>
              <Facebook />
            </TouchableOpacity>
          </View>
          <View className="items-center justify-center mt-4">
            <Text
              className="text-subText text-sm font-medium"
              style={Styles.font}>
              Dont have an account {''}
              <Text
                onPress={() => navigation.navigate('User')}
                className="text-primary text-sm">
                Create Account
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
