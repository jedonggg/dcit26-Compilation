//Aycardo, Kenneth Brian
// Castillon, Charles Jefferson
//Dualan, Jaynyl Edrielle
//BSCS 3-2 

import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList} from 'react-native';

import ListItem from './components/ListItem';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [courseItem , setCourseItem]= useState([]);

  function itemInputHandler(enteredText) {
    setEnteredItem(enteredText);

  }  
  const addItemHandler = () => {
    setCourseItem(currentItem => [...courseItem, 
    {key: Math.random().toString(), value: enteredItem }]);
    setEnteredItem("");

  };

  
  return (
    <View style={styles.screen}>
    
      <View style= {styles.inputContainer}>
   

        <TextInput 
          placeholder= "Enter Item" 
          style = {styles.input} 
          onChangeText={itemInputHandler}
          value={enteredItem}
          
           />
        <Button color = 'black' title= "Add" onPress={addItemHandler}/>
      </View>

      <FlatList
        keyExtractor={(item,index)=> item.key}
        data={courseItem} 
        renderItem = {itemData => <ListItem onPress={()=> console.log('Does that work')} title={itemData.item.value} />}

      />
   </View>
  );
}

const styles = StyleSheet.create({
  screen: {
  
   backgroundColor: '#a9a9a9',
   flex: 1,
   padding: 50
   
  },

  inputContainer: {
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  }, 
  input: {
   
   fontStyle: 'italic',
   width: '77%',
   borderColor: 'black' ,
   borderWidth: 1 ,
   padding:10
  },
  

 });