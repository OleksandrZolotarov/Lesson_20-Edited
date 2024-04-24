"use strict"

// 1. Створіть змінну та присвойте їй ваше ім'я.

// let myName = 'Alex';
// console.log(myName)
const MY_NAME = 'Alex';
console.log(MY_NAME)


// 2. Створіть змінну та присвойте їй ваш вік.

// let myAge = 40;
const MY_AGE = 40;
console.log(MY_AGE)

// 3. Створіть рядок, який буде складатися зі значень двох попередніх змінних, також ці значення мають бути розділено дефісом, та збережіть його в змінну "userInfo".

// let someString = `Alex-40`
// console.log(typeof someString)
// console.log(someString)
// let userInfo = someString
// console.log(userInfo)
const userInfo = `${MY_NAME} - ${MY_AGE}`
console.log(userInfo)



// 4. Перевірте, чи рядок з 3 завдання містить символ "a" (англійська). Результат перевірки виведіть в консоль як рядок. Приклад 'змінна містить літеру "a"' або 'змінна не містить літеру "a"'

if (userInfo.includes('a')) { console.log('зміннa містить літеру "а"'); }
else { console.log('змінна не містить літеру"а"') }


// 5. Замініть всі символи "-" у рядку "userInfo" на пробіли.

let newUserInfo = userInfo.replace('-', ' ');
console.log(userInfo);


// 6. Створіть змінну і присвойте їй значення 6.001, потім округліть значення змінної в меншу сторону, більшу сторону, до ближнього цілого. результат запишіть в окремі змінні та виведіть результат в консоль.

const someNum = 6.001;
let someNewNum = Math.floor(someNum)
console.log(someNewNum)
// someNewNum = Math.ceil(someNum)
// console.log(someNewNum)



// 7. Створіть випадкове число від 0 до 100 та виведіть в консоль.

console.log(Math.random() * 100)




// 8. Створіть змінну password, присвойте значення як рядок цій змінній та перевірте, чи рядок "password" починається з символу "$" за допомогою методу пошуку. Результат виведіть в консоль.

const somePassword = '123456789';
console.log(typeof somePassword)
console.log(somePassword.startsWith('$'))


// 9. Виведіть в консоль довжину рядка "tweet" (короткий текстовий запис). Приклад "Довжина рядка "tweet" дорівнює - N символів" де N кількість символів в рядку.

// let string = 'tweet';
// console.log(string.length);
// if (string) { console.log('довжина рядка tweet" дорівнює - 5 символів') }

let string = 'tweeter';
let length = string.length;
console.log(length);

if (string) {
    console.log(`довжина рядка "${string}" дорівнює - ${length} символів`);
}


// 10. Створіть змінну "paragraph" та присвойте туди якийсь текст довжиною більше ніж 30 символів.Отримайте підрядок з рядка "paragraph" з 10 - го до 20 - го символу.

let paragraph = '123456789012345678901234567890.'
console.log(paragraph.length);
let newParagraph = paragraph.slice(0, 10);
console.log(newParagraph)

// 11. Дано змінну "counter" у якої значення дорівнє 20. Зменште значення змінної "counter" на 1. Результат виведіть в консоль.

let counter = 20
--counter
console.log(counter)



// 12. Дано змінну "price" у якої значення "400грн." як рядок. Перетворіть значення змінної у числове значення, та виведіть в консоль. В консолі не має бути значення NaN, має бути тільки число 400

let price = '400грн'
let num = parseInt(price)
console.log(num)


// 13. Дано змінну "inputValue" зі значенням тексту. Перевірте, чи рядок змінної "inputValue" закінчується на символ "!". Результат виведіть в консоль.

let inputValue = 'text'
console.log(inputValue.endsWith('!'))

// 14. Дано змінну з числом -25, змініть значення на протилежне і виведіть в консоль, має бути 25.

let number = -25
console.log(Math.abs(number))