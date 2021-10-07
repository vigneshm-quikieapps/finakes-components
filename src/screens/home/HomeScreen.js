import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import Carousel from '../../components/Carousel';
import CarouselFull from '../../components/carousel-full';
import MainInfo from './../../components/main-info';
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
import InfoCard from '../../components/InfoCard';
import MainInfo3 from '../../components/mainInfo3';
import Table from '../../components/Table';
import DataTable from '../../components/DataTable';

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
      {/* <SwipeWrapper>
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
      </SwipeWrapper> */}

      <View>
        {/* <InfoCard /> */}
        {/* <Table /> */}
        <DataTable />
        {/* <MainInfo3 /> */}
      </View>
      {/* <View>
        <View style={{marginHorizontal: -40}}>
          <CarouselFull />
        </View>
        <MainInfo />
      </View> */}
      {/* <View style={styles.navigationContainer}>
        <Button
          style={styles.btn}
          title="Filter"
          onPress={() => {
            navigation.navigate('FilterPage');
          }}
        />
        <Button
          style={styles.btn}
          title="Login"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Button
          style={styles.btn}
          title="Register"
          onPress={() => {
            navigation.navigate('Registration');
          }}
        />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  swipeContent: {
    height: 400,
  },
  // btn: {
  //   width: 400,
  // },
  navigationContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingVertical: 20,
  },
});

export default HomeScreen;
