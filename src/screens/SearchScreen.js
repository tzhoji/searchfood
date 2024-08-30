import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen = () => {
    
    const [term,setTerm]=useState("");
    const [searchApi,results,errorMessage]=useResults()
    const filterResultsByPrice=(price)=>{
        //price==='$'||'$$'||'$$$'
        return results.filter(result=>{
            return result.price===price;
        })
    }
    
    // Call search when component
  return (
    <View style={{flex:1}}>
        <SearchBar 
            term={term} 
            onTermChange={newterm=>setTerm(newterm)}
            onTermSubmit={()=>searchApi(term)}
            />
        {errorMessage?<Text>{errorMessage}</Text>:null}
       
        <ScrollView>
            <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultList results={filterResultsByPrice('$$')}title="Bit Pricier" />
            <ResultList results={filterResultsByPrice('$$$')}title="Big Spender" />
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({

    viewstyle:{
        left:0
    }
})
export default SearchScreen