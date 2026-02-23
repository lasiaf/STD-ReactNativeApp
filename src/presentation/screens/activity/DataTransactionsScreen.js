import React from "react";
import { View, Text } from "react-native";

export default function DataTransactionsScreen({ route }) {

  const { user } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome {user.username}</Text>
      <Text>Halaman Data Transaksi</Text>
    </View>
  );
}