import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Short', 35.9));
shoppingCart.addItem(new Product('Casaco', 107.9));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
