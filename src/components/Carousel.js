import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Swiper from 'react-native-swiper';
import {colorConstants, sizeConstants} from '../core/constants';
import SwipableCard from './SwipableCard';

const Carousel = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <View style={styles.slide1}>
        <SwipableCard
          heading={'Price & Delivery Trigger'}
          description={'Finakes Swipable Component'}
        />
      </View>
      <View style={styles.slide1}>
        <SwipableCard
          heading={'Price & Delivery Trigger'}
          description={'Finakes Swipable Component'}
        />
      </View>
      <View style={styles.slide1}>
        <SwipableCard
          heading={'Price & Delivery Trigger'}
          description={'Finakes Swipable Component'}
        />
      </View>
      <View style={styles.slide1}>
        <SwipableCard
          heading={'Price & Delivery Trigger'}
          description={'Finakes Swipable Component'}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // flex: 0.4,s
  },
  slide1: {
    // height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: colorConstants.darkTheme,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Carousel;
