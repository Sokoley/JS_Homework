let kook = new Book();
kook.setTitle("Книжка");
console.log(kook.getTitle());
console.log("--------");

////////////////////////////////

let Triangle = new Figura();
let Circle = new Figura();
let Rectangle = new Figura();
Circle.setSquare(3);
Rectangle.setSquare(2, 3);
Triangle.setSquare(2, 3, 4);

Circle.setX(12);
Circle.setY(10);

Circle.setPerim(3);
Rectangle.setPerim(2, 3);
Triangle.setPerim(2, 3, 4);

console.log("Координаты центра окружности: ", Circle.getX(), ",", Circle.getY());
console.log(" ");
console.log("Площадь круга = ", Circle.getSquare());
console.log("Площадь прямоугольника = ", Rectangle.getSquare());
console.log("Площадь треугольника = ", Triangle.getSquare());
console.log(' ');
console.log("Длина окружности = ", Circle.getPerim());
console.log("Периметр прямоугольника = ", Rectangle.getPerim());
console.log("Периметр треугольника = ", Triangle.getPerim());
console.log("--------");

////////////////////////////////
let cat = new Cat();

cat.age(5);
console.log(fight(qwer));