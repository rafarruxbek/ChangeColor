// const math1 = 13;
// const math2 = 22;
// // console.log(math1 + math2);
// const result = math1 + math2;
// console.log(result);

// const math3 = 34;
// const math4 = 3;
// // console.log(math1 + math2);
// const result2 = math3 + math4;
// console.log(result2);

// //Funksia kodimiz boshqarib bo'lmaydigan tartibsiz va hunuk bo'lgan kod yozmasligimiz uchun kerak

//Function Decloration
function add(a, b) {
  console.log(a + b);
}
add(23, 44);
add(43, 54);
add(73, 52);
add(33, 14);

function mul(a, b) {
  console.log("Kopaytirish amali", a * b);
}

mul(2, 4);
mul(3, 5);
mul(4, 6);
mul(7, 8);

//Function Expression

const calc = function (a, b) {
  console.log("");
  console.log(a + " va " + b + "ni");
  console.log("Qoshilsa:", a + b);
  console.log("Ayirilsa:", a - b);
  console.log("Kopaytirilsa:", a * b);
  console.log("Bolinsa:", a / b);
};

calc(2, 4);
calc(3, 5);
calc(4, 5);

// Arrow Function

const clac01 = (a, b) => {
  console.log("");
  console.log(a + " va " + b);
  console.log("+ =>", a + b);
  console.log("- =>", a - b);
  console.log("* =>", a * b);
  console.log("/ =>", a / b);
};
clac01(2, 8);
clac01(3, 7);
clac01(4, 5);
clac01(6, 2);
