import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import FilterPage from '../screens/FilterPage';

const Stack = createNativeStackNavigator();

const Mainstack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FilterPage" component={FilterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Mainstack;
