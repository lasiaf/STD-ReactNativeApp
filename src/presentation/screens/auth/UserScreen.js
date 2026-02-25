import React, { useEffect } from 'react';
import { View, Text, Alert, Button } from 'react-native';
//import { getToken } from '@data/storage/AuthStorage';
import AuthRepositoryImpl from '@data/repositories/AuthRepositoryImpl';

export default function UserScreen() {
  const repository = new AuthRepositoryImpl();
  const checkLogin = async () => {

    
    const token = await repository.getToken();

    if (token) {
      console.log('User sudah login');
      Alert.alert('Success', 'User sudah login '+token);
    } else {
      console.log('User belum login');
      Alert.alert('Danger', 'User gagal login');
    }
  };

  const resetUser = async () => {

    
    await repository.logout();

    console.log('User sudah logout');
    Alert.alert('Success', 'User sudah logout ');
    
  };

  const loginUser = async () => {

    const token = "123456789TOKEN";
    await repository.loginAcc(token);

    console.log('User sudah login');
    Alert.alert('Success', 'User sudah login ');
    
  };
  
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Cek Token" onPress={checkLogin} />
      <Button title="Reset Token" onPress={resetUser} />
      <Button title="Create Token" onPress={loginUser} />
    </View>
  );
}
