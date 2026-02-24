import { createDataApi } from '@data/datasources/ApiDatasource';


export default class ActivityRepositoryImpl {

  async createData(data) {
    
    return await createDataApi(data);
  }

}