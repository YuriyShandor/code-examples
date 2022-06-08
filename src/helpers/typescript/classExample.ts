export default class Employee {
  empCode: number;

  empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  getSalary(): number {
    return 10000;
  }

  displayName():void {
    console.log(`Name = ${this.empName}, Employee Code = ${this.empCode}`);
  }
}
