import React, { useEffect } from 'react';
import { View, Text, Alert, Button } from 'react-native';
//import { getToken } from '@data/storage/AuthStorage';
import AuthRepositoryImpl from '@data/repositories/AuthRepositoryImpl';

export default function UserScreen() {
  const checkLogin = async () => {

    const repository = new AuthRepositoryImpl();
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

    const repository = new AuthRepositoryImpl();
    await repository.logout();

    console.log('User sudah logout');
    Alert.alert('Success', 'User sudah logout ');
    
  };
  
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Cek Token" onPress={checkLogin} />
      <Button title="Reset Token" onPress={resetUser} />
    </View>
  );
}
