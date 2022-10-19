// __________________      OBJECTS           ____________________________

// OBJECTS :
//          In javascript every thing is in object !
//          Object is a complex datatypes that that allow us to store a collection of
//          data in ( key = value ) pairs.
//   Note  :
//          Key is always in a form of string.
//          If we define a key as number so javaScript typecasting them nd convert in string.
//          but value can be any type of datatype.
//
//  We can write object in three ways :
//  1. const object = {}    =   const object = { key: value }
//  2. const obj = new Object();
//  3. const obj = Object.create({});

//  Q: How we can create an object without prototype ?
const a = Object.create(null); //  {} = without prototype.
console.log(a);

//  Q: How we can create our own prototype ?
const obj1 = { name: "Annu" };
console.log(Object.create(obj1)); //  yeh prototype m aayega.

//  Q: object with inbuilt prototype ?
console.log({}); //    uski inbuilt prototype aa jayegi.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj = {
  fname: "Aniket", //      name == key       "Aniket" == value
  1: true, //              1 == key           true == value   typescript convert 1 in string "1"
  age: 22,
  city: "Sehore",
};

console.log(Object.keys(obj)); //   Object.keys(obj) is used to get all the keys of given object.
console.log(Object.values(obj)); // Object.values(obj) is used to get all the values of given object.

console.log(obj); //      print all keys nd value in {object}

//  Modify a key value.

obj.city = "Bhopal";
console.log(obj);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  we can't modify key that define number, nd we can't add key as number without[]

const obj2 = {
  2: "two",
  obj: "Object",
};

// obj2.obj = "OBJECT"; //     modify
// obj2.2 = "TWO" //           can't modify
// obj2.3 =  "Three"//         can't add key like this
obj2[3] = "Three"; //          add like this
obj2[3] = "THREE"; //          modify like this
console.log(obj2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// (There are four ways to add a new key in obj)
// 1.

obj.lname = "Thakur"; //    Adding a ney key nd value in obj.
console.log(obj);

delete obj.lname; //       delete that key by using delete keyword.
console.log(obj);

// 2.

const phone = "contact"; //  Adding a new key value with variable.
obj[phone] = 9165928808; //     If we add string as key so we will take variable
console.log(obj); //            variable assinging value become key in obj.

delete obj.contact; //            delete that key by using delete keyword.
console.log(obj);

// 3.

obj["village"] = "Aanbhlikheda"; // village become key bcoz we take its in string dont take variable.
console.log(obj);

delete obj.village; //            delete that key by using delete keyword.
console.log(obj);

// 4.

obj[33] = "Makaan Number"; //   here we take number as key so dont need take variable.
console.log(obj);

delete obj[33]; //            delete that key by using delete keyword.
console.log(obj);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//
