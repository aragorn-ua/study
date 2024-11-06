"use strict";

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
for (let i = 0; i <= length; i++) {
    for (let k = 0; k < length - i; k++) {
        res += ' ';
    }
   for (let j = 0; j < 2*i+1; j++) {
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

/*********************** */

// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    let i = 5;
    while (i<=10) {
         console.log (i);
         i++;
    }
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
for (let i = 20; i >= 10; i--) {

    if (i===13) break;
    console.log (i);
}

}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 1; i <= 10; i++) {
        if (i%2==0) console.log(i);
       }

}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i < 16){
        i++;
            if (i % 2 === 0) {
                continue;
            } else {
                console.log(i);
            }
        }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 0, j = 5; j <= 10; i++, j++) {
        arrayOfNumbers[i] = j;
    }

    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}

/*********************** */

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    for (i=0;i<arr.length;i++)
    {
        result[i]=arr[i];
    }
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (i=0;i<data.length;i++)
    {
        if (typeof data[i] === "number") {
            data[i]=data[i]*2
        } else if (typeof data[i] === "string") {
            data[i]=data[i]+" - done";
        }
    }
    console.log(data);
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        result[i] = data[data.length-1-i];
    }
    // Не трогаем
    return result;
}