//Задание 1
console.log("ЗАДАНИЕ 1",)

let numberVar = 42;
let stringVar = "Hello, world!";
let booleanVar = true;
let undefinedVar = undefined;
let nullVar = null;
let objectVar = { name: "Alice", age: 25 };
let arrayVar = [1, 2, 3];
let functionVar = function() { return "I am a function"; };

console.log("Тип переменной numberVar: " + typeof(numberVar));
console.log("Тип переменной stringVar: " + typeof(stringVar));
console.log("Тип переменной booleanVar: " + typeof(booleanVar));
console.log("Тип переменной undefinedVar: " + typeof(undefinedVar));
console.log("Тип переменной nullVar: " + typeof(nullVar));
console.log("Тип переменной objectVar: " + typeof(objectVar));
console.log("Тип переменной arrayVar: " + typeof(arrayVar));
console.log("Тип переменной functionVar: " + typeof(functionVar));

console.log("\n" + "=".repeat(50) + "\n");

//Задание 2
console.log("ЗАДАНИЕ 2",)

console.log("\n" + "=".repeat(50) + "\n");

//ЗАДАНИЕ 3
console.log("ЗАДАНИЕ 3",)

let a = false;// Переменной a присваиваем значение false
let b = null; // Переменной b присваиваем значение null
let c;// Переменная c принимает значение undefined (не присваиваем явно)

console.log("Значение переменной a: " + a);// Отображаем значения 3-х переменных последовательно в консоли
console.log("Значение переменной b: " + b);
console.log("Значение переменной c: " + c);

console.log("\n" + "=".repeat(50) + "\n");

//Задание 4
console.log("ЗАДАНИЕ 4",)

// 1. "1" + 2 + 3
let result1 = "1" + 2 + 3;
console.log(`1. "1" + 2 + 3 = "${result1}" (тип: ${typeof result1})`);

// 2. 1 + 2 + "3"
let result2 = 1 + 2 + "3";
console.log(`2. 1 + 2 + "3" = "${result2}" (тип: ${typeof result2})`);

// 3. "1" - 2
let result3 = "1" - 2;
console.log(`3. "1" - 2 = ${result3} (тип: ${typeof result3})`);

// 4. "1" + -2
let result4 = "1" + -2;
console.log(`4. "1" + -2 = "${result4}" (тип: ${typeof result4})`);

// 5. "1" + "1" - "1"
let result5 = "1" + "1" - "1";
console.log(`5. "1" + "1" - "1" = ${result5} (тип: ${typeof result5})`);

// 6. "foo" + - "bar"
let result6 = "foo" + - "bar";
console.log(`6. "foo" + - "bar" = "${result6}" (тип: ${typeof result6})`);

// 7. 0 == "0"
let result7 = 0 == "0";
console.log(`7. 0 == "0" = ${result7} (тип: ${typeof result7})`);

// 8. 0.5 + 0.1 == 0.6
let result8 = 0.5 + 0.1 == 0.6;
console.log(`8. 0.5 + 0.1 == 0.6 = ${result8}`);

// 9. 0.1 + 0.2 == 0.3
let result9 = 0.1 + 0.2 == 0.3;
let sum9 = 0.1 + 0.2;
console.log(`9. 0.1 + 0.2 == 0.3 = ${result9}`);

// 10. true + true + true == 3
let result10 = true + true + true == 3;
let sum10 = true + true + true;
console.log(`10. true + true + true == 3 = ${result10}`);

// 11. true == 1
let result11 = true == 1;
console.log(`11. true == 1 = ${result11}`);

// 12. 1 < 2 < 3
let result12 = 1 < 2 < 3;
console.log(`12. 1 < 2 < 3 = ${result12}`);

// 13. 3 > 2 > 1
let result13 = 3 > 2 > 1;
console.log(`13. 3 > 2 > 1 = ${result13}`);

// 14. 9007199254740991 + 1 == 9007199254740991 + 2
let bigNum = 9007199254740991;
let result14 = bigNum + 1 == bigNum + 2;
console.log(`14. 9007199254740991 + 1 == 9007199254740991 + 2 = ${result14}`);

