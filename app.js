// Лабораторная работа 3
// Объекты и классы
// Функции-конструкторы и методы объектов

console.log('\n-------------------------------------------------------------------------\n');
console.log('Функции-конструкторы и методы объектов\n');
console.log('Задание 1\n');


let person = {};
person.name = 'Alice';
person.surname = 'Brown';
// Изменяем значение
person.name = 'Bob';
delete person.name;
console.log(person);

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 2\n');

// Объект с информацией о браузере
let myBrowser = {
	name: 'Microsoft Internet Explorer',
	version: '9.0'
};
// Перебор свойств циклом for in
for (let key in myBrowser) {
	console.log(`${key}: ${myBrowser[key]}`);
}

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 3\n');

function isEmpty(obj) {
	for (let key in obj) {
		return false; // если есть хотя бы одно свойство
	}
	return true; // если свойств нет
}
console.log(isEmpty({}));
console.log(isEmpty({ age: 25 }));

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 4\n');

// const защищает переменную, но не содержимое объекта
const testUser = {
	name: 'Mike'
};
testUser.name = 'Alex'; // Работает - меняем свойство
console.log(testUser);

console.log('const защищает от переназначения, но не от изменения свойств');

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 5\n');

// Функция умножает все числовые свойства на 2
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2;
		}
	}
}

let data = {
	price: 500,
	count: 15,
	title: 'Товар'
};
multiplyNumeric(data);
console.log(data);

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 6\n');

// Объект-калькулятор с методами
let calc = {
	num1: 0,
	num2: 0,
	read(x, y) {
		this.num1 = x;
		this.num2 = y;
	},
	sum() {
		return this.num1 + this.num2;
	},
	mul() {
		return this.num1 * this.num2;
	}
};
calc.read(5, 9);
console.log('Сумма:', calc.sum());
console.log('Произведение:', calc.mul());

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 7\n');

