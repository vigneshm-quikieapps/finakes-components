import React from 'react';

import {Box, Button} from 'native-base';

import {useNavigation} from '@react-navigation/core';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <Button onPress={() => navigation.navigate('table')}>Data Table</Button>
      <Button onPress={() => navigation.navigate('mainInfo')}>Main Info</Button>
      <Button onPress={() => navigation.navigate('mainInfoCard')}>
        Main Info Card
      </Button>
      <Button onPress={() => navigation.navigate('infoCard')}>Info Card</Button>
      <Button onPress={() => navigation.navigate('carousel')}>Carousel</Button>
    </Box>
  );
};

export default Home;
