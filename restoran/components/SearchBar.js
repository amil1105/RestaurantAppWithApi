import { StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.IconStyle}
        name="search1"
        size={30}
        color="black" />
      <TextInput placeholder='Ara'

        autoCapitalize='none'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}

        autoCorrect={false}
        style={styles.InputStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',

  },
  IconStyle: {
    marginHorizontal: 15,
    alignItems: 'center'
  },
  InputStyle: {
    flex: 1,
    fontSize: 20
  }
})