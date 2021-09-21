/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // Dimensions,
  // Image,
  TouchableHighlight,
} from 'react-native';
import ProgressBarCustom from './ProgressBarCustom';

const MainCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.heading}>COMPANY NAME - $</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Sector: construction</Text>
        <TouchableHighlight style={styles.btn}>
          <Text style={{color: '#fff', fontSize: 16}}>Track</Text>
        </TouchableHighlight>
      </View>
      <Text style={styles.text}>Industry: Cement</Text>
      <Text style={styles.text}>CMP: Rs. 276.55</Text>
      <Text style={styles.text}>MKT Cap: Rs. 650 Cr</Text>
      <ProgressBarCustom
        label="Current Valuation"
        value={8.2}
        color="#9AFFD0"
        textStyle={styles.text}
      />
      <ProgressBarCustom
        label="Market & Size"
        value={6.8}
        color="#52C9F8"
        textStyle={styles.text}
      />
      <ProgressBarCustom
        label="Durability"
        value={6.9}
        color="#52C9F8"
        textStyle={styles.text}
      />
      <ProgressBarCustom
        label="Growth & Margin"
        value={8.3}
        color="#9AFFD0"
        textStyle={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 5,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#3D80CE',
    padding: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 3,
  },
});

export default MainCard;
