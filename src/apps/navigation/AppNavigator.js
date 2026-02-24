/*
import { NavigationContainer } from '@react-navigation/native';
import NavBottom from './NavBottom';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <NavBottom />
    </NavigationContainer>
  );
}
*/


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  UserScreen,
  LoginScreen,
  MasterBlockScreen,
  CreateScreen,
  TransactionScreen,
  UpdateScreen,
  ReadScreen,
  SplashScreen,
  CheckScreen,
  LoadScreen,
  MenuScreen
} from '@presentation/screens';
import NavBottom from '@apps/navigation/NavBottom';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Check">

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={UserScreen} />
        
        <Stack.Screen name="MasterBlock" component={MasterBlockScreen} />

        <Stack.Screen name="CreateData" component={CreateScreen} />
        <Stack.Screen name="ReadData" component={ReadScreen} />
        <Stack.Screen name="Transactions" component={TransactionScreen} />
        <Stack.Screen name="UpdateData" component={UpdateScreen} />
        
        <Stack.Screen name="Check" component={CheckScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Load" component={LoadScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen 
          name="MainTabs"
          component={NavBottom}
          options={{ headerShown: false }}
        /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}
