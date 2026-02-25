import Config from "react-native-config";

export const ENV = {
  URL_LOGIN: Config.URL_LOGIN ?? "",
  URL_MASTERBLOCK: Config.URL_MASTERBLOCK ?? "",
  URL_INSERT: Config.URL_INSERT ?? "",
  TOKEN_VALUE: Config.TOKEN_VALUE ?? "",
  HEADER_KEY: Config.HEADER_KEY?? "",
  DB_SQLITE_USERNAME: Config.DB_SQLITE_USERNAME ?? "",
};