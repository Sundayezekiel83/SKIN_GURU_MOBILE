import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import Eye from 'react-native-vector-icons/Feather';
import Saving from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../../../../Font/GeneralFont';
import CustomButton from '../../Component/CustomButton';
import TransactionCard from '../../Component/TransactionCard';

export default function Wallet() {
  return (
    <View className="h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Header text="Wallet" show classN="bg-[#F3F3F3] px-5" />
        <View className="bg-white rounded-[20px] h-[141px] mx-5 mt-5">
          <ImageBackground
            source={require('../../../../../Assest/Image/Intersect.png')}
            resizeMode="contain"
            style={{height: '100%'}}>
            <View className="flex-row justify-between items-center p-5">
              <View className="flex-row space-x-6">
                <View className="space-y-3">
                  <Text
                    className="text-subText font-normal"
                    style={Styles.font}>
                    Available Balance
                  </Text>
                  <Text
                    className="text-primary font-bold text-[24px]"
                    style={Styles.font}>
                    N50,0000
                  </Text>
                </View>
                <View>
                  <Eye name="eye" size={23} color={'#8389A8'} />
                </View>
              </View>

              <View className="w-10 h-10 bg-secondary rounded-full items-center mb-5">
                <View className="items-center justify-center h-full">
                  <Saving name="savings" size={25} style={{color: '#6B34BC'}} />
                </View>
              </View>
            </View>
            <View>
              <View className="flex-row justify-end pr-10 space-x-2">
                <Text
                  className="text-[22px] font-bold text-dark"
                  style={Styles.font}>
                  Skin
                </Text>
                <Text
                  className="text-[22px] font-bold text-primary"
                  style={Styles.font}>
                  Guru
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View className="mt-5 px-5">
          <Text className="text-primary" style={Styles.font}>
            Note:{' '}
            <Text className="text-subText" style={Styles.font}>
              You can also save money for a particular purpose with time just
              simply use our savings area. the Piggy Icon Above
            </Text>
          </Text>
        </View>
        <View className="mt-5 px-5">
          <CustomButton classN="bg-primary" text="Top Up Wallet" />
        </View>
        <View className="flex-row mt-5 px-5 justify-between">
          <Text className="text-Subtext" style={Styles.font}>
            Recent Transactions
          </Text>
          <TouchableOpacity>
            <Text
              className="font-bold text-sm text-primary"
              style={Styles.font}>
              View All {'>'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TransactionCard color />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard color />
        </View>
      </ScrollView>
    </View>
  );
}
