// todo Введення користувача та розгалуження
/*
 * Напиши скрипт, який питатиме логін за допомогою prompt і логуватиме результат у консоль браузера.

* Якщо відвідувач вводить "Адмін", то prompt запитує пароль

* Якщо нічого не введено або натиснута клавіша Esc - вивести рядок "Скасовано"

* В іншому випадку вивести рядок "Я вас не знаю"
* Пароль перевіряти так:

* Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!!"
* Інакше виводити рядок "Невірний пароль"
*/

const userLogin = prompt('Введіть ваш логін');
let message;

if (userLogin === 'Адмін') {
  const userPassword = prompt('Введіть ваш пароль');

  message = userPassword === 'Я адмін' ? 'Вітаю !!!' : 'Невірний пароль';
} else if (userLogin === null) {
  message = 'Скасовано';
} else {
  message = 'Я вас не знаю';
}

alert(message);

// const login = prompt('Введіть login');

// switch (login) {
//   case 'Адмін':
//     const password = prompt('Введіть пароль');
//     password === 'Я адмін' ? alert('Вітаю!!') : alert('Невірний пароль');
//     break;
//   case null:
//     alert('Скасовано');
//     break;
//   default:
//     alert('Я вас не знаю');
// }
