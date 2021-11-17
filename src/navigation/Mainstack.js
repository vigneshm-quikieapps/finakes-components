import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider, useTheme} from 'native-base';

import Home from '../screens/home';
import Table from '../components/Table';
import MainInfo from '../components/MainInfo';
import MainInfoCard from '../components/MainInfoCard';
import InfoCard from '../components/InfoCard';
import CarouselDemo from '../components/Carousel';

const Stack = createNativeStackNavigator();

const Mainstack = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="table" component={Table} />
          <Stack.Screen name="mainInfo" component={MainInfo} />
          <Stack.Screen name="mainInfoCard" component={MainInfoCard} />
          <Stack.Screen name="infoCard" component={InfoCard} />
          <Stack.Screen name="carousel" component={CarouselDemo} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Mainstack;
