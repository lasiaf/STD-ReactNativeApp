import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';

import CreateData from '@domain/usecases/activity/CreateActivity';
import DataRepositoryImpl from '@data/repositories/ActivityRepositoryImpl';

export default function DataCreateScreen({ navigation }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const repository = new DataRepositoryImpl();
  const createData = new CreateData(repository);

  const handleSubmit = async () => {

    const data = {
      title: title,
      description: description
    };

    const response = await createData.execute(data);
    
    if (response.status === 201) {

      Alert.alert("Success", response.message);

      navigation.replace("Transactions");

    } else {

      Alert.alert("Error", "Gagal menyimpan data");

    }
  };

  return (
    <View>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Save" onPress={handleSubmit} />

    </View>
  );
}