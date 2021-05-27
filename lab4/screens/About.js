import React from 'react';
import {View,Button,StyleSheet, ImageBackground,Text, Modal} from 'react-native';


const image = { uri: "https://mangathrill.com/wp-content/uploads/2020/11/EnBGVZUVcAAEKM7.jpg" };


  
const Profile = ({navigation}) => {
    return(
        <View style={styles.image}>
<ImageBackground source={image} style={styles.image}>
      
    </ImageBackground>
            <Button color= "#874f00" title="GO Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({

    
    image:{
          flex: 1,
    resizeMode: "cover",
  
    justifyContent: "center"
    }
});