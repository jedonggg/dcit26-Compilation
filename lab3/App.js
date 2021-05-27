//n Aycardo, Kenneth Brian
//n Castillon, Charles Jefferson
//n Dualan, Jaynyl Edrielle 
//n BSCS 3-2 


import React, {useState} from 'react';
import {View, StyleSheet, Button,Image} from 'react-native';

import SampleModal from './components/SampleModal';


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  return( 
  
    <View style={styles.container}>    

  
    <Image style={styles.image} source= {require("./Reactt.png")} styles = {{justifyContent:'center',alignItems:'center', width:400, height:100, }}/>

    <Button color = 'red' title="CLICK ME" onPress={() => setIsModalOpen(true)} /> 
    
    <SampleModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'white',
   paddingVertical: 10,
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
   
   
   
   });