import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = props => {
    return (
      <View style ={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    );   
};

const styles = StyleSheet.create({
  listItem: {

    padding: 10,
    marginVertical: 10,
    backgroundColor: 'silver',
    borderColor: 'black',
    borderWidth: 2
   
    
  }

  
});

export default ListItem;
