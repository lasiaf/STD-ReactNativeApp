import React from 'react';
import AppNavigator from '@apps/navigation/AppNavigator';
import Config from "react-native-config";

export default function App() {
  console.log(Config.HEADER_KEY);
  return <AppNavigator />
}