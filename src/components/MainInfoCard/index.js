import React, {useState, useEffect} from 'react';
import {Box, Text, Pressable} from 'native-base';

import MainCard from './MainCard';

const MainInfoCard = () => {
  return (
    <Box flex={1} backgroundColor="#fff">
      <MainCard
        name="SAGAR CEMENTS LTD.-$"
        sector="Construction"
        industry="Cement"
        cmp="276.55"
        mktCap="650 Cr"
      />
    </Box>
  );
};

export default MainInfoCard;
