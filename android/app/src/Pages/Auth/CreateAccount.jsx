import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Goback from '../../Component/Goback';
import {SafeAreaView} from 'react-native-safe-area-context';
import User from '../../../../../Assest/Image/user.svg';
import Input from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import Styles from '../../../../../Font/GeneralFont';
import Google from '../../../../../Assest/Image/Google.svg';
import ApplePlay from '../../../../../Assest/Image/apple.svg';
import Facebook from '../../../../../Assest/Image/facebook.svg';
import good from '../../../../../Assest/Image/good.png';
import Header from '../../Component/Header';

export default function CreateAccount({navigation}) {
  const [check, setCheck] = useState(false);
  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full px-2">
      <StatusBar
        hidden={false}
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
      />
      <Header text="Create Account" show />
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
          <View className="mb-2">
            <Input placeholder={'Mobbin'} label={'Email'} />
            <Input placeholder={'Password'} label={'Password'} />
            <Input
              placeholder={'Re-enter Password'}
              label={'Confirm Password'}
            />
          </View>

          <CustomButton
            text="Continue"
            classN={'!bg-primary'}
            onPress={() => navigation.navigate('CreateInfo')}
          />

          <View className="flex flex-row items-center justify-center space-x-2 mt-4">
            <TouchableOpacity
              className={` ${
                check && 'bg-primary !border-primary !border-none'
              } w-5 h-5 border-primary border rounded-sm items-center justify-center`}
              onPress={() => setCheck(prev => !prev)}>
              {check && <Image source={good} className="h-4 w-4  p-1" />}
            </TouchableOpacity>

            <Text
              className="w-[314px] text-sm text-subText"
              style={Styles.font}>
              I certify that I am 18 years of age or older, and I agree to the{' '}
              <Text className="text-primary">User Agreement </Text> and{' '}
              <Text className="text-primary">Privacy Policy </Text>
            </Text>
          </View>

          <Text
            className="mt-2 text-[16px] text-[#8389A8] text-center font-normal"
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
          <View className="items-center mt-2">
            <Text
              className="text-subText text-sm font-medium"
              style={Styles.font}>
              Already have an account{' '}
              <Text
                className="text-primary"
                onPress={() => navigation.navigate('Login')}>
                Sign in
              </Text>{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
