import axios from 'axios';
import { Alert } from 'react-native';
import Config from 'react-native-config';

const API_URL = 'http://localhost:3000/products';
const URL_LOGIN = Config.URL_LOGIN;
const HEADER_KEY = Config.HEADER_KEY;
const TOKEN_VALUE = Config.TOKEN_VALUE;

export const createDataApi = async data => {
  /*Alert.alert(
    "Informasi",
    JSON.stringify(data)
    );*/

  //const response = await axios.post(API_URL, data);

  const dataku = {
    status: 201,
    message: 'Data berhasil disimpan',
    data: {
      id: 10,
      title: 'Akuntansi',
      description: 'Buku Tulis',
    },
  };
  return dataku; //response.data;
};

export const loginUser = async dataJSON => {
  try {
    const response = await axios.post(URL_LOGIN, dataJSON, {
      headers: {
        'Content-Type': 'application/json',
        [HEADER_KEY]: TOKEN_VALUE,
      },
    });

    //console.log('Response:', response.data);
    Alert.alert('Informasi', JSON.stringify(response));
  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.data);
      console.error('Status Code:', error.response.status);
    } else {
      console.error('Error:', error.message);
    }
  }
};
