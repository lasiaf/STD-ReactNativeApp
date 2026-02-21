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