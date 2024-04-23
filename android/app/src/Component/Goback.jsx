import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

export default function Goback({
  text,
  show,
  navigation,
  setActiveTabs,
  payload,
}) {
  return (
    <View>
      <View className="bg-[#FFFFFF] py-3 flex-row space-x-20 items-center">
        {show && (
          <TouchableOpacity onPress={() => setActiveTabs(payload)}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} />
          </TouchableOpacity>
        )}
        <Text className="text-[18px] font-normal">{text}</Text>
      </View>
      <View className="border-b-2 border-[#000000]/[0.04] " />
    </View>
  );
}
