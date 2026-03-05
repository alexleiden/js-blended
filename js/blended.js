'use strict';

// const wrapper = document.createElement('div');
// wrapper.classList.add('head');
// console.log(wrapper);

// const heading = document.createElement('h1');
// heading.classList.add('title');
// heading.textContent = 'This is a heading';
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement('img');
// image.src = 'https://picsum.photos/id/11/320/240';
// image.alt = 'Nature';
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// // Помещаем элементы внутрь wrapper
// wrapper.append(heading, image);

// // Добавляем wrapper в документ, например, в body
// document.body.append(wrapper);

// =========================================================

// =====================================================
// function canUserChat(isOnline, isBlocked) {
//   return isOnline && !isBlocked
//     ? 'Can type in chat !'
//     : 'Blocked from typing in chat !';
// }

// console.log(canUserChat(true, false)); // "Can type in chat!"
// console.log(canUserChat(true, true)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true));
// ========================================================
// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   return screenWidth <= sm
//     ? 'Mobile screen'
//     : screenWidth < md
//     ? 'Tablet screen'
//     : screenWidth <= lg
//     ? 'Desktop screen'
//     : 'Godzilla screen';
// }

// console.log(getScreenType(700)); // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320)); // "Mobile screen"
// =================================================================
// function checkGrade(grade) {
//   return grade >= 90
//     ? `perfectly`
//     : grade >= 80
//     ? `Good`
//     : grade >= 70
//     ? `Satisfactory`
//     : `Unsatisfactory`;
// }
// console.log(checkGrade(85));
// =========================================
// function calculateTotal(number) {
//   let total = 0;
//   // let count = 1;

//   // while (count <= number) {
//   //   total += count;
//   //   count += 1;
//   // }
//   // return total;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(0)); // 0
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300
// console.log(calculateTotal(10)); // 0
// ==================================================
// function getStatus(isOnline, isBusy, isAway) {
//   if (isOnline) return 'Online';
//   else if (isBusy) return 'Busy';
//   else if (isAway) return 'Away';
//   else return 'Offline';
// }
// console.log(getStatus(true, false, false)); // Online
// console.log(getStatus(false, true, false)); // Busy
// console.log(getStatus(false, false, true)); // Away
// console.log(getStatus(false, false, false)); // Offline
// ==================================================
// function getFileName(file) {
//   const dot = file.indexOf('.');
//   // return dot === -1 ? file : file.slice(0, dot);
//   if (dot === -1) return file;
//   else return file.slice(0, dot);
// }
// console.log(getFileName('styles.css')); // "styles"
// console.log(getFileName('app.js')); // "app"
// console.log(getFileName('app')); // "app"
// console.log(getFileName('index.js')); // "index"
// console.log(getFileName('index.html')); // "index"
// console.log(getFileName('index.css')); // "index"
// console.log(getFileName('index')); // "index"
// =========================================
// function getSlice(array, value) {
//   const index = array.indexOf(value);

//   if (index === -1) {
//     return [];
//   }
//   return array.slice(0, index + 1);
// }

// const getSlice = (array, value) => array.slice(0, array.indexOf(value) + 1);

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // ["Mango", "Poly"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // ["Mango", "Poly", "Ajax"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); // ["Mango"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); // []
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey')); // []
// ==============================================
// function getCommonElements(array1, array2) {
//   const commonElements = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }

// // Тесты

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
// console.log(getCommonElements([5, 7, 9], [9, 5, 1, 7])); // [5, 7, 9]
// ====================================
// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }
// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []
// console.log(getEvenNumbers(1, 1)); // [] (непарне число)
// console.log(getEvenNumbers(10, 15)); // [10, 12, 14]
// ===========================================
// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }
//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120
// ===========================================
// function createReversedArray() {
//   return Array.from(arguments).toReversed();
// }
// console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
// console.log(createReversedArray()); // []
// console.log(createReversedArray(42)); // [42]
// ===========================================
// function findShortestWord(string) {
//   const words = string.split(' ');
//   let shortestWord = words[0];

//   for (const word of words) {
//     if (word.length < shortestWord.length) {
//       shortestWord = word;
//     }
//   }
//   return shortestWord;
// }
// console.log(findShortestWord('The quick brown fox jumped over the lazy dog')); // "The"
// console.log(findShortestWord('Google do a roll')); // "a"
// console.log(findShortestWord('May the force be with you')); // "be"
// ===========================================
// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.length); // 3
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length); // 5
// const mixed = ['apple', 10, true];
// console.log(mixed.length); // 3
// mixed[1] = 20;
// console.log(mixed); // ['apple', 20, true]
// ===========================================
// function getExtremeElements(array) {
//   const firstEl = array[0];
//   const lastEl = array[array.length - 1];
//   return [firstEl, lastEl];
//   //   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); // ["Earth", "Venus"]
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); // ["apple", "banana"]
// ==============================================function getLength(array) {
// function getLength(array) {
//   // 1️⃣ Соединяем элементы массива в одну строку
//   const str = array.join(' ');

//   // 2️⃣ Считаем длину строки
//   const length = str.length;

//   // 3️⃣ Преобразуем строку обратно в массив символов
//   const backToArray = str.split(' ');

//   // 4️⃣ Возвращаем всё вместе (для наглядности)
//   return {
//     string: str,
//     length: length,
//     array: backToArray,
//   };
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));
// -------------------------------------------------------------
// function getCommonElements(array1, array2) {
//   const commonEl = [];
//   for (const num of array1) {
//     if (array2.includes(num)) {
//       commonEl.push(num);
//     }
//   }
//   return commonEl;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
// console.log(getCommonElements([5, 7, 9], [9, 5, 1, 7])); // [5, 7, 9]
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function calculateTotalPrice(order) {
  let total = 0;
  for (const price of order) {
    total += price;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
console.log(calculateTotalPrice([])); // 0
