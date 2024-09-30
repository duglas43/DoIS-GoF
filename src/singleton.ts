export class Database {
  private static instance: Database;
  private isConnected: boolean = false;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public connect(): void {
    this.isConnected = true;
    console.log("Connected to the database.");
  }

  public query(sql: string): void {
    if (!this.isConnected) {
      console.log(
        "Cannot execute query. Please connect to the database first."
      );
      return;
    }
    console.log(`Executing query: ${sql}`);
  }
}
