import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colorConstants, sizeConstants} from '../core/constants';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Header = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <TouchableOpacity>
        <Ionicons
          name="md-menu-sharp"
          size={30}
          color={colorConstants.darkTheme}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorConstants.white,
    height: sizeConstants._height * 0.07,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colorConstants.lightGrey,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;
