// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
const highScore: number | boolean = false;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together) ->혼합되면 안된다는 문제
let stuff: number[] | string[] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
let level: SkillLevel = "Beginner";
level = "Advanced";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
  name: string;
  age: number;
  sports: "ski" | "snowboard";
  level: SkillLevel;
};
let skiSchoolStudent = { name: "Tom", age: 15, sports: "ski", level: "Expert" };
skiSchoolStudent = { name: "Tom", age: 15, sports: "snowboard", level: "Advanced" };

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

// Create an array called colors that can hold a mixture of RGB and HSL color types
type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

let colors: (RGB | HSL)[] = [];
colors = [{ h: 324, s: 235, l: 4634 }];
colors = [{ r: 324, g: 235, b: 4634 }];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greeting(name: string | string[]): void {
  let answer = "";
  if (typeof name === "string") {
    console.log(`Hello, ${name}`);
  } else {
    // for(answer of name ){
    //   console.log(`Hello, ${answer}`)
    // } -> 이렇게 풀어도 풀리기는 하겠지만, 깔끔하게 let n으로 해서 for문을 돌리자.
    for (let n of name) {
      console.log(`Hello, ${n}`);
    }
  }
}
