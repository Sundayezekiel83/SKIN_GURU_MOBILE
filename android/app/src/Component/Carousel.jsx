import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Carousel({data}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const slideTimer = setInterval(() => {
  //     let newIndex = activeIndex + 1;
  //     if (newIndex === data.length) {
  //       newIndex = 0;
  //     }
  //     setActiveIndex(newIndex);
  //   }, 3000);

  //   return () => {
  //     clearInterval(slideTimer);
  //   };
  // }, [activeIndex]);

  const width = Dimensions.get('window').width;

  const renderItem = ({item, index}) => {
    return (
      <View key={item.id} style={{width: width - 20, marginHorizontal: 10}}>
        <Image source={item.image} />
      </View>
    );
  };

  const renderIndictor = () => {
    return (
      <>
        {data.map((item, index) => (
          <View
            key={item.id}
            className={`${
              index === activeIndex ? 'bg-primary' : 'bg-[#D9D9D9]'
            }  h-3 w-3 mr-3 rounded-full`}></View>
        ))}
      </>
    );
  };

  const handleScroll = event => {
    const cposition = event.nativeEvent.contentOffset.x;

    const index = Math.floor(cposition / width);

    setActiveIndex(index);
  };

  return (
    <View className="items-center justify-center" style={{width: width}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({
          length: width - 10, // Adjusted for margins
          offset: (width - 10) * index, // Adjusted for margins
          index,
        })}
      />
      <View className="justify-center items-center flex-row mt-5">
        {renderIndictor()}
      </View>
    </View>
  );
}
