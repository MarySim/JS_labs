// Задание 1

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 1\n');
// а) Вычисление sin(x)
function calculateSin() {
    let input = prompt("Введите значение x (в радианах):"); [cite, 40]
    let x = parseFloat(input);
    
    if (isNaN(x)) {
        alert("Ошибка: введено не число!");
    } else {
        alert(`Синус ${x} равен: ` + Math.sin(x)); [cite, 40]
    }
}

// б) Проверка попадания точки в квадрат
function isPointInSquare() {
    alert("Задайте квадрат противоположными вершинами (x1, y1) и (x2, y2):"); [cite, 41]
    let x1 = parseFloat(prompt("x1:"));
    let y1 = parseFloat(prompt("y1:"));
    let x2 = parseFloat(prompt("x2:"));
    let y2 = parseFloat(prompt("y2:"));
    
    let px = parseFloat(prompt("Введите x искомой точки:")); [cite, 42]
    let py = parseFloat(prompt("Введите y искомой точки:")); [cite, 42]
    
    // Находим границы квадрата, так как вершины могут быть введены в любом порядке
    let minX = Math.min(x1, x2);
    let maxX = Math.max(x1, x2);
    let minY = Math.min(y1, y2);
    let maxY = Math.max(y1, y2);
    
    if (px >= minX && px <= maxX && py >= minY && py <= maxY) {
        alert("Точка принадлежит квадрату"); [cite, 42]
    } else {
        alert("Точка НЕ принадлежит квадрату"); [cite, 42]
    }
}

// б) Проверка попадания точки в квадрат
function isPointInSquare() {
    alert("Задайте квадрат противоположными вершинами (x1, y1) и (x2, y2):"); [cite, 41]
    let x1 = parseFloat(prompt("x1:"));
    let y1 = parseFloat(prompt("y1:"));
    let x2 = parseFloat(prompt("x2:"));
    let y2 = parseFloat(prompt("y2:"));
    
    let px = parseFloat(prompt("Введите x искомой точки:")); [cite, 42]
    let py = parseFloat(prompt("Введите y искомой точки:")); [cite, 42]
    
    // Находим границы квадрата, так как вершины могут быть введены в любом порядке
    let minX = Math.min(x1, x2);
    let maxX = Math.max(x1, x2);
    let minY = Math.min(y1, y2);
    let maxY = Math.max(y1, y2);
    
    if (px >= minX && px <= maxX && py >= minY && py <= maxY) {
        alert("Точка принадлежит квадрату"); [cite, 42]
    } else {
        alert("Точка НЕ принадлежит квадрату"); [cite, 42]
    }
}

// в) Представление числа в виде суммы двух квадратов
function sumOfTwoSquares() {
    let num = parseInt(prompt("Введите натуральное число:")); [cite, 43]
    let found = false;
    let resultStr = "";

    // Оптимальный перебор до квадратного корня из num
    for (let a = 1; a * a < num; a++) {
        let b2 = num - a * a;
        let b = Math.sqrt(b2);
        if (Number.isInteger(b) && b >= 1) {
            resultStr = `${num} = ${a}^2 + ${b}^2`;
            found = true;
            break; // Нашли первую пару — выходим
        }
    }

    if (found) {
        alert(`Можно представить: ${resultStr}`); [cite, 43]
    } else {
        alert("Нельзя представить в виде суммы двух квадратов натуральных чисел"); [cite, 43]
    }
}

// г) Валидация Email
function checkEmail() {
    let email = prompt("Введите ваш email:"); [cite, 44]
    if (!email.includes('@')) {
        alert("Предупреждение: адрес электронной почты должен содержать символ '@'!"); [cite, 44]
    } else {
        alert("Email введен корректно.");
    }
}

// д) Доля латинских букв в строке 
function latinPercentage() {
    let str = prompt("Введите строку:"); [cite, 45]
    if (!str) return alert("Строка пуста");

    // Ищем все латинские буквы (регистронезависимо)
    let matches = str.match(/[a-z]/gi);
    let count = matches ? matches.length : 0;
    let percentage = (count / str.length) * 100;

    alert(`Доля латинских букв: ${percentage.toFixed(2)}%`); [cite, 45]
}

// е) Удаление дубликатов слов
function removeDuplicateWords() {
    let str = prompt("Введите строку из слов:"); [cite, 46]
    // Разделяем строку по одному или нескольким пробелам
    let words = str.trim().split(/\s+/); [cite, 46]
    
    // Используем Set для сохранения только уникальных элементов
    let uniqueWords = [...new Set(words)];
    
    alert("Результат: " + uniqueWords.join(" ")); [cite, 47]
}

// ж) Вывод массива задом наперед по 5 элементов
function processArray() {
    let n = parseInt(prompt("Введите размер массива n:")); [cite, 48]
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100)); // Случайные числа от 0 до 99
    }
    
    console.log("Исходный массив:", arr);
    
    // Переворачиваем массив
    let reversed = arr.reverse();
    console.log("Вывод в обратном порядке по 5 чисел:"); [cite, 48]
    
    for (let i = 0; i < reversed.length; i += 5) {
        // Берем срез по 5 элементов
        let chunk = reversed.slice(i, i + 5);
        console.log(chunk.join(" ")); [cite, 48]
    }
}

