// By default all attributes are always public
// Good practice to add public

/**
 * Public
 * Protected
 * Private
 * Static
 */
class PersonAbstract {
  public name: string;
  public age: number;

  public greetings() {
    return this.name;
  }
}

class PersonAbstractTwo {
  private name: string;
  private department: string;
  private readonly credentials: string;

  constructor(value: string) {
    this.credentials = value;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getDepartment(): string {
    return this.department;
  }

  public getCredentials(): string {
    return this.credentials;
  }
}

const personAbstractTwo = new PersonAbstractTwo('123456');
personAbstractTwo.getCredentials();