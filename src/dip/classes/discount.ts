export abstract class DiscountProtocol {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends DiscountProtocol {
  protected readonly discount = 0.5;

  // Modificando o comportamento do subtipo e uma quebra do princípio do LSP

  // calculate(price: number): string {
  //   return `${price}`;
  // }
}
export class TenPercentDiscount extends DiscountProtocol {
  protected readonly discount = 0.1;
}
export class NoDiscount extends DiscountProtocol {}
