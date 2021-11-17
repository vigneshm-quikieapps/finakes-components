import React from 'react';
import {Box, Text} from 'native-base';
import {
  VictoryLine,
  VictoryBar,
  VictoryChart,
  VictoryHistogram,
} from 'victory-native';

const MainInfoPanel = props => {
  return (
    <Box P={2} flexDirection="row" borderBottomWidth={1} borderColor="#D9D5DC">
      <Box p={5} backgroundColor="#fff">
        <Box>
          <Text mx={1} fontSize={18} fontWeight="bold" color="#000">
            {props.item.label}
          </Text>
        </Box>
        <Box>
          <Text mx={3} fontSize={24} fontWeight="bold" color="#5cb85c">
            {props.item.value}
          </Text>
        </Box>
      </Box>
      <Box
        backgroundColor="#fff"
        flex={1}
        flexDirection="row"
        alignItems="center">
        <VictoryBar
          data={props.item.score}
          style={{data: {fill: '#62B1F6'}}}
          barWidth={25}
          width={250}
          height={150}
        />
      </Box>
    </Box>
  );
};

export default MainInfoPanel;
