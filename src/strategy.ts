interface PricingStrategy {
  calculatePrice(basePrice: number): number;
}

export class StandardPricingStrategy implements PricingStrategy {
  calculatePrice(basePrice: number): number {
    return basePrice;
  }
}

export class DiscountPricingStrategy implements PricingStrategy {
  calculatePrice(basePrice: number): number {
    return basePrice * 0.9;
  }
}

export class PriceContext {
  private strategy: PricingStrategy;
  constructor(strategy: PricingStrategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: PricingStrategy): void {
    this.strategy = strategy;
  }
  calculatePrice(basePrice: number): number {
    return this.strategy.calculatePrice(basePrice);
  }
}
