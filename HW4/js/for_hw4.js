(function () {
	'use strict';

console.log("--------Задание 1---------");
let str = prompt("Введите строку");
let Search = prompt("Введите подстроку для замены");
let New = prompt("Введите подстроку, которую хотите вставить");
console.log("Исходная строка: ", str);
console.log("Подтрока для замены: ", Search);
console.log("Новая подстрока: ", New);

function zamena(str,POISK,NOVAYA) {
	let index = str.indexOf(POISK);
	let l = POISK.length;
    return str.substring(0,index) + NOVAYA + str.substring(index + l);
}

console.log("Полученная строка: ", zamena(str, Search, New));

console.log(" ");
console.log("--------Задание 2---------");

var regex = /[\d\+]+/g;
var string = "дом 48, корпус 9, парадная 7, этаж 4";
console.log("Исходная строка: ", string);
var matches = string.match(regex);
console.log(matches);

console.log(" ");
console.log("--------Задание 3---------");

var stroka = "Торонто Cмоленск Санкт-Петербург";
var reg = /[а-яА-Я]/u;
var sovp = stroka.match(reg);
sovp.sort();
console.log(sovp);

} ())