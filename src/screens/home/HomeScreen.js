import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Carousel from '../../components/Carousel';
import SwipableCard from '../../components/SwipableCard';
import {commonStyles} from '../../core/constants';

const HomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={[
        commonStyles.centeredContent,
        commonStyles.appBG,
        {justifyContent: 'flex-start'},
      ]}>
      <View>
        <Carousel />
      </View>
      <View>
        <Text>Yest</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
