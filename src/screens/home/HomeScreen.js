import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import Carousel from '../../components/Carousel';
import Chart from '../../components/Chart';
import SwipableCard from '../../components/SwipableCard';
import SwipeWrapper from '../../components/SwipeWrapper';
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
      <SwipeWrapper>
        <View style={styles.swipeContent}>
          <Chart />
        </View>
        <View style={styles.swipeContent}>
          <Chart />
        </View>
        <View style={styles.swipeContent}>
          <Chart />
        </View>
        <View style={styles.swipeContent}>
          <Chart />
        </View>
      </SwipeWrapper>
      <Button
        title="Filter"
        onPress={() => {
          navigation.navigate('FilterPage');
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  swipeContent: {
    height: 400,
  },
});

export default HomeScreen;
