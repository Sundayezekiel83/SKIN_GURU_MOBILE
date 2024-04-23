import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Styles from '../../../../Font/GeneralFont';
import Star from '../../../../Assest/Image/Vectorstar.svg';

export default function CustomButton({
  text,
  textClass,
  props,
  classN,
  onPress,
  showStar,
}) {
  return (
    <View>
      <TouchableOpacity
        {...props}
        onPress={onPress}
        className={`items-center justify-center rounded-[100px] p-5 ${classN}`}>
        <View className="flex-row space-x-2 items-center">
          <Text
            className={`text-white text-sm ${textClass}`}
            style={Styles.font}>
            {text}
          </Text>
          {showStar && <Star />}
        </View>
      </TouchableOpacity>
    </View>
  );
}
