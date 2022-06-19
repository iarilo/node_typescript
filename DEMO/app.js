
 import { factorial } from "./factorial.js";

const computed = ( array ) => {
  const arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i)
  }
  return array.map(el => factorial(el))

};

const main = () => {
  performance.mark('start');

  const dataArr = [
    computed([25, 20, 19, 48, 30, 50]),
    computed([25, 20, 19, 48, 30, 50]),
    computed([25, 20, 19, 48, 30, 50]),
    computed([25, 20, 19, 48, 30, 50]),
  ]
  console.log(dataArr);

  performance.mark('end');
  performance.measure('main', 'start', 'end');
  console.log(performance.getEntriesByName('main').pop());

}
main();