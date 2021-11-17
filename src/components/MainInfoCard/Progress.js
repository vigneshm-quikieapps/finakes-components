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

const ProgressBar = props => {
  return (
    <Box>
      <Box flexDirection="row" my={2} justifyContent="space-between">
        <Text fontSize={18} fontWeight="bold" color="#000">
          {props.label}
        </Text>
        <Badge colorScheme="success" rounded="50px">
          <Text fontSize={18} fontWeight="bold" color="#000">
            {props.value}/{props.total}
          </Text>
        </Badge>
      </Box>
      <Progress
        value={props.value * 10}
        size="md"
        colorScheme={
          props.label === 'Current Valuation' ||
          props.label === 'Growth & Margin'
            ? 'primary'
            : 'emerald'
        }
        bg="#f8f8f8"
      />
    </Box>
  );
};

export default ProgressBar;