// 15. Math.sqrt(-1) == Math.sqrt(-1)
let sqrtResult = Math.sqrt(-1);
let result15 = sqrtResult == sqrtResult;
console.log(`15. Math.sqrt(-1) == Math.sqrt(-1) = ${result15}`);

console.log("\n" + "─".repeat(50));

//Задание 5
console.log("ЗАДАНИЕ 5",)

// Создаем 4 переменные с использованием ключевого слова let
let str1;     // объявляем переменную str1
let str2;     // объявляем переменную str2
let str3;     // объявляем переменную str3
let concatenation; // объявляем переменную concatenation

// Присваиваем значения переменным
str1 = 'Кто ';      // Присваиваем фразу 'Кто ' с пробелом
str2 = 'ты ';       // Присваиваем фразу 'ты ' с пробелом
str3 = 'такой?';    // Присваиваем фразу 'такой?'

// Выводим значения отдельных переменных (для наглядности)
console.log("Значения отдельных переменных:");
console.log(`str1 = "${str1}" (тип: ${typeof str1})`);
console.log(`str2 = "${str2}" (тип: ${typeof str2})`);
console.log(`str3 = "${str3}" (тип: ${typeof str3})`);


// Выполняем конкатенацию 3-х строк
concatenation = str1 + str2 + str3;

// Выводим результат конкатенации в консоль
console.log("Результат конкатенации трех строк:");
console.log("concatenation =", concatenation);


// Дополнительные примеры конкатенации
console.log("\nДополнительные примеры конкатенации строк:");

// Пример 1: Конкатенация с пробелами
let greeting = "Привет" + " " + "мир!";
console.log(`1. "Привет" + " " + "мир!" = "${greeting}"`);

// Пример 2: Конкатенация строк и чисел
let age = 25;
let message = "Мне " + age + " лет";
console.log(`2. "Мне " + age + " лет" = "${message}"`);

// Пример 3: Использование шаблонных строк (ES6)
let name = "Алексей";
let templateString = `Имя: ${name}, возраст: ${age}`;
console.log(`3. Шаблонная строка: "${templateString}"`);

// Пример 4: Конкатенация с методом concat()
let part1 = "JavaScript ";
let part2 = "это ";
let part3 = "интересно!";
let concatResult = part1.concat(part2, part3);
console.log(`4. Метод concat(): "${concatResult}"`);

console.log("ВЫВОДЫ:");
console.log("1. Конкатенация - это операция соединения строк");
console.log("2. В JavaScript для конкатенации используется оператор +");
console.log("3. При конкатенации строк и чисел, числа автоматически преобразуются в строки");
console.log("4. Можно использовать метод concat() для соединения строк");
console.log("5. Шаблонные строки (${}) предоставляют более удобный способ вставки переменных");

console.log("\n" + "─".repeat(50));

// ЗАДАНИЕ 6 
console.log("ЗАДАНИЕ 6");


console.log("\n" + "─".repeat(50));

// ЗАДАНИЕ 7
console.log("ЗАДАНИЕ 7");

// Даны две переменные со строковыми значениями
let x = "12";
let y = "7.15";

console.log("Исходные переменные:");
console.log(`a = "${x}" (тип: ${typeof x})`);
console.log(`b = "${y}" (тип: ${typeof y})`);


// 1. Преобразование строк в числа
// Используем разные функции преобразования типов
let numA = Number(x);        // преобразование через Number()
let numB = parseFloat(y);    // преобразование через parseFloat()

console.log("После преобразования в числа:");
console.log(`numA = ${numA} (тип: ${typeof numA}) — преобразовано через Number()`);
console.log(`numB = ${numB} (тип: ${typeof numB}) — преобразовано через parseFloat()`);


// 2. Находим остаток от деления
let remainder = numA % numB;
console.log(`Остаток от деления (без округления): ${numA} % ${numB} = ${remainder}`);

