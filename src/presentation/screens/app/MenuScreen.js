/*
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  MenuScreen,
  CreateScreen,
  ReadScreen,
  UpdateScreen
} from '@presentation/screens';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="CreateData" component={CreateScreen} />
      <Stack.Screen name="ReadData" component={ReadScreen} />
      <Stack.Screen name="UpdateData" component={UpdateScreen} />

    </Stack.Navigator>
  );
}
*/

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
    return (
      <View style={styles.container}>
        
        
        <Button
          title="Master Block"
          onPress={() => navigation.navigate('MasterBlock')}
        />
  
        <Button
          title="Create Data"
          onPress={() => navigation.navigate('CreateData')}
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

