export default class CreateActivity {

  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    return await this.repository.createData(data);
  }

}