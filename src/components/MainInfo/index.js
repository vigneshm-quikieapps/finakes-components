import React from 'react';
import {ScrollView} from 'native-base';

import MainInfoPanel from './MainInfoPanel';

const MainInfo = () => {
  const data = [
    {
      label: 'EPS',
      value: 10.5,
      score: [60.2, 99.0, 77.8, 86.5],
    },
    {
      label: 'P/E',
      value: 19.83,
      score: [60.2, 99.0, 77.8, 86.5],
    },
    {
      label: 'BV',
      value: 52.1,
      score: [1, 2, 2, 4, 4, 5],
    },
    {
      label: 'P/B',
      value: 4.01,
      score: [1, 2, 2, 4, 4, 5],
    },
    {
      label: 'DPS',
      value: 15.2,
      score: [1, 2, 2, 4, 4, 5],
    },
    {
      label: 'DY%',
      value: 7.25,
      score: [1, 2, 2, 4, 4, 5],
    },
    {
      label: 'D/E',
      value: 0,
      score: [1, 2, 2, 4, 4, 5],
    },
    {
      label: 'ROE%',
      value: 24.4,
      score: [1, 2, 2, 4, 4, 5],
    },
  ];

  return (
    <ScrollView>
      {data.map((item, index) => {
        return <MainInfoPanel key={index} item={item} />;
      })}
    </ScrollView>
  );
};

export default MainInfo;
