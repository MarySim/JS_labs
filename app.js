// Лабораторная работа 2
// Функции и массивы
// Функции

console.log('Функции\n');

console.log('Задание 1\n');

// Функция вычисляет разность и выводит результат
function showDifference(a, b) {
	console.log(`Результат вычитания ${a} - ${b} = ${a - b}`);
}

// Функция только вычисляет разность и возвращает результат
function getDifference(a, b) {
	return a - b;
}

// Вызов функции с выводом внутри
showDifference(12, 5);

// Вызов функции с выводом в основной программе
let diff = getDifference(20, 8);
console.log(`20 - 8 = ${diff}`);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 2\n');

// Функция приветствия в зависимости от возраста
function ageGreeting(age) {
	if (age < 18) {
		console.log('Привет, малыш!');
	} else {
		console.log('Здравствуйте, юноша!');
	}
}

// Проверка для разных возрастов
ageGreeting(10);
ageGreeting(21);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 3\n');

// Функция находит максимальное из трех чисел
function findMax(a, b, c) {
	return Math.max(a, b, c);
}

// Вывод результата
console.log('Максимальное из 4, 9, 6:', findMax(4, 9, 6));

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 4\n');

// Глобальная переменная
let message = 'Глобальная переменная';

// Функция с локальной переменной
function showMessage() {
	let message = 'Локальная переменная';
	console.log(message);
}

// Вызов функции - выведет локальную переменную
showMessage();

// Вывод глобальной переменной - она не изменилась
console.log(message);

// Пояснение
console.log('Объяснение: внутри функции своя локальная переменная, она не влияет на глобальную.');

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 5\n');

// Функция для вычисления u по формуле
function calculateU(x, y, z) {
	// Вычисляем максимумы для числителя
	let max1 = Math.max(x, y);
	let max2 = Math.max(x + y, z);
	// Вычисляем максимум для знаменателя
	let max3 = Math.max(0.5, x + z);
	// Возвращаем результат по формуле
	return (max1 + max2) / (max3 * max3);
}

// Проверка функции для разных значений
console.log(`u для (2, 3, 4) = ${calculateU(2, 3, 4)}`);
console.log(`u для (1, 5, 2) = ${calculateU(1, 5, 2)}`);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 6\n');

// Функция вычисляет периметр многоугольника по координатам вершин
function calculatePerimeter(...coordinates) {
	// Проверка на четное количество координат
	if (coordinates.length % 2 !== 0) {
		throw new Error('Нужно четное количество координат (x1, y1, ..., xn, yn).');
	}

	// Определяем количество вершин
	const vertices = coordinates.length / 2;
	// Проверка на минимальное количество вершин
	if (vertices < 3) {
		throw new Error('Нужно минимум 3 вершины для многоугольника.');
	}

	let perimeter = 0;

	// Вычисляем длину каждой стороны и суммируем
	for (let i = 0; i < vertices; i++) {
		// Координаты текущей вершины
		const x1 = coordinates[i * 2];
		const y1 = coordinates[i * 2 + 1];
		// Индекс следующей вершины (замыкаем на первую)
		const nextIndex = (i + 1) % vertices;
		// Координаты следующей вершины
		const x2 = coordinates[nextIndex * 2];
		const y2 = coordinates[nextIndex * 2 + 1];

		// Вычисляем длину стороны и добавляем к периметру
		perimeter += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
	}

	return perimeter;
}

// Примеры вычисления периметров
console.log('Периметр прямоугольника (1,0, 1,1, 0,1, 0,0):', 
	calculatePerimeter(1, 0, 1, 1, 0, 1, 0, 0));
console.log('Периметр треугольника (0,0, 2,0, 0,3):', 
	calculatePerimeter(0, 0, 2, 0, 0, 3));

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 7\n');

// Рекурсивная функция для вычисления n-го члена последовательности
function getSequenceTerm(n) {
	// Проверка входных данных
	if (!Number.isInteger(n) || n < 1) {
		throw new Error('n должно быть целым числом и больше или равно 1.');
	}

	// Базовый случай: первый член равен 1
	if (n === 1) {
		return { value: 1, total: 1 };
	}

	// Рекурсивный вызов для предыдущего члена
	const previous = getSequenceTerm(n - 1);
	// Текущий член равен синусу суммы всех предыдущих
	const currentValue = Math.sin(previous.total);
	// Возвращаем значение и обновленную сумму
	return { value: currentValue, total: previous.total + currentValue };
}

// Функция для получения только значения n-го члена
function getNthTerm(n) {
	return getSequenceTerm(n).value;
}

// Вывод первых четырех членов последовательности
console.log('a₁ =', getNthTerm(1));
console.log('a₂ =', getNthTerm(2));
console.log('a₃ =', getNthTerm(3));
console.log('a₄ =', getNthTerm(4));

// Проверка соответствия условию
console.log('Проверка a₂:', getNthTerm(2).toFixed(5) === Math.sin(1).toFixed(5));

