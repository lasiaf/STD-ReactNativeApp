import React from 'react';
import { View, Text } from 'react-native';
import { ENV } from "@apps/env";

export default function SplashScreen() {
  return (
    <View>
      <Text>Splash Screen</Text>
      <Text>Ini Screen {ENV.HEADER_KEY}</Text>
    </View>
  );
}