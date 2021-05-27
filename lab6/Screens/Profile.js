// Aycardo, Kenneth Brian
// Castillon, Charles Jefferson
// Dualan, Jaynyl Edrielle 
// BSCS 3-2
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import {globalStyles} from '../Styles/Global';

const Profile = ({ route, navigation }) => {
  const data = route.params;

  return (
    <View style={globalStyles.container}>
      <ScrollView>

        <View style={globalStyles.picFor}>
          <Image
            style={{width: 150, height: 150}}
            source={{ uri: data.picture.medium }}
          />
          <Text style={globalStyles.text}>
            {data.name.first} {data.name.last}
          </Text>
        </View>

        <View style={globalStyles.h2}>
          <MaterialCommunityIcons name="comment-account-outline" size={24} color="black" />
          <Text style={globalStyles.textHeader}> About</Text>
        </View>

        <View>
          <Text style={globalStyles.content}>
            Age: {data.dob.age} {'\n'}
            Birthday: {data.dob.date} {'\n'}
            Gender: {data.gender} {'\n'}
            Address: {data.location.street.number} {data.location.street.name}, {data.location.state}, {data.location.country}
          </Text>
        </View>

        <View style={globalStyles.h2}>
          <MaterialCommunityIcons  name="phone" size={24} color="black" />
          <Text style={globalStyles.textHeader}> Contact</Text>
        </View>
        
        <View>
          <Text style={globalStyles.content}>
            Email: {data.email} {'\n'}
            Phone: {data.phone}
          </Text>
        </View>

        <View style={globalStyles.h2}>
          <MaterialCommunityIcons name="drag-horizontal" size={24} color="black" />
          <Text style={globalStyles.textHeader}> Other</Text>
        </View>

        <View>
          <Text style={globalStyles.content}>
            Date Registered: {data.registered.date}
          </Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Profile;

