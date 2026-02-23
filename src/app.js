import React from 'react';
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
  SplashScreen
} from './presentation/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen 
          name="Profile" 
          component={UserScreen} 
        />

        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        
        <Stack.Screen 
          name="MasterBlock" 
          component={MasterBlockScreen} 
        />

        <Stack.Screen 
          name="CreateData" 
          component={CreateScreen} 
        />

        <Stack.Screen 
          name="Transactions" 
          component={TransactionScreen} 
        />
        
        <Stack.Screen 
          name="UpdateData" 
          component={UpdateScreen} 
        />

        <Stack.Screen 
          name="ReadData" 
          component={ReadScreen} 
        />

        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./presentation/screens/auth/LoginScreen";
import DataTransactionsScreen from "./presentation/screens/activity/DataTransactionsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="DataTransactions"
          component={DataTransactionsScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
*/

/*
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { LoginUser } from "./domain/usecases/auth/LoginUser";
import { AuthRepositoryImpl } from "./data/repositories/AuthRepositoryImpl";

export default function LoginScreen() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authRepository = new AuthRepositoryImpl();
  const loginUser = new LoginUser(authRepository);

  const handleLogin = async () => {

    try {

      const result = await loginUser.execute(username, password);

      console.log("Login Success:", result);

    } catch (error) {

      console.log("Login Failed:", error);

    }

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login User</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 24,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10
  }

});
*/

/*
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo selamat datang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
*/

