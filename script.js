// task 1

let js = 'js';
console.log(js.toUpperCase());

// task 2

let arr = ['Лодка', 'Парус', 'Белка', 'Кофе', 'Лошадь',]
let str = 'ло'

arr.forEach((el) => {
    if (el.toLowerCase().includes(str.toLowerCase())) {
        console.log(el);
    }
});

// task 3

let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.round(number));
console.log(Math.ceil(number));

// task 4


console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// task 5

function random(min, max) {
   
    console.log(Math.random()*(max - min) + min);    
}
random(0, 10);


// task 6

function getRandomNumbers (num) {
    
    const arr2 = Array.from({length: num / 2}, () => Math.round(Math.random() * (num - 0)) + 0);
    console.log(arr2); 
}

getRandomNumbers (21);


// task 7

function randomNumber(x , y) {
    console.log(Math.round(Math.random()*((Math.round(y) - Math.round(x)) + Math.round(x)))); 
}

randomNumber(2, 10);


// task 8

let today = new Date ();
console.log(today);

// task 9

let currentDate = new Date();
console.log(+currentDate);

let days73 = 73 * 24 * 60 * 60 * 1000;
let myDate = +currentDate + days73;
let daysLater73 = new Date(myDate);
console.log(daysLater73);

// task 10

let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

let todayDay = new Date();
let noticeDay = "Дата: " + todayDay.getDate() + " " + months[todayDay.getMonth()] + " " + todayDay.getFullYear() + " - это " + days[todayDay.getDay()-1]  + "\n" +  
"Время: " + todayDay.getHours() + ":" + todayDay.getMinutes() + ":" + todayDay.getSeconds()

console.log(noticeDay);




