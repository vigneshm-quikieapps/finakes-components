import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';

const SwipeWrapper = Component => {
  const [childs, setChilds] = useState([]);
  useEffect(() => {
    setChilds(Component.children.filter(child => child != ' '));
    return () => {
      setChilds([]);
    };
  }, []);
  return (
    <Swiper showsButtons={false} style={{height: 300}}>
      {childs}
    </Swiper>
  );
};

export default SwipeWrapper;
