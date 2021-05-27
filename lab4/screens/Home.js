import React from 'react';
import {View,Button,StyleSheet, ImageBackground,Text, Modal} from 'react-native';


const image = { uri: "https://pbs.twimg.com/media/EmugiQRXYAAXHdp?format=jpg&name=large" };


  
const Home = ({navigation}) => {
    return(
        <View style={styles.image}>
<ImageBackground source={image} style={styles.image}>
      
    </ImageBackground>
            <Button color= "#874f00" title="PROFILE" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({

    
    image:{
          flex: 1,
    resizeMode: "cover",
  
    justifyContent: "center"
    }
});