import React from 'react';
import {Box, Text, Button, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const TableHead = ({title}) => {
  return (
    <Pressable onPress={() => console.log('hello world')}>
      <Box
        flexDirection="row"
        backgroundColor="#252932"
        borderBottomWidth={1}
        borderBottomColor="#fff"
        alignItems="center"
        justifyContent="center">
        <Text mr={2} ml={2} color="#fff" fontSize={25}>
          {title}
        </Text>
        <Icon name="arrow-up" size={20} color="#fff" />
      </Box>
    </Pressable>
  );
};

export default TableHead;
