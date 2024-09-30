interface Report {
  generate(): string;
}

export class SimpleReport implements Report {
  generate(): string {
    return "Generating a simple report.";
  }
}

export class DetailedReportDecorator implements Report {
  constructor(private report: Report) {}

  generate(): string {
    return `${this.report.generate()} Adding detailed information.`;
  }
}
