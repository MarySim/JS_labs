// Задание 1

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 1\n');
let promise = new Promise(function(resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);

// Задание 2

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 2\n');
// 1. Модифицированные функции, которые теперь возвращают Promise
function readConfig(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`(1) config from ${name} loaded`);
            resolve(); // Сигнализируем об успешном выполнении промиса
        }, Math.floor(Math.random() * 1000));
    });
}

function doQuery(statement) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`(2) SQL query executed: ${statement}`);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function httpGet(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`(3) Page retrieved: ${url}`);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function readFile(path) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`(4) Readme file from ${path} loaded`);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// 2. Вызов функций в строгой последовательности с помощью цепочки .then()
console.log('start');

readConfig('myConfig')
    .then(() => {
        // Возвращаем следующий промис, чтобы продолжить цепочку
        return doQuery('select * from cities');
    })
    .then(() => {
        return httpGet('http://google.com');
    })
    .then(() => {
        return readFile('README.md');
    })
    .then(() => {
        console.log('It is done!');
        console.log('end');
    })
    .catch((error) => {
        console.error('Произошла ошибка в цепочке:', error);
    });

// Задание 3

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 3\n');
// Иммитируем асинхронные математические функции fi(x), возвращающие Promise
const f1 = (x) => new Promise(res => setTimeout(() => res(x * x), 200));  
const f2 = (x) => new Promise(res => setTimeout(() => res(2 * x), 200));  
const f3 = (x) => new Promise(res => setTimeout(() => res(-2), 200));   
const f4 = (x) => new Promise(res => setTimeout(() => res(x), 200));     
const f5 = (x) => new Promise(res => setTimeout(() => res(5), 200));  
const f6 = (x) => new Promise(res => setTimeout(() => res(-x), 200));    
// Универсальная функция для последовательного вычисления F(x) с помощью цепочки Promise
function calculateF(x, functionsArray) {

    let currentPromise = Promise.resolve(0);

    functionsArray.forEach((f, index) => {
        // Наслаиваем цепочку .then()
        currentPromise = currentPromise.then((intermediateResult) => {
            // Вызываем текущую асинхронную функцию
            return f(x).then((value) => {
                let newResult = intermediateResult + value;
                console.log(`  f${index + 1} дает значение ${value}, промежуточный результат ${newResult}`);
                return newResult; // передаем обновленный результат на следующую итерацию
            });
        });
    });

    return currentPromise;
}

const xValue = 3;

console.log(`--- Тест А: n = 2 ---`);
calculateF(xValue, [f1, f2])
    .then(finalAnswer => {
        console.log(`Итоговый ответ для F(x) при n=2: ${finalAnswer}\n`);
        
        console.log(`--- Тест B: n = 4 ---`);
        return calculateF(xValue, [f1, f2, f3, f4]);
    })
    .then(finalAnswer => {
        console.log(`Итоговый ответ для F(x) при n=4: ${finalAnswer}\n`);
        
        console.log(`--- Тест C: n = 6 ---`);
        return calculateF(xValue, [f1, f2, f3, f4, f5, f6]);
    })
    .then(finalAnswer => {
        console.log(`Итоговый ответ для F(x) при n=6: ${finalAnswer}\n`);
    });

// Задание 4

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 4\n');
function addNumbersPromise(a, b) {
    return new Promise((resolve, reject) => {
        // Проверка типов аргументов на Number
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            return reject(new Error("Отклонено: Оба аргумента должны быть числами"));
        }

        let currentSum = a;
        let iteration = 0;
        
        console.log(`--- Старт Promise: база=${a}, слагаемое=${b} ---`);

        // Запускаем интервал каждые 2 секунды
        const intervalId = setInterval(() => {
            iteration++;
            currentSum += b;
            
            // Вывод суммы и итерации в консол
            console.log(`[Promise] Итерация ${iteration}: сумма = ${currentSum}`);

            if (iteration === 5) {
                clearInterval(intervalId);
                resolve(currentSum);
            }
        }, 2000);
    });
}

// Демонстрация успешного выполнения
addNumbersPromise(10, 5)
    .then(result => console.log(`[Promise] Итог: ${result}`))
    .catch(error => console.error(error.message));

// Демонстрация вызова ошибки
addNumbersPromise(10, 'пять')
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

// Задание 5

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 5\n');
// Вспомогательная функция задержки
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function addNumbersAsync(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error("Отклонено: Оба аргумента должны быть числами");
    }

    let currentSum = a;
    console.log(`--- Старт async/await: база=${a}, слагаемое=${b} ---`);

    for (let i = 1; i <= 5; i++) {
        await sleep(2000); // приостанавливаем выполнение цикла на 2 сек
        currentSum += b;
        console.log(`[Async] Итерация ${i}: сумма = ${currentSum}`);
    }

    return currentSum; // В async функциях return автоматически оборачивается в resolve()
}

async function demoAsync() {
    try {
        const result = await addNumbersAsync(20, 10);
        console.log(`[Async] Итог: ${result}`);
    } catch (error) {
        console.error(error.message);
    }

    try {
        await addNumbersAsync(20, null);
    } catch (error) {
        console.error(error.message);
    }
}

demoAsync();

// Задание 6

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 6\n');
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // Вызываем wait(), который возвращает Promise, и используем метод .then(), чтобы получить результат
  wait().then(result => {
      console.log(result); // Выведет 10 через 1 секунду
  });
}

f();

// Задание 7

console.log('\n-------------------------------------------------------------------------\n');
console.log('Задание 7\n');
const delay = (timeUnits) => new Promise(resolve => setTimeout(resolve, timeUnits * 100));

async function processCandidate(candidateData) {
    // Деструктурируем массив для удобства
    const [name, prep1, def1, prep2, def2] = candidateData;

    // ЗАДАНИЕ 1
    console.log('\n-------------------------------------------------------------------------\n');
    console.log('Первое\n');
    console.log(`${name} started the 1 task.`);
    await delay(prep1); // подготовка 1
    
    console.log(`${name} moved on to the defense of the 1 task.`);
    await delay(def1); // защита 1
    
    console.log(`${name} completed the 1 task.`);

    // ОТДЫХ
    console.log('\n-------------------------------------------------------------------------\n');
    console.log('Отдых\n');
    console.log(`${name} is resting.`);
    await delay(5); // фиксированный отдых 5 единиц времени

    // ЗАДАНИЕ 2
    console.log('\n-------------------------------------------------------------------------\n');
    console.log('Второе\n');
    // Второе задание начинается строго после отдыха
    console.log(`${name} started the 2 task.`);
    await delay(prep2);
    
    console.log(`${name} moved on to the defense of the 2 task.`);
    await delay(def2);
    
    console.log(`${name} completed the 2 task.`);
}

async function interviews(candidates) {
    // Запускаем обработку каждого кандидата параллельно
    // map создаст массив промисов, которые начнут выполняться одновременно
    const interviewPromises = candidates.map(candidate => processCandidate(candidate));

    await Promise.all(interviewPromises);
}

const candidates = [
    ['Ivan', 5, 2, 7, 2], 
    ['John', 3, 4, 5, 1], 
    ['Sophia', 4, 2, 5, 1]
];

interviews(candidates);