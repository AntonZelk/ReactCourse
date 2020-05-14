const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");

const strong = /функци./g;
const strong1 = "<strong>функция</strong>";
const time = /[0-9]{2,4}/g;
const arr = task2.innerHTML.match(time);
const time2 = `<b></b>`;

task1.innerHTML = task1.innerHTML.replace(strong, strong1);
// task2.innerHTML = task2.innerHTML.replace(time, () => {
//   arr.forEach((el) => {
//     el = `<b>${el}</b>`;
//   });
//   return el;
// });
