import React from 'react';
import {ScrollView} from 'native-base';

const Swiper = ({children}) => {
  return (
    <ScrollView horizontal borderWidth={2} borderColor="#f00">
      {children}
    </ScrollView>
  );
};

export default Swiper;
