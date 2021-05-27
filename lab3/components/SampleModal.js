import React from 'react';
import {View, StyleSheet, Button, Image, Modal, Text, ScrollView} from 'react-native';


const SampleModal = props => {


  return(
    <View style= {styles.text}>
   
   

    <Modal visible={props.visible} animationType="slide">
    
    <ScrollView>

    
    <Text style={styles.text}> 
    
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit nibh, tempus ac fringilla vitae, mollis at felis. Donec ultricies, leo sed elementum accumsan, purus mi egestas nisi, eget pharetra lectus mi eget massa. Cras non mauris ornare, cursus felis quis, vulputate sem. Donec pellentesque pharetra metus, sit amet vehicula dolor. Aliquam finibus, quam congue laoreet porttitor, ante elit efficitur mauris, ut sollicitudin metus odio ut tortor. Proin eleifend, orci placerat rhoncus feugiat, magna mauris placerat ex, eu semper sapien justo in massa. Praesent sagittis dictum turpis. Nam rutrum congue magna, id suscipit nisi tincidunt non. Donec convallis sit amet nunc auctor sagittis.{'\n \n'}
 Nulla semper odio vel nunc pulvinar malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer a ligula egestas, ultricies libero eu, suscipit felis. Nam libero elit, porta at purus nec, commodo iaculis magna. Aenean et porta eros. Praesent dapibus, tortor a mattis hendrerit, mi nisi vestibulum orci, a interdum nisi orci non nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis bibendum pulvinar. Vivamus at arcu vestibulum, sollicitudin elit fringilla, maximus nunc. Vivamus non dolor non nisi cursus tempus. Sed a maximus nisl. Cras viverra dolor at nulla ultrices, in efficitur arcu tempus. Vivamus vehicula gravida ultrices. Vivamus scelerisque turpis non leo tincidunt volutpat. Sed vitae scelerisque risus.{'\n \n'}
        In ante nisl, tempor et dolor efficitur, malesuada euismod odio. Nunc euismod pharetra dui, nec congue ipsum volutpat sed. Ut tincidunt, mauris nec consequat scelerisque, diam massa facilisis diam, ac tincidunt augue tellus sed lectus. Nunc sit amet posuere ipsum. In scelerisque arcu tellus, ut efficitur neque ultrices sed. Cras eget arcu varius, aliquet velit ut, eleifend urna. Donec ullamcorper fringilla mi nec luctus.{'\n \n'}

        Cras eleifend venenatis odio, vitae blandit velit finibus ac. Etiam ac dui quis turpis iaculis faucibus pellentesque ut sapien. Nunc porttitor risus ac tellus rhoncus, eget lobortis tellus bibendum. Maecenas eget placerat tellus, non fermentum odio. Quisque nec elit in sapien ultricies vehicula nec in libero. In ligula augue, accumsan ac risus id, sollicitudin iaculis lorem. Sed a rhoncus lorem, at congue sapien.{'\n \n'}

        In congue arcu ligula, ac elementum tortor molestie nec. Etiam vitae nunc tellus. Mauris eu luctus tellus. Fusce mi dui, maximus sed mollis eu, egestas sed erat. Ut ultrices vulputate lacus. Ut massa dui, sollicitudin porta erat eget, aliquam vestibulum est. In varius ornare risus, in consectetur ligula mollis at. Aliquam nec ultricies sapien, eu malesuada est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum pulvinar a metus a congue. Vestibulum at volutpat tellus, nec fermentum nisl. Aliquam erat volutpat. Vestibulum sed magna non sem vulputate lobortis ac ac tellus. In hac habitasse platea dictumst. Duis erat nisl, suscipit eget elit a, interdum lacinia enim. Phasellus sed iaculis mauris, blandit porta turpis.

 </Text>
 </ScrollView>

        <Button color ='red' title = "CLOSE" onPress={props.onClose}/>
    

    </Modal>
    </View>

  );
};
const styles = StyleSheet.create({
  text: {
   padding:20,
   backgroundColor: 'white',
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },

});

export default SampleModal;



