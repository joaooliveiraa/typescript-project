export class Negociacao {

  constructor(
     private _data: Date,
     private quantidade: number,
     private valor: number) {
  }
  
  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
      /*Programação defensiva
      criar uma nova instancia da data pra garantir que ela não 
      irá ser alterada em um setDate()*/ 
      const data = new Date(this._data.getTime())
      return data
  }
}
