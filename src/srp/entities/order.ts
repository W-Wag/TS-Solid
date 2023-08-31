import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persist: Persistency,
  ) {}
  get orderStatus() {
    return this._orderStatus;
  }

  checkout() {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total de ${this.cart.total()} foi recebido.`,
    );
    this.persist.saveOrder();
    this.cart.clear();
  }
}
