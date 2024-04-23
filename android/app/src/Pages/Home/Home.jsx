import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import person from '../../../../../Assest/Image/person.png';
import Basket from '../../../../../Assest/Image/Group 33835basket.svg';
import Chat from '../../../../../Assest/Image/Group 33834chat.svg';
import Notification from '../../../../../Assest/Image/Group 33837notification.svg';
import SearchInput from '../../Component/SearchInput';
import Carousel from '../../Component/Carousel';
import Clinic from '../../../../../Assest/Image/Group 33852clindas.svg';
import Pro from '../../../../../Assest/Image/Group 33852prdas.svg';
import Spa from '../../../../../Assest/Image/Group 33852Spas.svg';
import CustomButton from '../../Component/CustomButton';
import Styles from '../../../../../Font/GeneralFont';
import AppointmentCard from '../../Component/AppointmentCard';

export default function Home() {
  const screenWidth = Dimensions.get('window').width;
  const data = [
    {
      id: '1',
      image: require('../../../../../Assest/Image/homecarousel.png'),
    },
    {
      id: '2',
      image: require('../../../../../Assest/Image/homecarousel.png'),
    },
    {
      id: '3',
      image: require('../../../../../Assest/Image/homecarousel.png'),
    },
  ];
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View className="bg-primary w-full h-[100px] pt-3">
          <View className="px-5 flex-row justify-between">
            <View className="flex-row items-center space-x-3">
              <Image source={person} />
              <View>
                <Text className="text-accent text-[16px] font-normal">
                  Good Day!
                </Text>
                <Text className="text-[#EFF1FA] text-[16px] font-normal">
                  Sunday Ezekiel
                </Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-2">
              <TouchableOpacity>
                <Basket />
              </TouchableOpacity>
              <TouchableOpacity>
                <Chat />
              </TouchableOpacity>
              <TouchableOpacity>
                <Notification />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className=" -mt-5  justify-center items-center w-full px-6">
          <SearchInput placeholder={'Search any Service product....'} />
        </View>

        <View className="mt-5">
          <Carousel data={data} />
        </View>
        <View className="flex-row items-center justify-center space-x-10  mt-7">
          <TouchableOpacity>
            <View className="items-center gap-2">
              <Pro />
              <Text className="text-subText text-md">Professionals</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="items-center gap-2">
              <Clinic />
              <Text className="text-subText text-md"> Our Clinic</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="items-center gap-2">
              <Spa />
              <Text className="text-subText text-md"> Our Spas</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-full mt-5 px-5">
          <CustomButton
            text={'Not Sure who to See? Start here!'}
            classN={'!bg-primary'}
            showStar
          />
        </View>

        <View
          className="flex-row bg-primary/[0.04] mt-3 h-[66px]"
          style={{width: screenWidth}}>
          <View className="px-5 flex-row justify-between items-center w-full">
            <View className="">
              <Text
                className="text-sm text-dark font-bold"
                style={Styles.font2}>
                Upcoming Appointments
              </Text>
              <Text className="text-sm text-subText mt-2" style={Styles.font2}>
                {' '}
                This is Your appointment that will come soon
              </Text>
            </View>
            <Text
              className="text-[#5D309C] font-bold text-sm"
              style={Styles.font}>
              More {'>'}{' '}
            </Text>
          </View>
        </View>

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
        </View>
      </ScrollView>
    </View>
  );
}
