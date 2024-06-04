// interface ICalculator {
// sum: (a: number, b: number) => number;
// sub: (a: number, b: number) => number;
// mul: (a: number, b: number) => number;
// div: (a: number, b: number) => number;
// }

// class Calculator implements ICalculator {
//   sum(num1: number, num2: number): number {
//     return num1 + num2;
//   }
//   sub(num1: number, num2: number): number {
//     return num1 - num2;
//   }
//   mul(num1: number, num2: number): number {
//     return num1 * num2;
//   }
//   div(num1: number, num2: number): number {
//     return num1 / num2;
//   }
// }

// const calculator = new Calculator();
// console.log(calculator.sum(2, 2));
// console.log(calculator.sub(2, 2));
// console.log(calculator.mul(2, 2));
// console.log(calculator.div(2, 2));

interface ICalculator {
  calculate: (a: number, b: number, operator: string) => void;
}

class Calculator implements ICalculator {
  calculate(num1: number, num2: number, operator: string): void {
    switch (operator) {
      case "+":
        console.log(num1 + num2);
        break;
      case "-":
        console.log(num1 - num2);

        break;
      case "*":
        console.log(num1 * num2);
        break;
      case "/":
        console.log(num1 / num2);
        break;
      default:
        console.log("Enter a valid operator please!");
    }
  }
}

const calculator = new Calculator();
calculator.calculate(2, 2, "+");
calculator.calculate(2, 2, "-");
calculator.calculate(2, 2, "*");
calculator.calculate(2, 2, "/");

// ----
interface IBook {
  title: string;
  yearOfPublishing: number;
  genre: string;
}

interface IAuthor {
  firstName: string;
  surname: string;
  dateOfBirth: number;
  nationality?: string;
}

interface IBookService {
  getBookInfo(title: string, yearOfPublishing: number, genre: string): IBook;
  getAuthorInfo(
    firstName: string,
    surname: string,
    dateOfBirth: number,
    nationality?: string
  ): IAuthor;
}

const bookServices: IBookService = {
  getBookInfo: (
    title: string,
    yearOfPublishing: number,
    genre: string
  ): IBook => {
    return { title, yearOfPublishing, genre };
  },
  getAuthorInfo: (
    firstName: string,
    surname: string,
    dateOfBirth: number,
    nationality?: string
  ): IAuthor => {
    return { firstName, surname, dateOfBirth };
  },
};

console.log(
  bookServices.getBookInfo("The Three-Body Problem", 2008, "Science fiction")
);

console.log(bookServices.getAuthorInfo("Liu", "Cixin", 1963));
