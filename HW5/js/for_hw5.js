(function () {
    'use strict';
console.log("----------Задание 1---------");
	 let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

    function getGoods(object, from, to) {
        for (let propName in object) {
            for (let propName1 in object[propName]) {
                if (object[propName][propName1] >= from && object[propName][propName1] <= to) {
                    console.log(propName, ":", object[propName]);
                }
            }
        }
    }
    getGoods(goods, 2000, 3000);

console.log(" ");
console.log("----------Задание 2---------");
function addToCart(obj, title, countToCart) {
    for (let propName in obj) {
        
        if (obj[propName]['title'] === title){
            if (obj[propName]['count'] < countToCart) {
                console.log('На складе не хватает товара'); 
                return;
            } else {
                obj[propName]['count'] -= countToCart;
                console.log("Покупаемый товар:", obj[propName]['title']);
                console.log("Товара куплено:", countToCart);
                console.log("Товара осталось:", obj[propName]['count']);
            }
        }
    }
}

addToCart(goods, "Арфа", 4);


console.log(" ");
console.log("----------Задание 3---------");

let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];

    books.sort((x, y) => {
        if ( x.title < y.title ) return -1;
        if ( x.title < y.title ) return 1;
    });

    console.log(books);


console.log(" ");
console.log("----------Задание 4---------");

let day = {
        Понедельник:1,
        Вторник:2,
        Среда:3,
        Четверг:4,
        Пятница:5,
        Суббота:6,
        Воскресенье:7,
    };

    function Today(day){
        for (let propName in day){
            var d = new Date();
            var n = d.getDay();
            if(day[propName] === n){
                console.log('Сегодня '+ propName);
            }
        }
    }

    Today(day);



}());