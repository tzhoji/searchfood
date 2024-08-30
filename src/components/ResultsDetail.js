import { View, Text,Image ,StyleSheet} from 'react-native'
import React from 'react'

const ResultsDetail = ({result}) => {
  return (
    <View style={[style.container,style.elevation]}>
      <Image style={style.image} source={{uri:result.image_url}}/>
      <Text style={style.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        height:120,
        borderRadius:5,
        marginBottom:10

    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },
    name:{
        fontWeight:'bold',
        fontSize:14,
        
    }
})

export default ResultsDetail