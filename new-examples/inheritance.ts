type TDepartment = {
  name: string;
}

type TEmployee = {
  name: string;
  age: number;
}

class TeslaCompany {
  private static role = 'Admin';
  private readonly credentials: string;
  private departments: TDepartment[];
  private employees: TEmployee[];

  constructor(credentials: string) {
    this.credentials = credentials
  }

  addDepartment(value: TDepartment): void {
    this.departments = [...this.departments, value];
  }

  addEmployee(value: TEmployee): void {
    this.employees = [...this.employees, value]
  }
}

class TeslaEmployee extends TeslaCompany {
  private newEmployee: TEmployee;

  public setName(name: TEmployee): void {
    this.newEmployee = name;
  }
}

const teslaEmployee = new TeslaEmployee('123456');
teslaEmployee.setName({ age: 23, name: 'Leonardo' });
teslaEmployee.addDepartment({ name: 'IT' })
teslaEmployee.addEmployee({ age: 23, name: 'Leonardo' })