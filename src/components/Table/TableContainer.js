import React from 'react';
import {Box, ScrollView} from 'native-base';

const TableContainer = ({children, pagination}) => {
  return (
    <ScrollView>
      <Box flexDirection="row">
        {children[0]}
        <ScrollView horizontal={true}>
          {children.map((item, index) => {
            if (index > 0) {
              return <Box key={index}>{item}</Box>;
            }
          })}
        </ScrollView>
      </Box>
      {pagination}
    </ScrollView>
  );
};

export default TableContainer;
