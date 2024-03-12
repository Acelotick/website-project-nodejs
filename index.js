const { readFileSync } = require('fs');
const { join } = require('path');
const app = require('express')();

//Функция получения файла
let getFile = (file, code) => readFileSync(join(__dirname, `./${file}`), code ?? 'utf-8')

//Добавление различных путей
let json = {
    //localhost:7777/
    '/': getFile('html/index.html'),

    //localhost:7777/vitaliy
    '/vitaliy': getFile('html/vitaliy.html'),

    //localhost:7777/hello
    '/hello': getFile('html/hello.html')
}

//Создание путей
for (const index in json) {
    app.get(index, (a, r) => r.send(json[index]))
}

//Запуск сервера
const server = app.listen(7777, () => console.log(`Сервер запущен`));