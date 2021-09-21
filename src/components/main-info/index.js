import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainCard from './MainCard';

const MainInfo = () => {
  return (
    <View style={styles.container}>
      <MainCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default MainInfo;
