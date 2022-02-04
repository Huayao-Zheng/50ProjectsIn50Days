const mutiplyClosure = (a) => (b) => (c) => a * b * c;

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num); // 75

//
const pipe = (num) => makePositive(multiplyBy3(num));
//    => makePositive(-75);
//    => 75;}

console.log(pipe(-25));
