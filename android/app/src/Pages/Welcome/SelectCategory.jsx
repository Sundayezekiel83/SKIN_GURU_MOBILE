import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Goback from '../../Component/Goback';
import Styles from '../../../../../Font/GeneralFont';
import User from '../../../../../Assest/Image/user.svg';
import Professional from '../../../../../Assest/Image/professional.svg';
import CustomButton from '../../Component/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function SelectCategory({setActiveTabs}) {
  const navigation = useNavigation();
  const payload = 2;
  const [selectTabs, setSelectTabs] = useState(0);
  const [selectRoute, setSelectRoute] = useState('User');

  const selectItems = [
    {
      name: 'User',
      icon: User,
    },
    {
      name: 'Professional',
      icon: Professional,
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Goback
        text="Select Category"
        show
        setActiveTabs={setActiveTabs}
        payload={payload}
      />
      <View className="justify-center items-center mt-10">
        <Text
          className="text-[32px] text-black font-semibold"
          style={Styles.font}>
          Who are you ?
        </Text>
        <View className="mt-5">
          <Text className="text-subText text-sm font-medium">
            Select from one of the
          </Text>
          <Text className="text-subText text-sm font-medium text-center">
            Categories below
          </Text>
        </View>

        <View className="flex-row mt-20">
          {selectItems.map((item, index) => (
            <TouchableOpacity
              key={index + item.name}
              onPress={() => {
                setSelectTabs(index);
                setSelectRoute(item.name);
              }}>
              <View className="items-center" key={index}>
                <View
                  className={` ${
                    index == selectTabs && 'border-primary border-2 '
                  } w-[150px] h-[150px] mr-3  rounded-full justify-center bg-secondary items-center`}>
                  <item.icon color="#6B34BC" />
                </View>
                <Text
                  className={`mt-3 text-sm font-medium ${
                    index == selectTabs && 'text-primary'
                  }`}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View className="w-full mt-[150]">
          <CustomButton
            text="Continue"
            classN={'!bg-primary'}
            onPress={() => navigation.push(selectRoute)}
          />
          <CustomButton
            text="Already have an account"
            textClass={'!text-primary'}
            className={'!bg-none'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
