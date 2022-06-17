#!/usr/bin/env node

/*  //получаю http
import http from 'http';
// создаю хост
const host = '127.0.0.1';
//создаю порт
const port = 8000;
                 // СОЗДАНИЕ СЕРВЕРА
// createServer  функ. слушатель запроса
// require  запрос
// respons  ответ
const server = http.createServer((request, respons) => {
  // обработка запроса на сервер

  // методы которыми може стучаться человек
  switch (request.method) {
    case "GET":
      // роут на который постучался человек 
      switch (request.url) {
        case '/hello':
          respons.statusCode = 200;
          respons.setHeader('Content-Type', 'text/plain');
          respons.end('Привет !!!')
          break;
      }
      break;
  }
});
                  // ПРОСЛУШИВАНИЕ СЕРВЕРА
// listen обработчик события
server.listen(port, host, () => {
  console.log(`Сервер запущен:  Хост сервера ${host} - Порт сервера ${port}`);
});  */
// ============================================================

/* import express from 'express';
// Создаю порт
const port = 8000;

// Создаю приложение
const app = express();
//app массив методов(функций) из библиотеки  'express */

/*  
app.all('/hello', (req,res,next)=>{
console.log('ALL');
next();
})

// Создаю роут
 // send() отправляет запрос.
app.get('/hello', (request, respons) => {
  respons.send('Привет! get-1')

});  */

//------------------------------------------------------

// РЕГЭСП (регулюрные выражения)

/* // ? буква перед ним не обязательна
app.get('/hel?lo', (req, res) => {
  res.send('Hellow - ?')// hello, helo 
});

// + не ограниченное число букв.
app.get('/hel+lo', (req, res) => {
  res.send('Hellow - +')// hello, helllllo 
})

// * не шграниченное число любых символов.
app.get('/hel*lo', (req, res) => {
  res.send('Hellow - ?')// hello, helabcdifglo 
})

// ? группа букв перед ним не обязательна
app.get('/he(lf)?lo', (req, res) => {
  res.send('Hellow - (lf)?')// helo, helflo 
})

// РЕГЭСП (регулюрные выражения)
// любая строка любой длины которая заканчивается на "а"
// $ конец строки.
app.get(/.*a$/, (req, res) => {
  res.send('Hellow - Regast')// sretwyua
}) */



// -------------------------------------------------------

// ВЛОЖЕННЫЕ КОЛБЭКИ

/* const cb1 = (req,res,next)=>{
console.log('CB-1');
next()
}

const cb2 = (req, res, next) => {
  console.log('CB-2');
  next()
}

const cb3 = (req, res, next) => {
  console.log('CB-3');
  next()
}

app.get('/hello',[cb1,cb2,cb3,(req,res)=>{
  res.send('Привет всем cb')
}])  */

// -----------------------------------------------

// ВЛОЖЕННОСТЬ
app.route('/hello')
  .get((req, res) => {
    res.send('Get a random book');
  })
  .post( (req, res) => {
    res.send('Add a book');
  })
  .put( (req, res) => {
    res.send('Update the book');
  });

// Прослушиваю запросы 
// listen обработчик события
app.listen(port, () => {
  console.log(`Сервис запущен на http://localhost:${port}`);
});


//????????????????????????????????????????????









































