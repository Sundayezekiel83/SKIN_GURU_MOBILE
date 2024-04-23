import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Appoint from '../../../../Assest/Image/Ellipse 80appoitment.svg';
import Chat from 'react-native-vector-icons/Ionicons';
import Dot from 'react-native-vector-icons/Entypo';
import Styles from '../../../../Font/GeneralFont';
import Calender from 'react-native-vector-icons/AntDesign';

export default function AppointmentCard({status, classN, textC}) {
  const width = Dimensions.get('window').width;
  return (
    <View className="bg-white flex-1 mx-5 rounded-2xl h-[185px] mb-10">
      <View className="">
        <View className="flex-row justify-between p-3">
          <View className="flex-row">
            <View className="flex-row space-x-5">
              <View className="justify-center items-center gap-2">
                <Appoint />
                <View className="w-10 h-10 bg-secondary rounded-full items-center">
                  <View className="items-center justify-center h-full">
                    <Chat
                      name="chatbubble-ellipses"
                      size={25}
                      style={{color: '#6B34BC'}}
                    />
                  </View>
                </View>
              </View>
              <View className="gap-1">
                <Text className="font-medium text-dark" style={Styles.font}>
                  Janet John
                </Text>
                <Text className="text-sm text-subText" style={Styles.font2}>
                  Service
                </Text>
                <Text className="text-sm text-subText" style={Styles.font2}>
                  General Consultation
                </Text>
                <Text className="text-sm text-subText" style={Styles.font2}>
                  Chat
                </Text>
                <View className="flex-row items-center">
                  <Text className="text-sm text-subText" style={Styles.font2}>
                    Status:{' '}
                  </Text>
                  <TouchableOpacity className={`rounded-lg px-2 ${classN}`}>
                    <Text className={`${textC}`}>{status}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <Dot name="dots-three-vertical" size={24} />
        </View>
        <View className="bg-primary w-full h-[37px] rounded-b-2xl px-3 py-1">
          <View className="flex-row items-center justify-between">
            <Calender name="calendar" color={'white'} size={24} />
            <Text
              className="text-secondary text-sm font-medium"
              style={Styles.font}>
              Date: 26th Oct, 2023
            </Text>
            <Text
              className="text-secondary text-sm font-medium"
              style={Styles.font}>
              8:30am
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
