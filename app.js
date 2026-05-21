// Лабораторная работа 4
// Асинхронность

console.log('\n-------------------------------------------------------------------------\n');
console.log('Асинхронность\n');
console.log('Задание 1\n');

// 1. Функция проверки пароля с коллбэками
function ask_password(login, password, success, failure) {
    // Приводим к нижнему регистру
    login = login.toLowerCase();
    password = password.toLowerCase();
    
    // Гласные буквы (a,e,i,o,u,y)
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    // Подсчет гласных в пароле
    let vowelCount = 0;
    for (let i = 0; i < password.length; i++) {
        if (vowels.includes(password[i])) {
            vowelCount++;
        }
    }
    
    // Извлекаем согласные из логина
    let loginConsonants = '';
    for (let i = 0; i < login.length; i++) {
        if (!vowels.includes(login[i])) {
            loginConsonants += login[i];
        }
    }
    
    // Извлекаем согласные из пароля
    let passwordConsonants = '';
    for (let i = 0; i < password.length; i++) {
        if (!vowels.includes(password[i])) {
            passwordConsonants += password[i];
        }
    }
    
    // Проверка условий
    let wrongVowels = (vowelCount !== 3);
    let wrongConsonants = (loginConsonants !== passwordConsonants);
    
    // Вызов соответствующих коллбэков
    if (!wrongVowels && !wrongConsonants) {
        success(login);
    } else if (wrongVowels && wrongConsonants) {
        failure(login, "Everything is wrong");
    } else if (wrongVowels) {
        failure(login, "Wrong number of vowels");
    } else {
        failure(login, "Wrong consonants");
    }
}

// Функция main
function main(login, password) {
    ask_password(login, password,
        function(login) {
            console.log(`Привет, ${login}!`);
        },
        function(login, error) {
            console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${error.toUpperCase()}.`);
        }
    );
}

// Тестирование задания 1
console.log('Тест 1: правильный пароль "aaalgn" для логина "login"');
main("login", "aaalgn");

console.log('\nТест 2: правильный пароль "luagon" для логина "login"');
main("login", "luagon");

console.log('\nТест 3: неправильный пароль (неверное число гласных)');
main("login", "aaaaaa");

console.log('\nТест 4: неправильный пароль (неверные согласные)');
main("login", "logiin");

console.log('\nТест 5: всё неправильно');
main("login", "bbbbbb");

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 2\n');

// Исходные асинхронные функции (не изменяем)
function readConfig(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function doQuery(statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function httpGet(url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function readFile(path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function finalCallback() {
    console.log('It is done!');
}

console.log('\nРешение через коллбэки (callback)\n');

// Вызов через коллбэки (последовательный)
console.log('start');
readConfig('myConfig', function() {
    doQuery('select * from cities', function() {
        httpGet('http://google.com', function() {
            readFile('README.md', function() {
                finalCallback();
                console.log('end');
            });
        });
    });
});

// Небольшая задержка, чтобы разделить вывод
setTimeout(() => {
    console.log('\nРешение через функции-уведомители (notification)\n');
    
    // Вызов через функции-уведомители (последовательный)
    console.log('start');
    
    let step = 0;
    
    function next() {
        step++;
        switch(step) {
            case 1:
                readConfig('myConfig', next);
                break;
            case 2:
                doQuery('select * from cities', next);
                break;
            case 3:
                httpGet('http://google.com', next);
                break;
            case 4:
                readFile('README.md', next);
                break;
            case 5:
                finalCallback();
                console.log('end');
                break;
            default:
                break;
        }
    }
    
    next();
}, 5000);

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 3\n');

// Асинхронные функции fi(x)
function f1(x, callback) {
    setTimeout(() => {
        let result = x * x;
        console.log(`f1(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 500));
}

function f2(x, callback) {
    setTimeout(() => {
        let result = 2 * x;
        console.log(`f2(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 500));
}

function f3(x, callback) {
    setTimeout(() => {
        let result = -2;
        console.log(`f3(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 500));
}

function f4(x, callback) {
    setTimeout(() => {
        let result = x + 5;
        console.log(`f4(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 500));
}

function f5(x, callback) {
    setTimeout(() => {
        let result = x / 2;
        console.log(`f5(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 500));
}

function f6(x, callback) {
    setTimeout(() => {
        let result = 3 * x - 1;
        console.log(`f6(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 500));
}

// Основная функция для последовательного вычисления через функции-уведомители
function computeF(x, functions, index, currentSum, callback) {
    if (index >= functions.length) {
        callback(currentSum);
        return;
    }
    
    functions[index](x, function(value) {
        let newSum = currentSum + value;
        console.log(`Промежуточный результат после f${index+1}: ${newSum}`);
        computeF(x, functions, index + 1, newSum, callback);
    });
}

// Функция для запуска вычислений
function calculateF(x, n) {
    let functions = [f1, f2, f3, f4, f5, f6];
    let selectedFuncs = functions.slice(0, n);
    
    console.log(`\n========== Вычисление F(${x}) для n = ${n} ==========`);
    
    // Выводим формулу
    let formula = '';
    for (let i = 0; i < n; i++) {
        if (i > 0) formula += ' + ';
        switch(i) {
            case 0: formula += 'x²'; break;
            case 1: formula += '2x'; break;
            case 2: formula += '-2'; break;
            case 3: formula += 'x+5'; break;
            case 4: formula += 'x/2'; break;
            case 5: formula += '3x-1'; break;
        }
    }
    console.log(`Формула: F(x) = ${formula}`);
    console.log('Вычисление:');
    
    computeF(x, selectedFuncs, 0, 0, function(result) {
        console.log(`========== ИТОГ: F(${x}) = ${result} ==========`);
    });
}

// Задержка между тестами для наглядности
setTimeout(() => {
    calculateF(3, 2);
}, 10000);

setTimeout(() => {
    calculateF(5, 4);
}, 13000);

setTimeout(() => {
    calculateF(2, 6);
}, 16000);

console.log('\n-------------------------------------------------------------------------\n');
console.log('Пояснения к заданию 3:');
console.log('f1(x) = x²');
console.log('f2(x) = 2x');
console.log('f3(x) = -2');
console.log('f4(x) = x+5');
console.log('f5(x) = x/2');
console.log('f6(x) = 3x-1');
console.log('\nПрограмма вычисляет значение функции F(x) = f1(x) + f2(x) + ... + fn(x)');
console.log('Функции выполняются последовательно, промежуточный результат передаётся дальше');

console.log('\n-------------------------------------------------------------------------\n');