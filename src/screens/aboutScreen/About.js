import { Text, View } from 'react-native'

import { GlobalStyles } from '../../styles/GlobalStyles'
export const About = () => {
  return (
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.text}>Esta es la ventana de sobre de.</Text>
    </View>
  )
}
