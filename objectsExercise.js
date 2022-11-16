// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
//내가 푼 답
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
console.log(getProfit(cats));
console.log(getProfit(dune));
// $ node objectsExercise.js
// -21166652
// 235671789

//다른 풀이
// function getProfit(movie:Movie):number{
//   const {grossWorldwide, budget} = movie.boxOffice;
//   return grossWorldwide - budget
// }
// function getProfit({boxOffice : {grossWorldwide,budget}}:Movie):number{
//   return grossWorldwide - budget;
// }
