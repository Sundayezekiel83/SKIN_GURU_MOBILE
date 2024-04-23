import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

export default function Header({text, show, classN}) {
  const navigation = useNavigation();
  return (
    <View>
      <View
        className={`bg-[#FFFFFF] py-5 flex-row space-x-20 items-center ${classN}`}>
        {show && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} />
          </TouchableOpacity>
        )}
        <Text className="text-[18px] font-normal">{text}</Text>
      </View>
      <View className="border-b-2 border-[#000000]/[0.04] " />
    </View>
  );
}
