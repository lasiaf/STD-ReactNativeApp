import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function LoadScreen({ navigation }) {

  useEffect(() => {
    const init = async () => {

      const repository = new AppRepositoryImpl();
      const initializeApp = new InitializeApp(repository);

      await initializeApp.execute();

      //navigation.replace("Menu");
      Alert.alert("Success", "LOADING BERHASIL");

    };

    const timer = setTimeout(() => {

      navigation.replace("Menu");

    }, 10000); // 10 detik

    return () => clearTimeout(timer);

  }, []);

  return (
    <View style={styles.container}>

      <ActivityIndicator size="large" color="blue" />

      <Text style={styles.text}>Sedang memuat data...</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    marginTop: 20,
    fontSize: 16
  }

});

/*
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
*/

