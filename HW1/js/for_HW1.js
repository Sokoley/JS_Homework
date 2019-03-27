let height = parseFloat(prompt("Введите высоту параллелепипеда"));
console.log("Высота:", height);
let width = parseFloat(prompt("Введите ширину параллелепипеда"));
console.log("Ширина:", width);
let length = parseFloat(prompt("Введите длину параллелепипеда"));
console.log("Длина:", length);
let volume;
let square;
volume = height * width * length;
square = 2 * (height * width + width * length + height * length); 
res = (height >= width) ? [(height === width) ? console.log("Высота равна ширине") : console.log("Высота больше ширины")] : console.log("Высота меньше ширины");
console.log("Объём параллелепипеда V равен:", volume);
console.log("Площадь поверхности параллелепипеда S равна:", square);
console.log('-----------');

let uchastok = 1000;
let shirinaG = 15;
let dlinaG = 25;
let ostalos;
ostalos = uchastok % (shirinaG * dlinaG);
console.log("Участок:", uchastok);
console.log("Грядки:", shirinaG, "X", dlinaG);
console.log("Осталось незанято:", ostalos);
console.log('-----------');

let oval = 15;
let oval2 = 600;
let kolco;
kolco = oval * 100 - oval2;
console.log("Площадь овала:", oval, "дм2");
console.log("Площадь вырезанного овала:", oval2, "см2");
console.log("Площадь полученного кольца:", kolco, "см2");
console.log('-----------');

let X = 20;
let Y = 10;
console.log("Значение X:", X);
console.log("Значение Y:", Y);
if (X>=Y) {
	console.log("Новое значение X:", Y);
	console.log("Новое значение Y:", X);
} else {
	console.log("Значения X и Y не изменились");
}
console.log('-----------');

let m = 8.5;
let n = 11.45;
let chislo = 10;
let raznostSm;
let raznostSn;
console.log("Значение m:", m);
console.log("Значение n:", n);
console.log("Число:", chislo);
raznostSn = Math.abs(chislo - n);
raznostSm = Math.abs(chislo - m);
if (raznostSm < raznostSn) {
	console.log("Ближайшее значение к числу", chislo, ": m =", m);
} else {
	console.log("Ближайшее значение к числу", chislo, ": n =", n);
}
