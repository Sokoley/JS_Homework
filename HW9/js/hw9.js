function Book() {
	this._title;
}

Book.prototype.setTitle = function (title) {
	this._title = title;
};

Book.prototype.getTitle = function() {
	return this._title;
};



////////////////////////////////////////////////////////////////////////////

function Figura() {
	this._X;
	this._Y;
	this._square;
	this._perim;
}

Figura.prototype.setX = function(X) {
	this._X = X;
};

Figura.prototype.setY = function(Y) {
	this._Y = Y;
}

Figura.prototype.setPerim = function(a, b, c) {
	if (a) {
		this._perim = 3.14 * 2 * a;
	}
	if (a && b) {
		this._perim = 2*a + 2*b;
	}
	if (a && b && c) {
		if ((a > b+c) || (b > a+c) || (c > a + b)) {
			this._perim = "Такого треугольника не существует!";
		} else {
			this._perim = a+b+c;
		}
	}
};

Figura.prototype.setSquare = function(a, b, c) {
	if (a) {
		this._square = 3.14 * a * a;
	}
	if (a && b) {
		this._square = a*b;
	}
	if (a && b && c) {
		if ((a > b+c) || (b > a+c) || (c > a + b)) {
			this._square = "Такого треугольника не существует!";
		} else {
			p = (a+b+c)/2;
			this._square = Math.sqrt(p * (p-a) * (p-b) * (p-c));
		}
	}
};

Figura.prototype.getX = function() {
	return this._X;
};

Figura.prototype.getY = function() {
	return this._Y;
};

Figura.prototype.getSquare = function() {
	return this._square;
};

Figura.prototype.getPerim = function() {
	return this._perim;
};

////////////////////////////////////////////////////////////////////////////
class Cat {

	set name(name) {
		this._name = name;
	}

	set age(age) {
		this._age = age;
	}

	set weight(weight) {
		this._weight = weight;
	}

	set strength(strength) {
		this._strength = strength;
	}

	get age () {
		return this._age;
	}

	fight(anotherCat) {
		if (age > 1) {
			return "Наш победил"
		} else {
			return "Наш проиграл";
		}
	}
};

