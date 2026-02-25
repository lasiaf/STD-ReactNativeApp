import * as Keychain from 'react-native-keychain';
import { Alert } from 'react-native';

export const saveToken = async (token) => {
  try {
    await Keychain.setGenericPassword(
      "authToken", // username dummy
      token        // password diisi token
    );
    //Alert.alert('Success', 'User login');
  } catch (error) {
    console.log("Error saving token", error);
    //Alert.alert('Success', JSON.stringify(error));
  }
  

};

export const getToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();

    if (credentials) {
      return credentials.password;
    }

    return null;
  } catch (error) {
    console.log("Error getting token", error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await Keychain.resetGenericPassword();
  } catch (error) {
    console.log("Error removing token", error);
  }
};