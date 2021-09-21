import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Signup from '../../assests/Signup/Signup.png';
import FbIcon from '../../assests/SocialImages/FbIcon.png';
import twitter from '../../assests/SocialImages/twitter.png';
import GmailIcon from '../../assests/SocialImages/GmailIcon.png';
import TextInputCustome from '../../components/TextInputCustome';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
    const [fullName,setFullName] = useState("");
    const [address,setAddress] = useState("");

    const fullNameCheck = text => {
        setFullName(text);
        console.log('EMail Check : => ', email);
      };
  const emailCheck = text => {
    setEmail(text);
    console.log('EMail Check : => ', email);
  };

  const passwordCheck = text => {
    setPassword(text);
    console.log('password Check : => ', password);
  };
  const conformPassword = (text) => {
    setPasswordConfirm(text);
  };
  const conformAddress = (text) => {
    setAddress(text);
  };
  const signUpToNext = () => {
    console.log('Sign To next');
    if (!email && !password && !fullName && !passwordConfirm) {
      Alert.alert('Fill all Correct information');
    } else {
      Alert.alert('Sign Up Success');
      navigation.navigate('HomeScreen');
      setPassword('');
      setEmail('');
      setFullName("");
    }
  };


  return (
    <ScrollView style={styles.containerParent}>
      <KeyboardAvoidingView
        // behavior='position'
        style={{backgroundColor: '#061325', flex: 1}}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <View style={styles.caontainerView}>
          <Text style={{
            //   flex:1,
            //   backgroundColor:'yellow',
              fontSize:25,
              fontWeight:'800',
              color:"#fff"
          }}>Registration + </Text>
          </View>
          {/* <View
            style={{
              height: height / 2.5,
              backgroundColor: '#061325',
            }}> */}
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={
                {
                   flex: 1,
                  //  paddingLeft: 15,
                  //  paddingRight: 15,
                  //  borderRadius: 5
                }
              }>
                    <TextInputCustome
                placeholder="Full Name"
                style={{
                  marginTop: 8,
                  marginHorizontal: 20,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={40}
                onChangeText={fullNameCheck}
              />
              <TextInputCustome
                placeholder="Email"
                style={{
                  marginTop: 8,
                  marginHorizontal: 20,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={40}
                onChangeText={emailCheck}
              />
                 <TextInputCustome
                placeholder="Address"
                style={{
                  marginTop: 8,
                  marginHorizontal: 20,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={150}
                multiline={true}
                onChangeText={conformAddress}
              />
              <TextInputCustome
                placeholder="Password"
                style={{
                  marginTop: 8,
                  marginHorizontal: 20,
                }}
                maxLength={20}
                secureTextEntry={true}
                onChangeText={passwordCheck}
              />
                  <TextInputCustome
                placeholder="Confirm Password"
                style={{
                  marginTop: 8,
                  marginHorizontal: 20,
                }}
                maxLength={20}
                secureTextEntry={true}
                onChangeText={conformPassword}
              />
              <CustomButton
                buttonTxt={'Sign Up'}
                touchStyle={{
                  alignSelf: 'center',
                }}
                onPress={signUpToNext}
              />
            </LinearGradient>
          {/* </View> */}
        </LinearGradient>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
    backgroundColor: '#192f6a',
  },
  caontainerView: {
    marginVertical: 20,
    height: height / 20,
    width:width,
    justifyContent:'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
