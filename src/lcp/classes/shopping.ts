import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem) {
    this._items.push(item);
  }
  removeItem(index: number) {
    this._items.splice(index, 1);
  }
  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }
  totalWithDiscount() {
    // Se é exigido uma checagem de tipo, e uma quebra do princípio do LSP
    const result = this.discount.calculate(this.total());
    if (typeof result === 'number') return result;
    return this.total();
  }

  isEmpty() {
    return this._items.length === 0;
  }
  clear() {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}
