import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { CustomTextInput } from '../../components/CustomTextInput'
import { StatusBar } from 'expo-status-bar';

// CSS import
import { GlobalStyles } from '../../styles/GlobalStyles';
import { LoginStyle } from './Styles';

export const Login = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.container}>
          <StatusBar style='auto'/>
          <Text style={GlobalStyles.text}> Login </Text>
          <View>
            <CustomTextInput />
            <CustomTextInput />
          </View>
          <View>
            <TouchableOpacity onPress={ () => navigation.navigate('ForgotPassword')}>
              <Text style={GlobalStyles.touchables}>Forgot your password?</Text>
            </TouchableOpacity> 
          </View>
          <View>
            <TouchableOpacity onPress={ () => navigation.navigate('CreateAccount')}>
              <Text style={GlobalStyles.touchables}>Don’t have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
          <TouchableHighlight
            onPress={ () => alert('Hola')}
            underlayColor={"#09f"} 
            style={{
              width: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '',
              borderRadius: 5
            }}
          >
            <Text style={GlobalStyles.touchables}>Login</Text>
          </TouchableHighlight>
      </View>
      <View style={LoginStyle.about}>
          <TouchableOpacity onPress={ () => navigation.navigate('About')}>
            <Text style={GlobalStyles.touchables}>About Application</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}