console.log('\n-------------------------------------------------------------------------\n');



// Массивы

console.log('Массивы\n');

console.log('Задание 1\n');

// Создание пустого массива
let firstArray = [];
// Присваивание значений трем элементам
firstArray[0] = 42;
firstArray[1] = 77;
firstArray[2] = 91;
// Вывод элемента с индексом 2
console.log(firstArray[2]);
// Вывод количества элементов
console.log(firstArray.length);
// Удаление второго элемента (индекс 1)
firstArray.splice(1, 1);
// Вывод всех элементов массива
for (let i = 0; i < firstArray.length; i++) {
	console.log(firstArray[i]);
}

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 2\n');

// Массив с названиями стран
let countryList = ['Германия', 'Франция', 'Италия', 'Испания'];
// Массив с населением соответствующих стран
let populationList = [83000000, 67000000, 60000000, 47000000];

// Функция для вывода с использованием цикла for с счетчиком
function displayWithFor(country, pop) {
	for (let i = 0; i < country.length; i++) {
		console.log(`${country[i]}: ${pop[i]}`);
	}
}

// Функция для вывода с использованием цикла for in
function displayWithForIn(country, pop) {
	for (let index in country) {
		console.log(`${country[index]}: ${pop[index]}`);
	}
}

// Вызов обеих функций
displayWithFor(countryList, populationList);
displayWithForIn(countryList, populationList);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 3\n');

// Исходный массив с названиями месяцев
let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
// Метод pop() удаляет последний элемент и возвращает его
let removedElement = monthArray.pop();
// Вывод результирующего массива через пробел
console.log(monthArray.join(' '));
// Вывод удаленного элемента
console.log(removedElement);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 4\n');

// Исходный массив
let numbers1 = [10, 20, 30, 40, 50, 60, 70];
// Метод slice(0, 3) возвращает первые 3 элемента
let firstThree = numbers1.slice(0, 3);
// Вывод результата
console.log(firstThree);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 5\n');

// Исходный массив
let numbers2 = [11, 22, 33, 44, 55, 66, 77];
// Метод splice(1, 3) удаляет 3 элемента начиная с индекса 1
let removedNumbers = numbers2.splice(1, 3);
// Вывод измененного массива
console.log(numbers2);
// Вывод удаленных элементов
console.log(removedNumbers);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 6\n');

// Исходный массив
let numbers3 = [2, 4, 6, 8, 10];
// Создаем копию массива и применяем reverse()
let reversedArray = [...numbers3].reverse();
// Вывод результата
console.log(reversedArray);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 7\n');

// Смешанный массив из чисел и букв
let mixedArray = ['d', 7, 3, 'c', 5, 2, 6, 'b', 1, 'a'];
// Сортировка: сначала числа по возрастанию, потом буквы по алфавиту
mixedArray.sort(function(a, b) {
	// Проверяем тип элементов
	let aIsNumber = typeof a === 'number';
	let bIsNumber = typeof b === 'number';

	// Если оба числа - сортируем по возрастанию
	if (aIsNumber && bIsNumber) {
		return a - b;
	}
	// Если a - число, а b - буква, число должно быть раньше
	if (aIsNumber && !bIsNumber) {
		return -1;
	}
	// Если a - буква, а b - число, буква должна быть позже
	if (!aIsNumber && bIsNumber) {
		return 1;
	}
	// Если оба не числа - сортируем как строки
	return String(a).localeCompare(String(b));
});
// Вывод результата
console.log(mixedArray);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 8\n');

// Исходный массив
let numbers4 = [3, 6, 9, 12, 15];
// Метод join объединяет элементы с указанным разделителем
console.log(numbers4.join('+'));

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 9\n');

// Первый массив чисел
let firstSet = [3, 7, 1, 9, 4];
// Второй массив чисел
let secondSet = [6, 2, 8, 5, 7];
// Объединяем массивы и сортируем по возрастанию
let combined = firstSet.concat(secondSet).sort((x, y) => x - y);
// Находим индекс среднего элемента
let middleIndex = Math.floor(combined.length / 2);
// Вычисляем медиану в зависимости от четности длины
let medianValue = combined.length % 2 === 0 
	? (combined[middleIndex - 1] + combined[middleIndex]) / 2 
	: combined[middleIndex];
// Вывод результатов
console.log('Объединенный массив:', combined);
console.log('Медиана:', medianValue);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 10\n');

// Создаем массив из 12 случайных чисел от -25 до 25
let randomArray = Array.from({ length: 12 }, () => Math.floor(Math.random() * 51) - 25);
console.log('Исходный массив:', randomArray);

// Находим минимальное и максимальное значения
let minValue = Math.min(...randomArray);
let maxValue = Math.max(...randomArray);
// Находим их индексы
let minPosition = randomArray.indexOf(minValue);
let maxPosition = randomArray.indexOf(maxValue);

