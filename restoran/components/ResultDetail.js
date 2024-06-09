import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail({ result }) {

    return (

        <View style={styles.container}>
            <Image style={styles.image}
                source={result.image_url ? { uri: result.image_url } : null} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>
                <Text style={styles.rating}>{result.rating}</Text> ★  <Text style={styles.review}>{result.review_count} Değerlendirme</Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    image: {
        width: 250, height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontWeight: 'bold',
    },
    rating: {
        color: 'blue',
        fontWeight: '400',
    },
    review: {
        color: 'green',
        fontWeight: '400',

    }

})