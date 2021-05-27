// Aycardo, Kenneth Brian
// Castillon, Charles Jefferson
// Dualan, Jaynyl Edrielle 
// BSCS 3-2
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './Homestack';


const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer> 
      <Drawer.Navigator>
        <Drawer.Screen name = "Home"component = {HomeStack} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 

export default MainNavigator;