// Объект с поддержкой цепочки вызовов (каждый метод возвращает this)
let ladder = {
	steps: 0,
	up() {
		this.steps++;
		return this; // возвращаем объект для цепочки
	},
	down() {
		this.steps--;
		return this;
	},
	show() {
		console.log('Ступенька:', this.steps);
		return this;
	}
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 8\n');

// Функция-конструктор для браузера
function AppBrowser(name, version) {
	this.name = name;
	this.version = version;
	this.info = function() {
		console.log(`Браузер: ${this.name}, версия: ${this.version}`);
	};
}
let myApp = new AppBrowser('Microsoft Internet Explorer', '9.0');
myApp.info();

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 9\n');

// Функция-конструктор для сотрудника
function Worker(name, dept, phone, salary) {
	this.name = name;
	this.dept = dept;
	this.phone = phone;
	this.salary = salary;
	this.show = function() {
		console.log(`Имя: ${this.name}`);
		console.log(`Отдел: ${this.dept}`);
		console.log(`Телефон: ${this.phone}`);
		console.log(`Зарплата: ${this.salary}`);
	};
}
let worker1 = new Worker('Анна', 'Бухгалтерия', '8-965-458-89-12', 950500);
worker1.show();

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 10\n');

// Функция-конструктор калькулятора
function SimpleCalc() {
	this.a = 0;
	this.b = 0;
	this.read = function(a, b) {
		this.a = a;
		this.b = b;
	};
	this.sum = function() {
		return this.a + this.b;
	};
	this.mul = function() {
		return this.a * this.b;
	};
}
let myCalc = new SimpleCalc();
myCalc.read(7, 8);
console.log('7 + 8 =', myCalc.sum());
console.log('7 * 8 =', myCalc.mul());

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 11\n');

// Функция-конструктор аккумулятора
function Counter(start) {
	this.value = start; // текущее значение
	this.read = function(x) {
		this.value += x; // добавляем число
	};
}
let counter = new Counter(3);
counter.read(7);
counter.read(4);
console.log('Результат:', counter.value);

console.log('\n-------------------------------------------------------------------------\n');





// Работа с прототипами
console.log('\n-------------------------------------------------------------------------\n');
console.log('Работа с прототипами\n');
console.log('Задание 1\n');

// Создаем два объекта с прототипным наследованием
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

// Свойство jumps есть в самом объекте rabbit
// Теперь свойство берется из прототипа animal

console.log(rabbit.jumps); // true
delete rabbit.jumps;
console.log(rabbit.jumps); // null
delete animal.jumps;
console.log(rabbit.jumps); // undefined

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 2\n');

let animal2 = {
    eat() {
        this.full = true; // this указывает на объект перед точкой
    }
};
let rabbit2 = {
    __proto__: animal2
};
rabbit2.eat();

// Свойство full добавляется в rabbit2, а не в animal2
console.log('rabbit2.full:', rabbit2.full); // true
console.log('animal2.full:', animal2.full); // undefined
// Проверяем, что свойство принадлежит именно rabbit2
console.log('Свойство в rabbit2:', rabbit2.hasOwnProperty('full')); // true

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 3\n');

let hamsterBad = {
    stomach: [], // Один массив на всех
    eat(food) {
        this.stomach.push(food);
    }
};

let speedyBad = {
    __proto__: hamsterBad
};
let lazyBad = {
    __proto__: hamsterBad
};

speedyBad.eat('apple');
console.log('Проблема: speedy ->', speedyBad.stomach); // ['apple']
console.log('Проблема: lazy ->', lazyBad.stomach); // тоже ['apple']

// У каждого хомяка свой stomach
let hamster = {
    eat(food) {
        this.stomach.push(food); // this.stomach должен быть у каждого свой
    }
};

let speedy = {
    __proto__: hamster,
    stomach: [] // свой собственный массив
};
let lazy = {
    __proto__: hamster,
    stomach: [] // свой собственный массив
};

speedy.eat('apple');
console.log('Исправлено: speedy ->', speedy.stomach); // ['apple']
console.log('Исправлено: lazy ->', lazy.stomach); // []

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 4\n');

// Добавляем свойства и методы в прототип String
String.prototype.color = 'black';
String.prototype.size = '14px';
String.prototype.write = function() {
    console.log('Цвет текста: ' + this.color);
    console.log('Размер шрифта: ' + this.size);
    console.log('Текст: ' + this.toString());
};

// Создаем строку и меняем её свойства
let str1 = new String('Это первая строка');
str1.color = 'red';
str1.size = '18px';
str1.write();

// Вторая строка использует значения по умолчанию
let str2 = new String('Это вторая строка');
str2.write();

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 5\n');

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit3 = new Rabbit();
console.log('Изначально:', rabbit3.eats); // true

// Замена прототипа
let r1 = new Rabbit();
Rabbit.prototype = {};
console.log('Случай 1 (новый прототип):', r1.eats); // true - старый объект сохраняет ссылку на старый прототип

// Изменение свойства в прототипе
let r2 = new Rabbit();
Rabbit.prototype.eats = false;
console.log('Случай 2 (изменение свойства):', r2.eats); // false - прототип тот же, свойство изменилось

// Удаление свойства у объекта
let r3 = new Rabbit();
delete r3.eats;
console.log('Случай 3 (удаление у объекта):', r3.eats); // true - удалили только у объекта, в прототипе осталось

// Удаление свойства из прототипа
let r4 = new Rabbit();
delete Rabbit.prototype.eats;
console.log('Случай 4 (удаление из прототипа):', r4.eats); // undefined - свойство удалено из прототипа

console.log('\n-------------------------------------------------------------------------\n');
console.log('Объяснение:');
console.log('1. При замене прототипа (Rabbit.prototype = {}) старые объекты продолжают ссылаться на старый прототип');
console.log('2. Изменение свойства в прототипе влияет на все объекты');
console.log('3. delete работает только с собственными свойствами объекта');
console.log('4. Удаление свойства из прототипа делает его недоступным для всех наследующих объектов');





// Классы
console.log('\n-------------------------------------------------------------------------\n');
console.log('Классы\n');
console.log('Задание 1\n');

class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    
    display() {
        // Форматируем время с ведущими нулями
        let h = this.hours < 10 ? '0' + this.hours : this.hours;
        let m = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        let s = this.seconds < 10 ? '0' + this.seconds : this.seconds;
        console.log(`${h}:${m}:${s}`);
    }
}

