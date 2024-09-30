interface Observer {
  update(orderStatus: string): void;
}

export class User implements Observer {
  constructor(private name: string) {}

  update(orderStatus: string): void {
    console.log(`${this.name} received an update: ${orderStatus}`);
  }
}

export class Order {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(orderStatus: string): void {
    for (const observer of this.observers) {
      observer.update(orderStatus);
    }
  }

  changeStatus(status: string): void {
    console.log(`Order status changed to: ${status}`);
    this.notify(status);
  }
}
