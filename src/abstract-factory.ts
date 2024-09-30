interface AbstractMachine {
  operate(): string;
}

interface AbstractParts {
  getDescription(): string;
}

interface AbstractFactory {
  createMachine(): AbstractMachine;
  createParts(): AbstractParts;
}

export class LatheMachineFactory implements AbstractFactory {
  public createMachine(): AbstractMachine {
    return new LatheMachine();
  }
  public createParts(): AbstractParts {
    return new LatheParts();
  }
}

export class MillingMachineFactory implements AbstractFactory {
  public createMachine(): AbstractMachine {
    return new MillingMachine();
  }
  public createParts(): AbstractParts {
    return new MillingParts();
  }
}

class LatheMachine implements AbstractMachine {
  public operate(): string {
    return "Operating Lathe Machine.";
  }
}

class LatheParts implements AbstractParts {
  public getDescription(): string {
    return "Lathe machine parts.";
  }
}

class MillingMachine implements AbstractMachine {
  public operate(): string {
    return "Operating Milling Machine.";
  }
}

class MillingParts implements AbstractParts {
  public getDescription(): string {
    return "Milling machine parts.";
  }
}
