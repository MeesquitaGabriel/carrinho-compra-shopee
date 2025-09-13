export default class Item {
  constructor({ id, nome, preco }) {
    if (!id || !nome || typeof preco !== 'number') {
      throw new Error('Item inválido');
    }
    this.id = id;
    this.nome = nome;
    this.preco = Number(preco);
  }
}
