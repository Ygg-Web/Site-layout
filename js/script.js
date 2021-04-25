"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//console.log(numberOfFilms);
const lastWatchMovies = prompt("Один из последних просмотренный фильмов?", ''),
    rating = prompt("На сколько оцените его?", '');

/*const obj1 = {
    lastWatchMovies,
    rating
};

const obj2 = {
};

const arr1 = [];*/

const personalMovieDB = {
    count: numberOfFilms,
    movies: /*obj1*/ {},
    actors: /*obj2*/ {},
    genres: /*arr1*/ [],
    privat: false
};

personalMovieDB.movies[lastWatchMovies] = rating;


console.log(personalMovieDB);
console.log(personalMovieDB.movies);