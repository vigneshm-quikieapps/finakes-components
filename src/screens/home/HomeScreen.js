import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import Carousel from '../../components/Carousel';
import {
  Bar,
  Contribution,
  Line,
  Pie,
  Progress,
  StackedBar,
} from '../../components/Chart';
import SwipableCard from '../../components/SwipableCard';
import SwipeWrapper from '../../components/SwipeWrapper';
import Header from './../../components/Header';
import {commonStyles} from '../../core/constants';

const MultipleCarousels = () => {
  return (
    <>
      <View></View>
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
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header title={'Finakes'} />
      <SwipeWrapper>
        <View style={styles.swipeContent}>
          <Bar />
        </View>
        <View style={styles.swipeContent}>
          <Line />
        </View>
        <View style={styles.swipeContent}>
          <Pie />
        </View>
        <View style={styles.swipeContent}>
          <Progress />
        </View>
        <View style={styles.swipeContent}>
          <StackedBar />
        </View>
      </SwipeWrapper>
      <View>
        <Button
          style={styles.btn}
          title="Filter"
          onPress={() => {
            navigation.navigate('FilterPage');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  swipeContent: {
    height: 400,
  },
  btn: {
    width: 400,
  },
});

export default HomeScreen;
