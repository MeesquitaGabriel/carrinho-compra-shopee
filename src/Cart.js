export default class Cart {
  constructor() {
    this._itens = new Map();
    this._desconto = 0;
  }

  async addItem({ id, nome, preco, quantidade = 1 }) {
    if (quantidade <= 0) throw new Error('Quantidade deve ser > 0');
    const atual = this._itens.get(id);
    if (atual) {
      atual.quantidade += quantidade;
      this._itens.set(id, atual);
      return;
    }
    const { default: Item } = await import('./Item.js');
    const item = new Item({ id, nome, preco });
    this._itens.set(id, { item, quantidade });
  }

  removeItem(id) {
    this._itens.delete(id);
  }

  updateQuantidade(id, quantidade) {
    if (quantidade < 0) throw new Error('Quantidade inválida');
    const atual = this._itens.get(id);
    if (!atual) return;
    if (quantidade === 0) this._itens.delete(id);
    else this._itens.set(id, { ...atual, quantidade });
  }

  get itens() {
    return Array.from(this._itens.values()).map(({ item, quantidade }) => ({
      id: item.id,
      nome: item.nome,
      preco: item.preco,
      quantidade,
      subtotal: Number((item.preco * quantidade).toFixed(2))
    }));
  }

  subtotal() {
    const s = this.itens.reduce((acc, i) => acc + i.subtotal, 0);
    return Number(s.toFixed(2));
  }

  aplicarDesconto(percentual) {
    if (percentual < 0 || percentual > 1) throw new Error('Desconto deve estar entre 0 e 1');
    this._desconto = percentual;
  }

  total() {
    const s = this.subtotal();
    const t = s * (1 - this._desconto);
    return Number(t.toFixed(2));
  }

  toJSON() {
    return {
      itens: this.itens,
      subtotal: this.subtotal(),
      desconto: this._desconto,
      total: this.total()
    };
  }
}
