import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressBar} from 'react-native-paper';

const ProgressBarCustom = props => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={props.textStyle}>{props.label}</Text>
        <Text style={styles.label}>{props.value} / 10</Text>
      </View>
      <ProgressBar
        progress={props.value}
        color={props.color}
        //style={{backgroundColor: '#F5F5F5'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  label: {
    backgroundColor: '#245E35',
    color: '#fff',
    marginLeft: 10,
    padding: 5,
    borderRadius: 10,
  },
});

export default ProgressBarCustom;
