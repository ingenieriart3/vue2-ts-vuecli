// this
// Types

// In classes, a special type called this refers dynamically to the type of the current class. Let’s see how this is useful:

// class Box {
//   contents: string = "";
//   set(value: string) { // (method) Box.set(value: string): this
//     this.contents = value;
//     return this;
//   }
// }

// You can also use this in a parameter type annotation:

// class Box {
//   content: string = "";
//   sameAs(other: this) {
//     return other.content === this.content;
//   }
// }

// This is different from writing other: Box — if you have a derived class, its sameAs method will now only accept other instances of that same derived class:

// class Box {
//   content: string = "";
//   sameAs(other: this) {
//     return other.content === this.content;
//   }
// }
 
// class DerivedBox extends Box {
//   otherContent: string = "?";
// }
 
// const base = new Box();
// const derived = new DerivedBox();
// derived.sameAs(base);


// this-based type guards

// You can use this is Type in the return position for methods in classes and interfaces. When mixed with a type narrowing (e.g. if statements) the type of the target object would be narrowed to the specified Type.

// class FileSystemObject {
//   isFile(): this is FileRep {
//     return this instanceof FileRep;
//   }
//   isDirectory(): this is Directory {
//     return this instanceof Directory;
//   }
//   isNetworked(): this is Networked & this {
//     return this.networked;
//   }
//   constructor(public path: string, private networked: boolean) {}
// }
 
// class FileRep extends FileSystemObject {
//   constructor(path: string, public content: string) {
//     super(path, false);
//   }
// }
 
// class Directory extends FileSystemObject {
//   children: FileSystemObject[];
// }
 
// interface Networked {
//   host: string;
// }
 
// const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

// if (fso.isFile()) {
//   fso.content;
  
// const fso: FileRep
// } else if (fso.isDirectory()) {
//   fso.children;
  
// const fso: Directory
// } else if (fso.isNetworked()) {
//   fso.host;
  
// const fso: Networked & FileSystemObject
// }

// class MyClass {
//   name = "MyClass";
//   getName(this: MyClass) {
//     return this.name;
//   }
// }
// const c = new MyClass();
// // OK
// c.getName();
 
// // Error, would crash
// const g = c.getName;
// console.log(g());


// Arrow Functions

//     Background Reading:
//     Arrow functions (MDN)

// If you have a function that will often be called in a way that loses its this context, it can make sense to use an arrow function property instead of a method definition:

// class MyClass {
//   name = "MyClass";
//   getName (= () => ){
//     return this.name;
//   };
// }
// const c = new MyClass();
// const g = c.getName;
// // Prints "MyClass" instead of crashing
// console.log(g());

// Generic Classes

// Classes, much like interfaces, can be generic. When a generic class is instantiated with new, its type parameters are inferred the same way as in a function call:

// class Box<Type> {
//   contents: Type;
//   constructor(value: Type) {
//     this.contents = value;
//   }
// }
 
// const b = new Box("hello!");
     
// const b: Box<string>



// Type Parameters in Static Members

// This code isn’t legal, and it may not be obvious why:

// class Box<Type> {
//   static defaultValue: Type;
// Static members cannot reference class type parameters.

// }

// class MyClass {
//   name = "MyClass";
//   getName() {
//     return this.name;
//   }
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };
 
// // Prints "obj", not "MyClass"
// console.log(obj.getName());



// Static Members

//     Background Reading:
//     Static Members (MDN)

// Classes may have static members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:

// class MyClass {
//   static x = 0;
//   static printX() {
//     console.log(MyClass.x);
//   }
// }
// console.log(MyClass.x);
// MyClass.printX();

// Static members can also use the same public, protected, and private visibility modifiers:

// class MyClass {
//   private static x = 0;
// }
// console.log(MyClass.x);
// Property 'x' is private and only accessible within class 'MyClass'.

// Static members are also inherited:

