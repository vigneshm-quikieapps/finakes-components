import React from 'react';
import {ScrollView, Box, Heading, Text} from 'native-base';

const Card = props => {
  return (
    <Box m={3} borderRadius={5} shadow={2} backgroundColor="#252932">
      <Text
        p={3}
        fontSize={27}
        fontWeight="bold"
        color="#1569f4"
        textAlign="center">
        {props.heading}
      </Text>
      <Text
        fontSize={18}
        fontWeight="medium"
        p={3}
        color="#fff"
        textAlign="justify"
        numberOfLines={3}>
        {props.subheading}
      </Text>
      <Text fontSize={18} fontWeight="medium" color="#1569f4" p={3}>
        {props.count} Comments
      </Text>
    </Box>
  );
};

export default Card;
