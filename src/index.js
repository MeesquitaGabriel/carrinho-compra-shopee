import Cart from './Cart.js';

(async () => {
  const carrinho = new Cart();

  await carrinho.addItem({ id: 1, nome: 'Camiseta', preco: 20.0, quantidade: 2 });
  await carrinho.addItem({ id: 2, nome: 'Tênis', preco: 150.0, quantidade: 1 });

  carrinho.updateQuantidade(1, 3);

  console.log('Itens:', carrinho.itens);
  console.log('Subtotal:', carrinho.subtotal());

  carrinho.aplicarDesconto(0.1);
  console.log('Total com desconto 10%:', carrinho.total());

  console.log('JSON:', JSON.stringify(carrinho.toJSON(), null, 2));
})();
