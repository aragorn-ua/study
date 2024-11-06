"use strict";

const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(numberOfFilms);
console.log(personalMovieDB);

let num = 50;
// while (num<55) {console.log(num); num++;
// }
// do {
//     console.log(num); num++
// } while (num<55);
for (let i = 1; i<=8; i++){
    if (i%2) {
        // break;
        continue;
    }
    console.log(i);

}

for (let n = 0; n < 3; n++) {
    console.log(n);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************

let res = '';
const length = 7;
for (let i = 1; i <= length; i++) {
    for (let k = 0; k < length - i; k++) {
        res += ' ';
    }
   for (let j = 0; j < 2*i-1; j++) {
    res += '*';
   }
       res += '\n';

}
console.log(res);

first: for (let i = 0; i <3; i++) {
    console.log(`First level: i = ${i}`);
      for (let j = 0; j < 3; j++) {
            console.log(`Second level: j = ${j}`);
                for (let k = 0; k < 5; k++) {
                    if (k===4) break first;
                    console.log(`Third level: k = ${k}`);
       }
   }
}
