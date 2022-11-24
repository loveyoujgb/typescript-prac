var pi = 3.15239;
console.log("hello");
console.log(Math.round(7.3252356325));
var movieTitle = "Amadeus";
var numCatLives = 9;
numCatLives += 1;
var gameOver = false;
gameOver = true;
// Type Inference
var tvShow = "Olive Kitteridge";
tvShow = "hello";
// the any type
var thing = "hello";
thing = 1;
thing = false;
thing();
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
var foundMovie; //any type으로 추론한다.
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