// class Base {
//   static getGreeting() {
//     return "Hello world";
//   }
// }
// class Derived extends Base {
//   myGreeting = Derived.getGreeting();
// }

// Unnecessary "static" class
// class MyStaticClass {
//   static doSomething() {}
// }
 
// // Preferred (alternative 1)
// function doSomething() {}
 
// // Preferred (alternative 2)
// const MyHelperObject = {
//   dosomething() {},
// };

// class Foo {
//   static #count = 0;

//   get count() {
//       return Foo.#count;
//   }

//   static {
//       try {
//           const lastInstances = loadLastInstances();
//           Foo.#count += lastInstances.length;
//       }
//       catch {}
//   }
// }

// class Base {
//   private x = 0;
// }
// const b = new Base();
// // Can't access from outside the class
// console.log(b.x);
// Property 'x' is private and only accessible within class 'Base'.

// class Base {
//   protected x: number = 1;
// }
// class Derived1 extends Base {
//   protected x: number = 5;
// }
// class Derived2 extends Base {
//   f1(other: Derived2) {
//     other.x = 10;
//   }
//   f2(other: Derived1) {
//     other.x = 10;
// Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.

//   }
// }
// class Base {
//   protected m = 10;
// }
// class Derived extends Base {
//   // No modifier, so default is 'public'
//   m = 15;
// }
// const d = new Derived();
// console.log(d.m); // OK

// class Base {
//   name = "base";
//   constructor() {
//     console.log("My name is " + this.name);
//   }
// }
 
// class Derived extends Base {
//   name = "derived";
// }
 
// // Prints "base", not "derived"
// const d = new Derived();

// interface Animal {
//   dateOfBirth: any;
// }
 
// interface Dog extends Animal {
//   breed: any;
// }
 
// class AnimalHouse {
//   resident: Animal;
//   constructor(animal: Animal) {
//     this.resident = animal;
//   }
// }
 
// class DogHouse extends AnimalHouse {
//   // Does not emit JavaScript code,
//   // only ensures the types are correct
//   declare resident: Dog;
//   constructor(dog: Dog) {
//     super(dog);
//   }
// }

// class Base {
//   greet() {
//     console.log("Hello, world!");
//   }
// }
 
// class Derived extends Base {
//   // Make this parameter required
//   greet(name: string) {
//     console.log(`Hello, ${name.toUpperCase()}`);
//   }
//   // greet(name?: string) {
//   //   console.log(`Hello, ${name?.toUpperCase()}`);
//   // }
// }


// interface Pingable {
//     ping(): void;
//   }
   
//   class Sonar implements Pingable {
//     ping() {
//       console.log("ping!");
//     }
//   }

//   class Ball implements Pingable {
//     Class 'Ball' incorrectly implements interface 'Pingable'.
//       Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    
//       pong() {
//         console.log("pong!");
//       }
//     }

// interface Checkable {
//   check(name: string): boolean;
// }
 
// class NameChecker implements Checkable {
//   check(s) {
//     // Notice no error here
//     return s.toLowerCase() === "ok";
                 
//   }
// }

// interface A {
//     x: number;
//     y?: number;
//   }
//   class C implements A {
//     x = 0;
//   }
//   const c = new C();
//   c.y = 10;

// class Animal {
//   move() {
//     console.log("Moving along!");
//   }
// }
 
// class Dog extends Animal {
//   woof(times: number) {
//     for (let i = 0; i < times; i++) {
//       console.log("woof!");
//     }
//   }
// }
 
// const d = new Dog();
// // Base class method
// d.move();
// // Derived class method
// d.woof(3);


// class Base {
//   greet() {
//     console.log("Hello, world!");
//   }
// }
 
// class Derived extends Base {
//   greet(name?: string) {
//     if (name === undefined) {
//       super.greet();
//     } else {
//       console.log(`Hello, ${name.toUpperCase()}`);
//     }
//   }
// }
 
// const d = new Derived();
// d.greet();
// d.greet("reader");