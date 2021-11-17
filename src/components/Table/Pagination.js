import React from 'react';
import {Box, Text, Button, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pagination = ({title}) => {
  return (
    <Box flex={1} flexDirection="row" justifyContent="flex-end">
      <Pressable m={2}>
        <Icon name="chevron-left" color="#252932" size={30} />
      </Pressable>
      <Pressable m={2}>
        <Icon name="chevron-right" color="#252932" size={30} />
      </Pressable>
    </Box>
  );
};

export default Pagination;
