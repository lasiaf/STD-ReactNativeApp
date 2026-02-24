import axios from 'axios';
import { Alert } from 'react-native';

const API_URL = "http://localhost:3000/products";

export const createDataApi = async (data) => {
  /*Alert.alert(
    "Informasi",
    JSON.stringify(data)
    );*/
    

  //const response = await axios.post(API_URL, data);

  const dataku = {
      status : 201,
      message: "Data berhasil disimpan",
      data : {
        id : 10,
        title : "Akuntansi",
        description : "Buku Tulis"
      }
    };
  return dataku ;//response.data;
};