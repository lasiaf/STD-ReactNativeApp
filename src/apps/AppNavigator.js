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
  LoadScreen
} from '../presentation/screens';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Check">

        <Stack.Screen name="Profile" component={UserScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MasterBlock" component={MasterBlockScreen} />
        <Stack.Screen name="CreateData" component={CreateScreen} />
        <Stack.Screen name="Transactions" component={TransactionScreen} />
        <Stack.Screen name="UpdateData" component={UpdateScreen} />
        <Stack.Screen name="ReadData" component={ReadScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Check" component={CheckScreen} />
        <Stack.Screen name="Load" component={LoadScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}