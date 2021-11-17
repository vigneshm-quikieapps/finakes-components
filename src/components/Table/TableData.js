import React, {useState} from 'react';
import {Box, Text, Pressable, Tooltip} from 'native-base';

const TableData = ({children, data, type}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <Box
      flex={1}
      p="2"
      backgroundColor="#252932"
      alignItems="center"
      justifyContent="center">
      {children ? (
        children
      ) : type === 'link' ? (
        <Pressable>
          <Text mr={1} ml={1} underline color="#1569f4" fontSize={20}>
            {data}
          </Text>
        </Pressable>
      ) : type === 'tooltip' ? (
        <Tooltip
          backgroundColor="#fff"
          _text={{
            color: '#252932',
            fontSize: 16,
          }}
          label={data}
          openDelay={500}
          isOpen={tooltipOpen}>
          <Pressable onPress={() => setTooltipOpen(!tooltipOpen)}>
            <Text
              isTruncated
              mr={1}
              ml={1}
              underline
              color="#1569f4"
              fontSize={20}>
              {data}
            </Text>
          </Pressable>
        </Tooltip>
      ) : (
        <Text mr={1} ml={1} color="#fff" fontSize={20}>
          {data}
        </Text>
      )}
    </Box>
  );
};

export default TableData;
