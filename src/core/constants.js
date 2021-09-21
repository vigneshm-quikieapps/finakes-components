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
  white: '#fff',
  lightGrey: '#D3D3D3',
  whitishGrey: '#939393',
  lightBlack: '#515151',
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
export const Images ={
  revenue:require('../assets/d.jpg'),
  like:require('../assets/like.png'),
  dislike:require('../assets/dislike.png'),
  share:require('../assets/share.png'),
  comments:require('../assets/comments.png'),

}