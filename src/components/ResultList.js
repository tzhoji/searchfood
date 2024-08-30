import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'


const ResultList=({title,results,navigation})=>{
    if (!results.length){
        return null;
    }
    return (
        <View style={style.container}>
            <Text style={style.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    return (
                    <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>

                    )
                }}  
            />
            
        </View>
    ) 
}

const style=StyleSheet.create({
    titleStyle:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:10
    },
    container:{
        marginBottom:10,
        
    }
})

export default withNavigation(ResultList);

