export class CalculatorService {
  async add(a: number, b: number) {
    return a + b;
  }

  async subtract(a: number, b: number) {
    return a - b;
  }

  async multiply(a: number, b: number) {
    return a * b;
  }

  async divide(a: number, b: number) {
    return a / b;
  }
}
