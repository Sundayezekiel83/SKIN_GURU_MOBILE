import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import Chat from '../../Component/Chat';

export default function History() {
  return (
    <View className="h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Header text="Chat" show classN="bg-[#F3F3F3] px-5" />
        <View>
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </View>
      </ScrollView>
    </View>
  );
}
