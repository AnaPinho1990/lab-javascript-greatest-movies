// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
  let allDirectors = array.map(function (movies) {
    return movies.director;
  });
  return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter((movie) => {
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const scoresAverage = (arr) => {
  if (arr.length === 0) return 0;
  let allScoresAvg = arr.reduce(function (acc, value) {
    if (!value.score) return acc;

    return acc + value.score;
  }, 0);
  return Number((allScoresAvg / arr.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter((movie) =>
    movie.genre.includes('Drama')
  );
  const avgDramaMoviesScore = scoresAverage(dramaMovies);
  return avgDramaMoviesScore;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let arrayNew = [];
  array.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) return 0;
  });

  return (arrayNew = [...array]);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titles = array.map(function (array) {
    return array.title;
  });
  titles.sort(function (a, b) {
    return a.localeCompare(b);
  });
  const top20 = titles.splice(0, 20);
  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes
    /* Environment setup. Do not modify the below code. */
  };
}
