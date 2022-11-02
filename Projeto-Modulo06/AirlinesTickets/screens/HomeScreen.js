import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
const { width, height } = Dimensions.get('screen');

const data = [
  require('../img/carousel1.jpg'),
  require('../img/carousel2.jpg'),
  require('../img/carousel3.jpg'),
  require('../img/carousel4.jpg'),
  require('../img/carousel5.jpg'),
  require('../img/carousel6.jpg'),
  require('../img/carousel7.jpg')
];

const imageW = width * 0.8;
const imageH = imageW * 1.54;

const HomeScreen = () => {

  const renderItem = ({ item }) => (
    <View style={{
      width, justifyContent: 'center', alignItems: 'center', shadowColor: '#000',
      shadowOpacity: 1, shadowOffset: { width: 0, height: 0 }, shadowRadius: 20
    }}>
      <Image source={item} style={{ width: imageW, height: imageH, resizeMode: 'cover', borderRadius: 20, opacity: 1 }} />
    </View>
  );

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: styles.colorPrimary.backgroundColor }}>
      <View style={[StyleSheet.absoluteFillObject]} >
        {data.map((image, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
          const opacity = scrollX.interpolate({ inputRange, outputRange: [0, 1, 0] });
          return <Animated.Image key={`image32-${index}`} source={image} style={[StyleSheet.absoluteFillObject, { opacity }]} />
        })}
      </View>
      <Animated.FlatList data={data} onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )} keyExtractor={(_, index) => index.toString()} horizontal pagingEnabled
        renderItem={renderItem}
      />
    </View>
  )
}
export default HomeScreen