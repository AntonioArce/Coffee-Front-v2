import { Text, View } from 'react-native'

import { GlobalStyles } from '../../styles/GlobalStyles'

export const ForgotPassword = () => {
  return (
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.text}>Esta es la ventana de recuperacion de password</Text>
    </View>
  )
}