// з) Матрица и обнуление диагоналей
function processMatrix() {
    let n = parseInt(prompt("Введите порядок матрицы n:")); [cite, 49]
    let matrix = [];
    
    // Заполнение случайными числами
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.floor(Math.random() * 90) + 10; // Двузначные числа
        }
    }
    console.log("Исходная матрица:", JSON.parse(JSON.stringify(matrix)));

    let diagElements = [];
    
    // Собираем координаты и значения элементов на диагоналях
    for (let i = 0; i < n; i++) {
        // Главная диагональ: i === j
        diagElements.push({ r: i, c: i, val: matrix[i][i] });
        // Побочная диагональ: j === n - 1 - i
        if (i !== n - 1 - i) { // Избегаем дублирования центрального элемента в нечетных матрицах
            diagElements.push({ r: i, c: n - 1 - i, val: matrix[i][n - 1 - i] });
        }
    }

    // Находим глобальный максимум и минимум среди диагональных элементов
    let values = diagElements.map(el => el.val);
    let maxVal = Math.max(...values);
    let minVal = Math.min(...values);

    // Заменяем нулями все элементы диагоналей, кроме max и min
    for (let el of diagElements) {
        if (el.val !== maxVal && el.val !== minVal) {
            matrix[el.r][el.c] = 0; [cite, 50]
        }
    }

    console.log("Матрица после обработки:", matrix);
}

// и) Прибавление дней к текущей дате
function addDays() {
    let d = parseInt(prompt("Введите количество дней для добавления:")); [cite, 51]
    let date = new Date();
    
    // Прибавляем дни к текущему дню месяца
    date.setDate(date.getDate() + d); [cite, 51]
    
    alert("Новая дата: " + date.toLocaleDateString("ru-RU")); [cite, 51]
}

// ј) Сколько месяцев осталось до 1 сентября
function monthsToSeptember() {
    let now = new Date();
    let currentMonth = now.getMonth(); // 0 - Январь, 11 - Декабрь
    let targetMonth = 8; // Сентябрь имеет индекс 8
    
    let diff = targetMonth - currentMonth;
    
    if (diff < 0) {
        // Если сентябрь в этом году уже прошел, считаем до сентября следующего года
        diff += 12;
    }
    
    alert(`До 1 сентября осталось месяцев: ${diff}`); [cite, 52]
}

// Задание 3

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 3\n');
let divElement = document.querySelector('div');

let ulElement = document.querySelector('ul');

let peteElement = document.querySelectorAll('li')[1]; 

let peteAlt = document.querySelector('ul').lastElementChild;

// Задание 4

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 4\n');
let table = document.getElementById('age-table'); 

let labels = table.querySelectorAll('label');

let firstTd = table.querySelector('td');

let searchForm = document.querySelector('form[name="search"]');

let firstInput = searchForm.querySelector('input');

let inputs = searchForm.querySelectorAll('input');
let lastInput = inputs[inputs.length - 1];

// Задание 5

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 5\n');
function colorEvenCells() {
    let cells = document.querySelectorAll('table td');
    
    cells.forEach(cell => {
        // Извлекаем текст вида "1:2" и разносим в переменные
        let [i, j] = cell.textContent.split(':').map(Number);
        
        // Проверяем сумму на четность
        if ((i + j) % 2 === 0) {
            cell.style.backgroundColor = 'red'; [cite, 60]
        }
    });
}

colorEvenCells();

// Задание 6

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 6\n');
function styleExternalLinks() {
    let links = document.querySelectorAll('a');
    
    links.forEach(link => {
        let href = link.getAttribute('href');
        
        // Проверяем условия: href существует, содержит '://' и НЕ начинается с указанного адреса
        if (href && href.includes('://') && !href.startsWith('http://internal.com')) { [cite, 61, 62]
            link.style.color = 'orange'; [cite, 60, 63]
        }
    });
}

styleExternalLinks();

// Задание 7

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 7\n');
function clear(elem) {
    elem.innerHTML = '';
}

// clear(document.getElementById('list'));

// Задание 9

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 9\n');
const firstNames = ["Иван", "Алексей", "Сергей", "Михаил", "Дмитрий", "Петр"]; [cite, 74]
const lastNames = ["Иванов", "Петров", "Сидоров", "Смирнов", "Кузнецов", "Попов"]; [cite, 74]

function getRandomName() {
    let randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    let randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirst} ${randomLast}`; [cite, 74]
}

function startCardGeneration() {
    let container = document.querySelector('.container') || document.body;
    let cardCount = 0;

    let intervalId = setInterval(() => { [cite, 71]
        cardCount++;

        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.src = `https://thispersondoesnotexist.com/?${cardCount}`; [cite, 73]
        img.alt = 'User Photo';

        let nameTitle = document.createElement('h3');
        nameTitle.textContent = getRandomName();

        // Собираем карточку воедино
        card.appendChild(img);
        card.appendChild(nameTitle);

        // Добавляем готовую карточку на страницу
        container.appendChild(card);

        console.log(`Карточка №${cardCount} успешно добавлена.`);

        if (cardCount === 6) { [cite, 70]
            clearInterval(intervalId); // Деактивируем таймер 
            console.log("Генерация карточек завершена.");
        }
    }, 2000);
}

startCardGeneration();