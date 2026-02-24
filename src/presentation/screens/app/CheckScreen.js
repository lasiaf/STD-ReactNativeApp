import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function CheckScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />

      <Button
        title="Master Block"
        onPress={() => navigation.navigate('MasterBlock')}
      />

      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        title="Create Data"
        onPress={() => navigation.navigate('CreateData')}
      />

      <Button
        title="Transactions"
        onPress={() => navigation.navigate('Transactions')}
      />

      <Button
        title="Update"
        onPress={() => navigation.navigate('UpdateData')}
      />

      <Button
        title="View"
        onPress={() => navigation.navigate('ReadData')}
      />

      <Button
        title="Splash"
        onPress={() => navigation.navigate('Splash')}
      />

      <Button
        title="Load"
        onPress={() => navigation.navigate('Load')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
    padding: 20
  }
});