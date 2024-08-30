import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import Entypo from '@expo/vector-icons/Entypo';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  console.log(result)
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  const renderAddress = (display_address) => {
    return display_address.map((addressLine, index) => (
      <Text key={index} style={styles.textstyle}>
        {addressLine}
      </Text>
    ));
  };

  return (
    <View>
      <Text style={styles.titlestyle}>{result.name}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:result.image_url}}/>
      </View>
      <View style={styles.viewstyle}>
        
        <Entypo name="address" size={24} color="black" />
        <View style={styles.addressContainer}>
          {renderAddress(result.location['display_address'])}
        </View>
      </View>
      <View style={styles.viewstyle}>
        
        <Entypo name="phone" size={24} color="black" />
        <Text style={styles.textstyle}>{result.phone}</Text>
      </View>
      

      <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item.image_url }} />
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  titlestyle:{
    fontWeight:'bold',
    alignSelf:'center'
  },
  imageContainer: {
    height: 200,
    width: 300,
    alignSelf:'center',
    shadowColor: 'black',
    elevation:2,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      height: 0,
      width: 10,
    }
  },
  image: {
    height: 200,
    width: 300,
    alignSelf:'center',
    borderRadius:10,
    
  },
  viewstyle:{
    flexDirection:'row',
    marginLeft:10,
    padding:5
  },
  textstyle:{
    marginLeft:20
  },
  addressContainer: {
    flexDirection: 'column',
    
  },
});

export default ResultsShowScreen;
