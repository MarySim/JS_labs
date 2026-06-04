// Задание 2

const urls = [
    'https://catfact.ninja/fact',
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    'https://official-joke-api.appspot.com/random_joke',
    'https://api.agify.io/?name=ivan',
    'https://api.genderize.io/?name=ivan'
];


// СТАДИЯ A: Чистый XmlHttpRequest (Callback Hell)
function runStageA() {
    console.log("=== Стадия А: Запуск цепочки на чистом XHR ===");
    
    let xhr1 = new XMLHttpRequest();
    xhr1.open('GET', urls[0]);
    xhr1.onload = function() {
        console.log("XHR 1 Готово:", JSON.parse(xhr1.responseText));
        
        let xhr2 = new XMLHttpRequest();
        xhr2.open('GET', urls[1]);
        xhr2.onload = function() {
            console.log("XHR 2 Готово:", JSON.parse(xhr2.responseText));
            
            let xhr3 = new XMLHttpRequest();
            xhr3.open('GET', urls[2]);
            xhr3.onload = function() {
                console.log("XHR 3 Готово:", JSON.parse(xhr3.responseText));
                
                let xhr4 = new XMLHttpRequest();
                xhr4.open('GET', urls[3]);
                xhr4.onload = function() {
                    console.log("XHR 4 Готово:", JSON.parse(xhr4.responseText));
                    
                    let xhr5 = new XMLHttpRequest();
                    xhr5.open('GET', urls[4]);
                    xhr5.onload = function() {
                        console.log("XHR 5 Готово:", JSON.parse(xhr5.responseText));
                        console.log("Стадия А полностью завершена!");
                        runStageB(); // Запуск следующей стадии для демонстрации
                    };
                    xhr5.send();
                };
                xhr4.send();
            };
            xhr3.send();
        };
        xhr2.send();
    };
    xhr1.send();
}


// СТАДИЯ B: Кастомная функция-обертка с Callback
function request(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback(new Error(`Ошибка: ${xhr.status}`), null);
        }
    };
    xhr.send();
}

function runStageB() {
    console.log("\n=== Стадия B: Использование функции request() ===");
    
    request(urls[0], (err, res1) => {
        console.log("Реле 1:", res1);
        request(urls[1], (err, res2) => {
            console.log("Реле 2:", res2);
            request(urls[2], (err, res3) => {
                console.log("Реле 3:", res3);
                request(urls[3], (err, res4) => {
                    console.log("Реле 4:", res4);
                    request(urls[4], (err, res5) => {
                        console.log("Реле 5:", res5);
                        console.log("Стадия B полностью завершена!");
                        runStageC();
                    });
                });
            });
        });
    });
}


// СТАДИЯ C: Промисификация (Упрощенный аналог fetch)
function requestPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function runStageC() {
    console.log("\n=== Стадия C: Цепочка через Promise.then() ===");
    
    requestPromise(urls[0])
        .then(res1 => { console.log("Промис 1:", res1); return requestPromise(urls[1]); })
        .then(res2 => { console.log("Промис 2:", res2); return requestPromise(urls[2]); })
        .then(res3 => { console.log("Промис 3:", res3); return requestPromise(urls[3]); })
        .then(res4 => { console.log("Промис 4:", res4); return requestPromise(urls[4]); })
        .then(res5 => { 
            console.log("Промис 5:", res5); 
            console.log("Стадия C полностью завершена!");
            runStageD();
        })
        .catch(err => console.error("Ошибка цепочки промисов:", err));
}


// СТАДИЯ D: Использование Async/Await конструкции
async function runStageD() {
    console.log("\n=== Стадия D: Конструкция Async / Await ===");
    try {
        const res1 = await requestPromise(urls[0]); console.log("Await 1:", res1);
        const res2 = await requestPromise(urls[1]); console.log("Await 2:", res2);
        const res3 = await requestPromise(urls[2]); console.log("Await 3:", res3);
        const res4 = await requestPromise(urls[3]); console.log("Await 4:", res4);
        const res5 = await requestPromise(urls[4]); console.log("Await 5:", res5);
        console.log("Стадия D полностью завершена! Все стадии успешно выполнены.");
    } catch (err) {
        console.error("Ошибка в async/await:", err);
    }
}

// Запуск общего лога с первой стадии
runStageA();

// Задание 3
// Вспомогательные справочники данных для симуляции реального API
const namesM = ["Александр", "Дмитрий", "Максим", "Сергей", "Андрей", "Алексей", "Иван", "Артем"];
const namesF = ["Елена", "Ольга", "Наталья", "Анна", "Мария", "Ирина", "Светлана", "Юлия"];
const surnames = ["Иванов", "Петров", "Смирнов", "Кузнецов", "Попов", "Васильев", "Соколов", "Новиков"];
const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Красноярск"];

/**
 * Асинхронно возвращает массив объектов Human случайного размера (от 5 до 12)
 */
export async function getData() {
    // Симулируем задержку сети в 400 миллисекунд
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const size = Math.floor(Math.random() * 8) + 5; // от 5 до 12 человек
    const list = [];

    for (let i = 0; i < size; i++) {
        const gender = Math.random() > 0.5 ? "Мужской" : "Женский";
        const name = gender === "Мужской" 
            ? namesM[Math.floor(Math.random() * namesM.length)] 
            : namesF[Math.floor(Math.random() * namesF.length)];
            
        // Если женщина, добавим окончание к фамилии
        let surname = surnames[Math.floor(Math.random() * surnames.length)];
        if (gender === "Женский" && surname.endsWith("ов")) surname += "а";
        if (gender === "Женский" && surname.endsWith("ев")) surname += "а";

        list.push({
            id: Date.now() + Math.random().toString(36).substr(2, 5), // уникальный ключ
            name: name,
            surname: surname,
            age: Math.floor(Math.random() * 80) + 5, // возраст от 5 до 85 лет
            gender: gender,
            address: `г. ${cities[Math.floor(Math.random() * cities.length)]}`,
            phone: `+7 (999) ${Math.floor(100+Math.random()*900)}-${Math.floor(10+Math.random()*90)}-${Math.floor(10+Math.random()*90)}`
        });
    }
    return list;
}

// Задание 4