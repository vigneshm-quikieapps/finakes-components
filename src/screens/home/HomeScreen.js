import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Carousel from '../../components/Carousel';
import SwipableCard from '../../components/SwipableCard';
import {commonStyles} from '../../core/constants';

const MultipleCarousels = () => {
  return (
    <>
      <View>
        <Carousel />
      </View>
      <View>
        <Carousel />
      </View>
      <View>
        <Carousel />
      </View>
      <View>
        <Carousel />
      </View>
    </>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView>
      <MultipleCarousels />
    </ScrollView>
  );
};

export default HomeScreen;
