// When you don’t want to repeat yourself, sometimes a type needs to be based on another type.

// Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:
interface Horse {

}

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

// tipo map js por las keys y las iteraciones