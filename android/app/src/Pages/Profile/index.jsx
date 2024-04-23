import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import Styles from '../../../../../Font/GeneralFont';
import CustomButton from '../../Component/CustomButton';
import ProfileSettingCard from '../../Component/ProfileSettingCard';
import Document from 'react-native-vector-icons/Ionicons';
import Delivery from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {
  return (
    <View className="h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Header text="Profile" show classN="bg-[#F3F3F3] px-5" />
        <View className="bg-white mt-20 h-[217px] mx-5 rounded-[10px]">
          <View className="items-center -mt-10">
            <Image
              source={require('../../../../../Assest/Image/chats.png')}
              style={{
                borderWidth: 2,
                borderColor: '#6B34BC',
                borderRadius: 20000,
              }}
            />
          </View>
          <View className="items-center mt-10">
            <Text className="text-[18px] text-dark" style={Styles.font}>
              Kristian watson
            </Text>
            <Text className="text-[#707070] text-sm mt-2">
              sundayezekiel83@gmail.com
            </Text>
            <View className="mt-5">
              <CustomButton
                classN={'bg-secondary w-[113px] py-3'}
                textClass={'text-primary'}
                text={'Edit profile'}
              />
            </View>
          </View>
        </View>
        <View className="bg-white mt-10 mx-5 rounded-[10px]">
          <ProfileSettingCard
            text={'Prescriptions'}
            Icon={<Document name="document" size={24} />}
          />
          <ProfileSettingCard
            text={'Product and Services'}
            Icon={<Document name="lock-closed" size={24} />}
          />
          <ProfileSettingCard
            text={'Delivery Address'}
            Icon={<Delivery name="truck-delivery" size={24} />}
          />
          <ProfileSettingCard
            text={'Delivery Address'}
            Icon={<Delivery name="account" size={24} />}
          />
          <ProfileSettingCard
            text={'Notification Settings'}
            Icon={<Document name="notifications" size={24} />}
          />
          <ProfileSettingCard
            text={'Change Password'}
            Icon={<Document name="notifications" size={24} />}
          />
          <ProfileSettingCard
            text={'Change Password'}
            Icon={<Delivery name="onepassword" size={24} />}
          />
          <ProfileSettingCard
            text={'Language'}
            Icon={<Document name="language" size={24} />}
          />
          <ProfileSettingCard
            text={'Help Center'}
            Icon={<Document name="chatbubble-ellipses" size={24} />}
          />
          <ProfileSettingCard
            text={'Help Center'}
            Icon={<Document name="chatbubble-ellipses" size={24} />}
          />
          <ProfileSettingCard
            text={'About'}
            Icon={<Delivery name="alert-circle-outline" size={24} />}
          />
        </View>
        <View className="mt-5 mx-5">
          <CustomButton
            classN={'bg-red-700 w-full'}
            textClass={'text-white'}
            text={'Log out'}
          />
        </View>
        <View className="justify-center items-center my-5">
          <Text className="text-subText" style={Styles.font}>
            App Version V1.2
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
