function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  console.log(typeof number1);
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
  return n1 + n2;
}

const number1 = 5;
//let number1: number = 5; --> Bad Practice because TS can automatically recognize the type already

/* let number1: number;
number1 = 5; */
// Reasonable practice to define type first

const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
