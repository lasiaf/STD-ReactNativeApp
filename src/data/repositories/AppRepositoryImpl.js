//import { createDB, createTables } from '../datasources/SQLiteDatasource';
//import { fetchMasterData } from '../datasources/ApiDatasource';

export default class AppRepositoryImpl {

  async createDatabase() {
    return "ok"; //await createDB();
  }

  async createTables() {
    return "ok"; //await createTables();
  }

  async syncDataFromApi() {
    return "ok"; //await fetchMasterData();
  }

}