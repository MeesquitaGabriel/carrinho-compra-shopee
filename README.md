# Carrinho de Compras da Shopee com Node.js

Simulador de carrinho inspirado na Shopee. Foco em arquitetura limpa e API simples.

## Funcionalidades
- Adicionar, remover e atualizar itens
- Subtotal e total com desconto
- Saída JSON para integração

## Requisitos
- Node.js 18+

## Como rodar
```bash
git clone https://github.com/<seu-usuario>/shopee-cart-node.git
cd shopee-cart-node
npm start
```

## Exemplo de uso (index.js)
```js
const carrinho = new Cart();
await carrinho.addItem({ id: 1, nome: 'Camiseta', preco: 20, quantidade: 2 });
carrinho.aplicarDesconto(0.1);
console.log(carrinho.total());
```

## Estrutura
```
src/
  Item.js
  Cart.js
  index.js
```

## Melhorias sugeridas
- Persistência (SQLite/Prisma)
- API REST (Express) e testes automatizados
- Cupons e frete
