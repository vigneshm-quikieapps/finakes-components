import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TextInputField = ({placeholder, style, ...otherProps}) => {
  return (
    <TextInput
      label={placeholder}
      mode="outlined"
      placeholderTextColor={'#ffa500'}
      outlineColor={'#ffa500'}
      theme={{
        roundness: 10,
        colors: {
          primary: '#ffa500',
        },
      }}
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
    borderColor: '#ffa500',
  },
});

export default TextInputField;
