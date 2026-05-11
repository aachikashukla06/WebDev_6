abc();

function abc() {
  console.log("Hello World");
}

// console.log(abc);

abc();

let add = function (a, b) {
  return a + b;
};

console.log(add);

console.log(add(4, 6));

console.log(add());

const arrowfun = () => {
  console.log("I am Arrow Function");
};

arrowfun();

const addarrow = (a, b) => a + b;

console.log(addarrow(5, 6));