let myClock = new Clock(14, 30, 45);
myClock.display();

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 2\n');

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        // В конструкторе наследника нужно сначала вызвать super()
        super(name); // передаем name в родительский конструктор
        this.created = Date.now(); // потом добавляем свои свойства
    }
}

let whiteRabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);
console.log('Создан:', new Date(whiteRabbit.created).toLocaleTimeString());

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 3\n');

class BaseClock {
    constructor(template) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

// Наследуемся и добавляем параметр precision
class AdvancedClock extends BaseClock {
    constructor(template, precision = 1000) {
        super(template); // вызываем конструктор родителя
        this.precision = precision; // добавляем свою настройку
    }
    
    // Переопределяем метод start с учетом precision
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

// Создаем часы с обновлением каждые 500 мс
let preciseClock = new AdvancedClock('h:m:s', 500);
console.log('Часы запущены (остановятся через 2 секунды):');
preciseClock.start();

// Останавливаем через 2 секунды
setTimeout(() => {
    preciseClock.stop();
    console.log('Часы остановлены');
}, 2000);

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 4\n');

class Warehouse {
    constructor() {
        this.nextId = 0; // следующий серийный номер
        this.items = new Map(); // хранилище коробок
    }
    
    // Добавить коробку на склад
    add(weight, volume) {
        let id = this.nextId++;
        this.items.set(id, { id, weight, volume });
        console.log(`Добавлена коробка #${id}: вес=${weight}, объем=${volume}`);
        return id;
    }
    
    // Найти коробку по минимальному весу
    findByWeight(minWeight) {
        return this.findBox('weight', minWeight);
    }
    
    // Найти коробку по минимальному объему
    findByVolume(minVolume) {
        return this.findBox('volume', minVolume);
    }
    
    // Общий метод поиска и удаления коробки
    findBox(property, minValue) {
        let bestBox = null;
        
        // Ищем подходящую коробку
        for (let box of this.items.values()) {
            if (box[property] >= minValue) {
                // Если еще не нашли или нашли лучше
                if (bestBox === null) {
                    bestBox = box;
                } else {
                    // Сравниваем по значению свойства и по времени (серийному номеру)
                    if (box[property] < bestBox[property]) {
                        bestBox = box; // меньшее значение лучше
                    } else if (box[property] === bestBox[property] && box.id > bestBox.id) {
                        bestBox = box; // если равны, берем более старую (меньше id)
                    }
                }
            }
        }
        
        // Если ничего не нашли
        if (bestBox === null) {
            console.log(`Коробка с ${property} >= ${minValue} не найдена`);
            return -1;
        }
        
        // Удаляем коробку со склада
        this.items.delete(bestBox.id);
        console.log(`Выдана коробка #${bestBox.id}: ${property}=${bestBox[property]}`);
        return bestBox.id;
    }
}

// Тестируем работу склада
let warehouse = new Warehouse();

// Добавляем коробки
console.log('\n--- Добавление коробок ---');
warehouse.add(10, 100); // #0
warehouse.add(8, 120);  // #1
warehouse.add(12, 90);  // #2
warehouse.add(10, 140); // #3
warehouse.add(15, 80);  // #4

console.log('\n--- Поиск по весу ---');
console.log('Ищем коробку с весом >= 9');
let box1 = warehouse.findByWeight(9); // должна быть #1 (вес 8? нет, 8<9, значит #0 вес 10)
console.log('Найдена:', box1);

console.log('\n--- Поиск по объему ---');
console.log('Ищем коробку с объемом >= 100');
let box2 = warehouse.findByVolume(100); // должна быть #3 (объем 140)
console.log('Найдена:', box2);

console.log('\n--- Поиск несуществующей коробки ---');
console.log('Ищем коробку с весом >= 20');
let box3 = warehouse.findByWeight(20); // -1
console.log('Результат:', box3);

console.log('\n--- Остаток на складе ---');
console.log('Осталось коробок:', warehouse.items.size);

console.log('\n-------------------------------------------------------------------------\n');