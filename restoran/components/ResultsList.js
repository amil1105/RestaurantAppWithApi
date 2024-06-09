import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';


export default function ResultsList({ title, results }) {
    const navigation = useNavigation();
    
    //console.log(results);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Details',{id: item.id })}>
                            <ResultDetail result={item}></ResultDetail>


                        </TouchableOpacity>
                    )
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    marginBottom:40,
   marginLeft:1,
},
title:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:10,
    marginBottom:10
}
})