type CartItem = {
  name: string;
  price: number;
};

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: 'open' | 'closed' = 'open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus() {
    return this._orderStatus;
  }

  addItem(item: CartItem) {
    this._items.push(item);
  }
  removeItem(index: number) {
    this._items.splice(index, 1);
  }
  total() {
    return this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout() {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }
  isEmpty() {
    return this._items.length === 0;
  }

  sendMessage(msg: string) {
    console.log('Mensagem enviada:', msg);
  }
  saveOrder() {
    console.log('Pedido salvo com sucesso...');
  }
  clear() {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Short', price: 35.9 });
shoppingCart.addItem({ name: 'Jaqueta', price: 109.9 });

console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
