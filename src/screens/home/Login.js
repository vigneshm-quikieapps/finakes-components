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
import LoginIcon from '../../assests/LoginIcon/LoginIcon.png';
import FbIcon from '../../assests/SocialImages/FbIcon.png';
import twitter from '../../assests/SocialImages/twitter.png';
import GmailIcon from '../../assests/SocialImages/GmailIcon.png';
import TextInputCustome from '../../components/TextInputCustome';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailCheck = text => {
    setEmail(text);
    console.log('EMail Check : => ', email);
  };

  const passwordCheck = text => {
    setPassword(text);
    console.log('password Check : => ', password);
  };

  const loginToNext = () => {
    console.log('Login To next');
    if (!email && !password) {
      Alert.alert('Fill all Correct information');
    } else {
      Alert.alert('Login Success');
      navigation.navigate('HomeScreen');
      setPassword('');
      setEmail('');
    }
  };
  const fbProcess = () => {
    Alert.alert('Upcoming fb');
  };
  const twitterProcess = () => {
    Alert.alert('Upcomg twitter');
  };
  const gmailProcess = () => {
    Alert.alert('Upcomg gmailProcess');
  };
  const createRegistration = () => {
    navigation.navigate('Registration');
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
            <Image
              source={LoginIcon}
              style={{
                height: 200,
                width: 200,
                borderRadius: 100,
              }}
              resizeMode={'contain'}
            />
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
                placeholder="Password"
                style={{
                  marginTop: 8,
                  marginHorizontal: 20,
                }}
                maxLength={20}
                secureTextEntry={true}
                onChangeText={passwordCheck}
              />
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                  // backgroundColor:'#061325',
                  marginHorizontal: width * 0.08,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: '800',
                  }}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
              <CustomButton
                buttonTxt={'Login'}
                touchStyle={{
                  alignSelf: 'center',
                }}
                onPress={loginToNext}
              />
            </LinearGradient>
          {/* </View> */}
          <View
            style={{
              height: height / 14,
              width: width - 150,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: 'lighgray',
              marginVertical: 40,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                alignSelf: 'center',
              }}
              onPress={fbProcess}>
              <Image
                source={FbIcon}
                style={{height: 45, width: 45}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                alignSelf: 'center',
              }}
              onPress={twitterProcess}>
              <Image
                source={twitter}
                style={{height: 45, width: 45}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                alignSelf: 'center',
              }}
              onPress={gmailProcess}>
              <Image
                source={GmailIcon}
                style={{height: 45, width: 45}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              // backgroundColor:"red",
              height: height / 20,
              width: width - 50,
              alignSelf: 'center',

              alignItems: 'center',
              alignContent: 'center',
            }}>
            <View
              style={{
                // backgroundColor:'gray',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '800',
                }}>
                Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#D0181F',
                    fontWeight: '800',
                  }}
                  onPress={createRegistration}>
                  {' '}
                  Create
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
    backgroundColor: '#192f6a',
  },
  caontainerView: {
    marginVertical: 20,
    height: height / 4,
    // width:width,
    // justifyContent:'center',
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