// Меняем местами минимальный и максимальный элементы
[randomArray[minPosition], randomArray[maxPosition]] = [randomArray[maxPosition], randomArray[minPosition]];
console.log('После замены:', randomArray);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 11\n');

// Массив для проверки упорядоченности по убыванию
let testArray = [15, 12, 10, 8, 6, 4];
let isDescending = true;
let firstBadIndex = -1;

// Проверяем, упорядочен ли массив по убыванию
for (let i = 1; i < testArray.length; i++) {
	// Если текущий элемент больше предыдущего - порядок нарушен
	if (testArray[i] > testArray[i - 1]) {
		isDescending = false;
		firstBadIndex = i;
		break;
	}
}

// Если массив упорядочен по убыванию
if (isDescending) {
	let reversedArray = [];
	// Создаем массив в обратном порядке
	for (let i = testArray.length - 1; i >= 0; i--) {
		reversedArray.push(testArray[i]);
	}
	console.log('Массив в обратном порядке:', reversedArray);
} else {
	// Иначе выводим индекс первого нарушающего элемента
	console.log('Индекс первого нарушающего элемента:', firstBadIndex);
}

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 12\n');

// Исходный массив с положительными и отрицательными числами
let numbers5 = [7, -3, 9, -4, 12, -6, 15, -8, 18, -10, 21, -12];
console.log('Исходный массив:', numbers5);

// Преобразование элементов по условию
for (let i = 0; i < numbers5.length; i++) {
	// Положительные элементы с нечетными индексами умножаем на 3
	if (numbers5[i] > 0 && i % 2 === 1) {
		numbers5[i] = numbers5[i] * 3;
	} 
	// Отрицательные элементы с четными индексами делим на 5
	else if (numbers5[i] < 0 && i % 2 === 0) {
		numbers5[i] = numbers5[i] / 5;
	}
}
console.log('После преобразований:', numbers5);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 13\n');

// Создаем матрицу 5x5
let matrix5x5 = [
	[3, -7, 9, 2, 11],
	[8, -4, 1, 13, 4],
	[10, 5, -3, 7, -9],
	[6, 12, -5, 8, 3],
	[-2, 14, -8, 15, 16],
];

console.log('Элементы в интервале [-5; 7]:');
// Перебираем все строки матрицы
for (let row = 0; row < matrix5x5.length; row++) {
	// Перебираем все столбцы текущей строки
	for (let col = 0; col < matrix5x5[row].length; col++) {
		// Проверяем, принадлежит ли элемент интервалу [-5; 7]
		if (matrix5x5[row][col] >= -5 && matrix5x5[row][col] <= 7) {
			console.log(`matrix[${row}][${col}] = ${matrix5x5[row][col]}`);
		}
	}
}

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 14\n');

// Создаем матрицу размером M×N
let matrixMN = [
	[5, 2, 8, 3],
	[7, 4, 6, 9],
	[10, 1, 12, 11],
];

let sumOfRowMaxs = 0;
// Находим сумму наибольших элементов строк
for (let i = 0; i < matrixMN.length; i++) {
	// Находим максимум в текущей строке
	let rowMax = Math.max(...matrixMN[i]);
	sumOfRowMaxs += rowMax;
	console.log(`Максимум в строке ${i}: ${rowMax}`);
}

// Определяем количество столбцов
let numberOfColumns = matrixMN[0].length;
let productOfColMins = 1;
// Находим произведение наименьших элементов столбцов
for (let j = 0; j < numberOfColumns; j++) {
	// Инициализируем минимум первым элементом столбца
	let colMin = matrixMN[0][j];
	// Ищем минимум в текущем столбце
	for (let i = 1; i < matrixMN.length; i++) {
		if (matrixMN[i][j] < colMin) {
			colMin = matrixMN[i][j];
		}
	}
	// Умножаем на найденный минимум
	productOfColMins *= colMin;
	console.log(`Минимум в столбце ${j}: ${colMin}`);
}

// Вывод результатов
console.log('Сумма максимумов строк:', sumOfRowMaxs);
console.log('Произведение минимумов столбцов:', productOfColMins);

console.log('\n-------------------------------------------------------------------------\n');

console.log('Задание 15\n');

// Создаем ассоциативный массив (объект) с книгами по авторам
let authorBooks = {
	'Толстой': ['Война и мир', 'Анна Каренина', 'Детство'],
	'Достоевский': ['Преступление и наказание', 'Идиот', 'Братья Карамазовы'],
	'Булгаков': ['Мастер и Маргарита', 'Собачье сердце', 'Белая гвардия'],
};

console.log('Книги по авторам:');
// Перебираем всех авторов в объекте
for (let authorName in authorBooks) {
	console.log(`\n${authorName}:`);
	// Получаем массив книг текущего автора
	let bookList = authorBooks[authorName];
	// Выводим каждую книгу с новой строки
	for (let i = 0; i < bookList.length; i++) {
		console.log(`  - ${bookList[i]}`);
	}
}

console.log('\n-------------------------------------------------------------------------\n');
