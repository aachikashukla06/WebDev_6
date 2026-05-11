// let n = -5;

// if (n > 0) {
//   console.log("Positve Integer");
// } else {
//   console.log("negative Integer");
// }

// let usr = "abcde";
// let pass = "12345";

// usr === "abcde" && pass === "123456"
//   ? console.log("login success")
//   : console.log("login failed");

let a = 1,
  b = 5;
console.log(a > 2 || b < 3);

let data;
let name = "shubham";

data = name || "N/A";

// if (name) {
//   data = name;
// } else {
//   data = "N/A";
// }

console.log(data);

let x = 2;
console.log(x > 10 && y < 5);

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

let choice = 8;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }
  default: {
    console.log("Paani");
  }
}