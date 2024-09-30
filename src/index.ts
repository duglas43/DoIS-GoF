import { Database } from "./singleton";
import { LatheMachineFactory, MillingMachineFactory } from "./abstract-factory";
import { SimpleReport, DetailedReportDecorator } from "./decorator";
import { Order, User } from "./observer";
import {
  DiscountPricingStrategy,
  PriceContext,
  StandardPricingStrategy,
} from "./strategy";

function testSingleton() {
  const db1 = Database.getInstance();
  const db2 = Database.getInstance();
  db1.connect();
  db2.query("SELECT * FROM users;");
  console.log("Is db1 the same as db2?", db1 === db2);
}

function testAbstractFactory() {
  const latheFactory = new LatheMachineFactory();
  const latheMachine = latheFactory.createMachine();
  const latheParts = latheFactory.createParts();

  const millingFactory = new MillingMachineFactory();
  const millingMachine = millingFactory.createMachine();
  const millingParts = millingFactory.createParts();

  console.log(latheMachine.operate());
  console.log(latheParts.getDescription());
  console.log(millingMachine.operate());
  console.log(millingParts.getDescription());
}

function testDecorator() {
  const report = new SimpleReport();
  console.log(report.generate());

  const detailedReport = new DetailedReportDecorator(report);
  console.log(detailedReport.generate());
}

function testObserver() {
  const order = new Order();
  const user1 = new User("Alice");
  const user2 = new User("Bob");

  order.attach(user1);
  order.changeStatus("Shipped");
}

function testStrategy() {
  const standardPricing = new StandardPricingStrategy();
  const discountPricing = new DiscountPricingStrategy();

  const priceContext = new PriceContext(standardPricing);
  console.log("Standard pricing:", priceContext.calculatePrice(100));

  priceContext.setStrategy(discountPricing);
  console.log("Discount pricing:", priceContext.calculatePrice(100));
}

console.log("CREATIONAL PATTERNS");
console.log("SINGLETON");
testSingleton();
console.log("\nABSTRACT FACTORY");
testAbstractFactory();
console.log("\nSTRUCTURAL PATTERNS");
console.log("DECORATOR");
testDecorator();
console.log("\nBEHAVIORAL PATTERNS");
console.log("OBSERVER");
testObserver();
console.log("\nSTRATEGY");
testStrategy();
