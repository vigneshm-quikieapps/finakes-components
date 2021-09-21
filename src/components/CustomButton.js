import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput, Dimensions, ShadowPropTypesIOS, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get("window");

const CustomButton = ({ onPress, CustomButtonView, customButtonText, buttonTxt,touchStyle }) => {
    const passedStyles = Array.isArray(CustomButtonView) ? Object.assign({}, ...CustomButtonView) : CustomButtonView
    return (
        <TouchableOpacity onPress={onPress} style={touchStyle}>
            <View style={[style.container, passedStyles]}>
                <Text style={[style.buttomTxt, customButtonText]}>
                    {buttonTxt}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const style = StyleSheet.create({
    container: { justifyContent: 'center', marginVertical: height * .05, width: width * .90, height: height * .065, backgroundColor: '#2599FB', borderRadius: 40, alignItems: 'center', flexDirection: 'row' },
    buttomTxt: { textAlign: 'center', color: '#fff', fontWeight: "bold", fontSize: 20 },
})
export default CustomButton;