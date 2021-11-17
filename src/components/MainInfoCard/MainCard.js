import React, {useState, useEffect} from 'react';
import {
  Box,
  Text,
  Progress,
  Heading,
  extendTheme,
  NativeBaseProvider,
  Button,
  Badge,
} from 'native-base';
import ProgressBar from './Progress';

const MainCard = props => {
  return (
    <Box bg="#fff" m={2} p={3} shadow={6} borderRadius={7}>
      <Box flexDirection="row" justifyContent="center">
        <Heading>{props.name}</Heading>
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Text fontSize={18} fontWeight="bold" color="#000">
          Sector: {props.sector}
        </Text>
        <Button size="lg" onPress={() => console.log('hello world')}>
          Track
        </Button>
      </Box>
      <Text fontSize={18} fontWeight="bold" color="#000">
        Industry: {props.industry}
      </Text>
      <Text fontSize={18} fontWeight="bold" color="#000">
        CMP: Rs. {props.cmp}
      </Text>
      <Text fontSize={18} fontWeight="bold" color="#000">
        Mkt Cap: Rs. {props.mktCap}
      </Text>
      <ProgressBar label="Current Valuation" value={8.2} total={10} />
      <ProgressBar label="Market & Size" value={6.8} total={10} />
      <ProgressBar label="Durability" value={6.9} total={10} />
      <ProgressBar label="Growth & Margin" value={8.3} total={10} />
    </Box>
  );
};

export default MainCard;
