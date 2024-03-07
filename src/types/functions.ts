// Generic Functions

// It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way. Let’s consider for a moment a function that returns the first element of an array:

function firstElement(arr: any[]) {
  return arr[0];
}
// Try This function does its job, but unfortunately has the return type any. It’d be better if the function returned the type of the array element.

// In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }
// Try By adding a type parameter Type to this function and using it in two places, we’ve created a link between the input of the function (the array) and the output (the return value). Now when we call it, a more specific type comes out:

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);


// Inference

// Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.

// We can use multiple type parameters as well. For example, a standalone version of map would look like this:

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));


// Constraints

// We’ve written some generic functions that can work on any kind of value. Sometimes we want to relate two values, but can only operate on a certain subset of values. In this case, we can use a constraint to limit the kinds of types that a type parameter can accept.

// Let’s write a function that returns the longer of two values. To do this, we need a length property that’s a number. We constrain the type parameter to that type by writing an extends clause:

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);


// Parameter Destructuring
// You can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body. In JavaScript, it looks like this:

// function sum({ a, b, c }) {
//   console.log(a + b + c);
// }
// sum({ a: 10, b: 3, c: 9 });

// // The type annotation for the object goes after the destructuring syntax:

// function sum({ a, b, c }: { a: number; b: number; c: number }) {
//   console.log(a + b + c);
// }
// // Try This can look a bit verbose, but you can use a named type here as well:

// // Same as prior example
// type ABC = { a: number; b: number; c: number };
// function sum({ a, b, c }: ABC) {
//   console.log(a + b + c);
// }

// ejemplo varias firmas
type User = {
    id: number;
    email: string;
    fullName: string;
    age: number;
  };
  
  const users: User[] = [
    { id: 1, email: "jane_doe@example.com", fullName: "Jane Doe" , age: 35 },
    { id: 2, email: "jon_do@example.com", fullName: "Jon Doe", age: 35 }
  ];
  
  function getUser(id: number): User | undefined;
  function getUser(email: string): User | undefined;
  function getUser(age: number, fullName: string): User | undefined;
  
  function getUser(idOrEmailOrAge: number | string, fullName?: string): User | undefined {
    if (typeof idOrEmailOrAge === "string") {
      return users.find(user => user.email === idOrEmailOrAge);
    }
  
    if (typeof fullName === "string") {
      return users.find(user => user.age === idOrEmailOrAge && user.fullName === fullName);
    } else {
      return users.find(user => user.id === idOrEmailOrAge);
    }
  }
  
  const userById = getUser(1);
  const userByEmail = getUser("jane_doe@example.com");
  const userByAgeAndFullName = getUser(35, "Jon Doe");
  