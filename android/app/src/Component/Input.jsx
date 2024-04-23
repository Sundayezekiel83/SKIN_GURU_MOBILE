import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function Input({
  classN,
  placeholder,
  onChangeText,
  value,
  label,
}) {
  return (
    <View className="mb-2">
      <Text className="text-sm font-medium mb-1 text-black">{label}</Text>
      <TextInput
        className={`focus-within:border-primary text-black bg-secondary rounded-[10px] focus:border-2 focus:border-primary text-sm p-[16px] outline-none ${classN}`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
