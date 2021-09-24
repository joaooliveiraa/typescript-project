export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        /*Programação defensiva
        criar uma nova instancia da data pra garantir que ela não
        irá ser alterada em um setDate()*/
        const data = new Date(this._data.getTime());
        return data;
    }
}
