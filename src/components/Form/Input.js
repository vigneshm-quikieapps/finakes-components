import React from 'react';
import {StyleSheet} from 'react-native';
import {colorConstants} from '../../core/constants';
import {Input} from 'react-native-elements/dist/input/Input';
const InputComponent = ({...rest}) => {
  return (
    <Input
      inputContainerStyle={styles.inputContainerStyle}
      labelStyle={styles.labelStyle}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: colorConstants.darkTheme,
    margin: 0,
    padding: 0,
  },
  labelStyle: {marginBottom: 5, fontWeight: 'normal'},
});

export default InputComponent;
