import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
  )
}
const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:5,
        backgroundColor:'#BDBDBD',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15
    },

    inputStyle:{

        flex:1,
        fontSize:20
    }

})
export default SearchBar