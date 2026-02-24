import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import InitializeApp from '@domain/usecases/app/InitializeApp';
import AppRepositoryImpl from '@data/repositories/AppRepositoryImpl';

export default function LoadScreen({ navigation }) {
  useEffect(() => {

    const init = async () => {

      const repository = new AppRepositoryImpl();
      const initializeApp = new InitializeApp(repository);

      await initializeApp.execute();

      //navigation.replace("Menu");
      Alert.alert("Success", "LOADING BERHASIL");

    };

    init();

  }, []);

  return null;
}