// 3. Округляем результат с помощью Math.round()
let roundedRemainder = Math.round(remainder);
console.log(`Результат после Math.round(): ${roundedRemainder}`);


console.log(`ИТОГОВЫЙ РЕЗУЛЬТАТ: ${roundedRemainder} (тип: ${typeof roundedRemainder})`);

console.log("ПОШАГОВОЕ ОБЪЯСНЕНИЕ:");

console.log("\n1. Преобразование типов:");
console.log("   • x = '12' → Number('12') = 12");
console.log("   • y = '7.15' → parseFloat('7.15') = 7.15");

console.log("\n2. Операция остатка от деления:");
console.log("   • 12 % 7.15 = ?");
console.log("   • 7.15 * 1 = 7.15 (помещается 1 раз)");
console.log("   • 12 - 7.15 = 4.85 (остаток)");
console.log(`   • Результат: ${remainder}`);

console.log("\n3. Округление:");
console.log(`   • Math.round(${remainder}) = ${roundedRemainder}`);
console.log("   • Math.round() округляет до ближайшего целого числа");

console.log("АЛЬТЕРНАТИВНЫЕ СПОСОБЫ ПРЕОБРАЗОВАНИЯ:");

// Другие способы преобразования строк в числа
let altNumA1 = parseInt(x);           // parseInt() — целое число
let altNumA2 = +x;                   // унарный плюс
let altNumA3 = Number(x);            // Number()
let altNumB1 = parseFloat(y);        // parseFloat() — число с плавающей точкой
let altNumB2 = +y;                  // унарный плюс
let altNumB3 = Number(y);           // Number()

console.log("\nПреобразование строки '12':");
console.log(`   parseInt("12"): ${altNumA1} (${typeof altNumA1})`);
console.log(`   +"12": ${altNumA2} (${typeof altNumA2})`);
console.log(`   Number("12"): ${altNumA3} (${typeof altNumA3})`);

console.log("\nПреобразование строки '7.15':");
console.log(`   parseFloat("7.15"): ${altNumB1} (${typeof altNumB1})`);
console.log(`   +"7.15": ${altNumB2} (${typeof altNumB2})`);
console.log(`   Number("7.15"): ${altNumB3} (${typeof altNumB3})`);

console.log("ПРОВЕРКА РАЗНЫХ МЕТОДОВ ОКРУГЛЕНИЯ:");

let testRemainder = 4.85;
console.log(`\nОстаток от деления: ${testRemainder}`);

console.log(`Math.round(${testRemainder})   = ${Math.round(testRemainder)}   (стандартное округление)`);
console.log(`Math.floor(${testRemainder})   = ${Math.floor(testRemainder)}   (округление вниз)`);
console.log(`Math.ceil(${testRemainder})    = ${Math.ceil(testRemainder)}    (округление вверх)`);
console.log(`Math.trunc(${testRemainder})   = ${Math.trunc(testRemainder)}   (отбрасывание дробной части)`);

console.log("Почему получилось 5?");
console.log("1. 12 % 7.15 = 4.85 (фактический остаток)");
console.log("2. Math.round(4.85) = 5 (так как 4.85 ближе к 5, чем к 4)");
console.log("3. Результат: 5 ");

console.log("\n" + "─".repeat(50));

// ЗАДАНИЕ 8
console.log("ЗАДАНИЕ 8",);

// Задаем значение переменной x1
let x1 = 5.5; // вещественное число

// Вычисляем числитель и знаменатель
let numerator = x1 * x1 - 7 * x1 + 10;
let denominator = x1 * x1 - 8 * x1 + 12;

// Проверяем деление на ноль
if (denominator === 0) {
    console.log(`При x1 = ${x1} выражение не определено (деление на ноль)`);
} else {
    // Вычисляем и выводим результат
    let result = numerator / denominator;
    console.log(`При x1 = ${x1}: (${x1}² - 7·${x1} + 10) / (${x1}² - 8·${x1} + 12) = ${result}`);
    console.log(`Результат с округлением до 3 знаков: ${result.toFixed(3)}`);
}

console.log("\n" + "─".repeat(50));

