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
// =====================================================
// function checkAge(age) {
//   let isAdult;

//   if (age >= 18) {
//     isAdult = true;
//   } else {
//     isAdult = false;
//   }

//   return isAdult;
// }

// console.log(checkAge(8)); // false
// console.log(checkAge(14)); // false
// console.log(checkAge(20)); // true
// console.log(checkAge(37)); // true
