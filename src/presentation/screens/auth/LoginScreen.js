import React,  {useState} from 'react';
import { View, Button, TextInput, Alert } from 'react-native';
import LoginUser from '@domain/usecases/auth/LoginUser';
import AuthRepositoryImpl from '@data/repositories/AuthRepositoryImpl';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const repository = new AuthRepositoryImpl();
  const loginProcess = new LoginUser(repository);

  const handleData = () => {
    // proses login berhasil
    navigation.replace('MainTabs');
  };

  const handleLoginProcess = async () => {
    const data = {
      userId: username,
      password: password,
    };

    const response = await loginProcess.execute(data);
    Alert.alert('Informasi', JSON.stringify(response));
  };

  return (
    <View>
      <Button title="Login" onPress={handleData} />

      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Save" onPress={handleLoginProcess} />
    </View>
  );
}

/*
import React from 'react';
import { View, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
}
*/

/*
import React from 'react';
import { View, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View>
      <Text>Login User</Text>
    </View>
  );
}
*/
/*
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { LoginUser } from "../../../domain/usecases/auth/LoginUser";
import { AuthRepositoryImpl } from "../../../data/repositories/AuthRepositoryImpl";

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
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

//import LoginUser from "../../../domain/usecases/auth/LoginUser";
//import AuthRepositoryImpl from "../../../data/repositories/AuthRepositoryImpl";

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //const authRepository = new AuthRepositoryImpl();
  //const loginUser = new LoginUser(authRepository);

  const handleLogin = async () => {
    try {
        /*
      const user = await loginUser.execute(username, password);

      navigation.navigate("DataTransactions", {
        user: user
      });

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>

      <Text>Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      {error ? <Text>{error}</Text> : null}

    </View>
  );
}
*/
