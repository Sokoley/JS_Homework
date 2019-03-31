let arr = [];
let	l = prompt("Введите количество элементов массива для первого задания")
for ( i = 0; i < l; i++ ) {
    arr.push( Math.round( Math.random() * 10 ));
}
console.log(arr);

for (var i = 0; i <= l ; i++)
{
	for (var j = l - 1 ; j >= i ; j--){

		if (arr[i] + arr[j] === 7) {

			console.log("Сумма чисел " + arr[i] + " и " + arr[j] + " равна 7");
			break;
		}
	}

}

 //---------------------------------------
 console.log('---------------------------');

 for (var i = 1; i < 100; i++){
 	if (i % 3 == 0 && i % 5 != 0) {
 		console.log("Three");
 	} else if (i % 3 != 0  && i % 5 == 0) 
 		{
 			console.log("Five");
 		} else if (i % 3 == 0 && i % 5 == 0) {
 				console.log("ThreeFive");
 			} else {
 				console.log(i);
 			}
 }

  //---------------------------------------
 console.log('---------------------------');

let a=10, b=16, c=15;
if ((a>0 && b>0 && c>0) && (((a+c)>b) || ((a+b)>c) || ((c+b)>a)))
{
	 if (a==b && b==c && c==a){
	 	console.log("Треугольник равносторонний")}
	 if ((c>a) && (c>b)){
	 a=Math.pow(a,2)+Math.pow(b,2);
      c=Math.pow(c,2)
      if (a<c) console.log("Треугольник тупоугольный")
      	else if (a>c) console.log("Треугольник остроугольный")
      	else console.log("Треугольник прямоугольный")
}
	 if ((a>c) && (a>b)){
	 c=Math.pow(c,2)+Math.pow(b,2)
     a=Math.pow(a,2)
     if (a>c) console.log("Треугольник тупоугольный")
     	else if (a<c) console.log("Треугольник остроугольный")
     	else console.log("Треугольник прямоугольный")
}
	 if ((b>a) && (b>c)){
	 c=Math.pow(a,2)+Math.pow(c,2)
     b=Math.pow(b,2)
     if (c<b) console.log("Треугольник тупоугольный")
     	else if (c>b) console.log("Треугольник остроугольный")
     	else console.log("Треугольник прямоугольный")
}
} else {console.log("Треугольник не существует");}


  //---------------------------------------
 console.log('---------------------------');


let arr1 = [];
let	len = prompt("Введите количество элементов массива для четвёртого задания");

for ( i = 0; i < len; i++ ) {
    arr1.push( Math.round( Math.random() * 10 ));
}
console.log(arr1);

for (var i = arr1.length - 1; i >= 0; i--) {
	console.log(arr1[i]);
}

  //---------------------------------------
 console.log('---------------------------');
 let s = 10;
 let t = 10;

for (var i = 1; i <= t; i++) {
	if (t==0) break;
	s-=0.5;
	t-=1;
}
console.log("Средства осталось " + s);
console.log("Тарелок осталось "+ t);
  //---------------------------------------
 console.log('---------------------------');

