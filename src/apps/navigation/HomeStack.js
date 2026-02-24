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