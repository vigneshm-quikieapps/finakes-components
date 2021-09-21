import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  colorConstants,
  commonImages,
  commonStyles,
  sizeConstants,
} from '../core/constants';

const SwipableCard = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>{props.heading}</Text>
      </View>
      <View>
        <Image
          source={commonImages.graph1}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.text}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: '10%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colorConstants.lightTheme,
    alignItems: 'center',
    height: sizeConstants._height * 0.4,
    width: sizeConstants._width * 0.9,
    borderRadius: 10,
  },
  cardHeader: {},
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 10,
    height: sizeConstants._height * 0.3,
    width: sizeConstants._width * 0.8,
  },
  text: {color: colorConstants.darkTheme},
});

export default SwipableCard;
