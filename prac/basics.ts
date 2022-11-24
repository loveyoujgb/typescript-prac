var pi: number = 3.15239;
console.log("hello");
console.log(Math.round(7.3252356325));
let movieTitle: string = "Amadeus";

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;


// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "hello";

// the any type
let thing: any = "hello";
thing = 1;
thing = false;
thing()

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"]
let foundMovie; //any type으로 추론한다.

for(let movie of movies){
    if(movie === "Amadeus"){
        foundMovie = "Amadeus"
    }
}
