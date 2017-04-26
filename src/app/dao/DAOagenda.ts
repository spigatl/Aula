export class DAOAgenda {
  list: any;
  items: any;
  constructor() {
    this.list = []; 
  }

  getList() {
    this.items = [
      {
        descricao: "Spiga"
      },
      {
        descricao: "spiga2"
      },
      {
        descricao: "spiga3"
      }
    ];
    return this.list;
  }

  insert(conta) {

  }
  edit(conta) {

  }
  delete() {

  }
}
