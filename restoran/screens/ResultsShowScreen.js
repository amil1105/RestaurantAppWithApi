import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function ResultsShowScreen({ route }) {
    const [result, setResult] = useState(null)
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }







    return (

        <View>

            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <View style={styles.is_closed}>
                {result.is_closed ? (<AntDesign name="closecircle" size={24} color="red" />) 
                : (<MaterialIcons name="delivery-dining" size={35} color="green" />)}



            </View>


            <FlatList

                data={result.photos}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: item }} />
                    );
                }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        borderRadius: 20,
        margin: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
    },
    phone: {
        fontSize: 25,
        alignSelf: 'center',

    },
    is_closed:{
        alignSelf: 'center',

    }

})