import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const props = {
    keyboardType: 'default',
    value: 'example@gmail.com'
}

export const CustomTextInput = () => {
  return (
    <View>
        <TextInput
            style={styles.input}
            keyboardType={'default'} 
            value={''}
            placeholder={'example'}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 250,
      margin: 13,
      borderWidth: 2,
      padding: 15,
      borderColor: 'white',
      textAlign: 'center'
    },
});