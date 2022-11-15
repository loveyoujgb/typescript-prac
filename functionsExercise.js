/* --------------------------------- PART 1 --------------------------------- */
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
//내가 푼 답
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me");
}
//실제 답
// function twoFer(person: string = "you"): string {
//   return `One for ${person}, one for me.`;
// }
console.log(twoFer());
console.log(twoFer("Elton"));
/* --------------------------------- PART 2 --------------------------------- */
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
//내가 푼 답
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    return false;
}
//실제 답
// const isLeapYear = (year: number): boolean => {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; //--->둘중 하나라도 true면 true를 반환한다! 둘다 true여도 true반환
// };
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));

// $ node functionsExercise.js
// one for you, one for me
// one for Elton, one for me
// true
// false