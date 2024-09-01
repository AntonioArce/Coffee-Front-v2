import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Own Imports
import { Login } from './src/screens/loginScreen/Login';
import { About } from './src/screens/aboutScreen/About';
import { ForgotPassword } from './src/screens/forgotPassword/ForgotPassword';
import { CreateAccount } from './src/screens/createAccount/CreateAccount';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='CreateAccount' component={CreateAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


    /* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ Home }/>
      </Stack.Navigator>
    </NavigationContainer> */