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
  calculate: (a: number, b: number, operator: string) => number | string;
}

class Calculator implements ICalculator {
  calculate(num1: number, num2: number, operator: string): number | string {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Enter a valid operator please!";
    }
  }
}

const calculator = new Calculator();
console.log(calculator.calculate(2, 2, "+"));
console.log(calculator.calculate(2, 2, "-"));
console.log(calculator.calculate(2, 2, "*"));
console.log(calculator.calculate(2, 2, "/"));

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
  getBookInfo(book: IBook): IBook;
  getAuthorInfo(author: IAuthor): IAuthor;
}

const bookServices: IBookService = {
  getBookInfo: (book) => book,
  getAuthorInfo: (author) => author,
};

console.log(
  bookServices.getBookInfo({
    title: '"The Three-Body Problem"',
    yearOfPublishing: 2008,
    genre: "Science fiction",
  })
);

console.log(
  bookServices.getAuthorInfo({
    firstName: "Liu",
    surname: "Cixin",
    dateOfBirth: 1963,
  })
);