// ЗАДАНИЕ 9
console.log("ЗАДАНИЕ 9");

// Функция для проверки email
function checkEmail(email) {
    console.log(`Проверка адреса: "${email}"`);
    
    // Проверяем, содержит ли строка символ '@'
    if (email.includes('@')) {
        console.log(" Адрес электронной почты корректен (содержит символ @)");
    } else {
        console.log(" ПРЕДУПРЕЖДЕНИЕ: Адрес электронной почты не содержит символ '@'!");
        console.log("  Пожалуйста, введите корректный email адрес.");
    }
}

// Тестирование на разных примерах
console.log("ПРОВЕРКА АДРЕСОВ ЭЛЕКТРОННОЙ ПОЧТЫ:\n");

// Пример 1: Корректный email
checkEmail("user@example.com");

// Пример 2: Email без @
checkEmail("userexample.com");

// Пример 3: Email с несколькими @
checkEmail("user@name@example.com");

// Пример 4: Пустая строка
checkEmail("");

// Пример 5: Только символ @
checkEmail("@");

console.log("ДОПОЛНИТЕЛЬНАЯ ВАЛИДАЦИЯ (расширенная версия):\n");

// Расширенная функция проверки email
function validateEmail(email) {
    console.log(`Проверка: "${email}"`);
    
    // Проверка 1: наличие @
    const hasAtSymbol = email.includes('@');
    
    if (!hasAtSymbol) {
        console.log(" ОШИБКА: Отсутствует символ '@'");
        return false;
    }
    
    // Проверка 2: @ не в начале и не в конце
    const atIndex = email.indexOf('@');
    if (atIndex === 0) {
        console.log(" ОШИБКА: Символ '@' не может быть в начале адреса");
        return false;
    }
    if (atIndex === email.length - 1) {
        console.log(" ОШИБКА: Символ '@' не может быть в конце адреса");
        return false;
    }
    
    // Проверка 3: есть символы до и после @
    const localPart = email.substring(0, atIndex);
    const domainPart = email.substring(atIndex + 1);
    
    if (localPart.length === 0) {
        console.log(" ОШИБКА: Отсутствует локальная часть (до @)");
        return false;
    }
    
    if (domainPart.length === 0) {
        console.log(" ОШИБКА: Отсутствует доменная часть (после @)");
        return false;
    }
    
    // Проверка 4: домен содержит точку
    if (!domainPart.includes('.')) {
        console.log(" ПРЕДУПРЕЖДЕНИЕ: Домен не содержит точку (возможно, некорректный)");
    }
    
    console.log(" Email прошел базовую проверку");
    return true;
}

// Тестирование расширенной валидации
const testEmails = [
    "user@example.com",
    "userexample.com",
    "@example.com",
    "user@",
    "user@domain",
    "user@.com",
    "user.name@sub.domain.co.uk"
];

testEmails.forEach(email => {
    validateEmail(email);
});

console.log("ПРОСТОЙ ИНТЕРАКТИВНЫЙ ПРИМЕР:\n");

// Простой пример с переменной
let userEmail = "student.university.edu"; // Специально без @

console.log("Проверяем email пользователя...");
if (userEmail.indexOf('@') === -1) {
    console.log(` ПРЕДУПРЕЖДЕНИЕ: Email "${userEmail}" не содержит символ '@'!`);
    console.log("  Некорректный формат электронной почты.");
} else {
    console.log(` Email "${userEmail}" содержит символ '@'. Формат корректен.`);
}

console.log("СПОСОБЫ ПРОВЕРКИ НАЛИЧИЯ @ В СТРОКЕ:\n");

let testString = "user@example.com";

console.log(`Строка для проверки: "${testString}"`);
console.log("1. includes():     ", testString.includes('@'));
console.log("2. indexOf() != -1:", testString.indexOf('@') !== -1);
console.log("3. search():       ", testString.search('@') !== -1);
console.log("4. match():        ", testString.match('@') !== null);
console.log("5. Регулярное выражение:", /@/.test(testString));

console.log("\n" + "─".repeat(50));