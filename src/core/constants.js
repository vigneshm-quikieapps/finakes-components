import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const commonImages = {
  graph1: require('./../assets/images/graph1.jpg'),
};

export const sizeConstants = {
  _height: height,
  _width: width,
};

export const colorConstants = {
  darkTheme: '#061325',
  lightTheme: '#9da9bb',
};

export const commonStyles = StyleSheet.create({
  centeredContent: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBG: {
    backgroundColor: colorConstants.darkTheme,
  },
});
