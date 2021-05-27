// Aycardo, Kenneth Brian
// Castillon, Charles Jefferson
// Dualan, Jaynyl Edrielle 
// BSCS 3-2
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Stylesheet,View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';


const Stack = createStackNavigator();

const MainStack = () => {
  return (
 
    
    <Stack.Navigator>
      <Stack.Screen name="≡ Home " component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainStack;
