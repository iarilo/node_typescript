
/*  import express  from 'express'
 const port = 8000;
 const app = express(); */



  /* app.get('/hello', (req, res) => {
   res.send('Hellow');
  }); */
/* 
 //  отправляю  json
  app.get('/hello', (req,res) => {
    res.send({success: true})
  }) */

/* // меняю  status
  app.get('/hello', (req, res) => {
  res.status(201).send({ success: true })
}) */

/* // отправляю методом json который полностью работает на json
app.get('/hello', (req, res) => {
  res.status(201).json({ success: true })
}) */

/* // ссылка на скачивание файла
app.get('/hello', (req, res) => {
  // '/test.pdf'  путь к файлу
  // 'name.fail'  кастомное имя
  res.download('/test.pdf', 'name.fail') 
}) */

/* // Переход на другую стр. или сайт
app.get('/hello', (req, res) => {
  // 301   status
  // 'https://example.com'   домен
  res.redirect(301, 'https://example.com')
}) */

                        // Заголовки

/*  // Параметры заголовка 'Content-Type' будит 'text/play'
 app.get('/hello', (req, res) => {
 res.set('Content-Type', 'text/plain')
  res.send('Привет')
})
 */

/* // append добавляет новый заголовок
app.get('/hello', (req, res) => {
  res.append('Warning', ' code')
  res.send('Привет')
}) */


/* // type   тип ответа
app.get('/hello', (req, res) => {
    res.type('application/json')
  res.send('Привет')
}) */


/* 
// links  включение  link в hedar
app.get('/hello', (req, res) => {
    res.links({
    next: 'http://demo.com?page=2',
    middle: 'http://demo.com?page=4',
    last: 'http://demo.com?page=6'
  });
  res.send('Привет')
}) */

                 // КУКИ

/*  // token                         "имя куки"
 // abcdifg                       "текст  названия"
 // domain: 'asdaewr'             "доменн"
 // path: 'C/answers_client/app', "путь "
 // secure: true,                 "шифрование "
 // expires: 6000                  "удаление "
 // clearCookie('token')           " очистка куки"
 app.get('/hello', (req, res) => {
  res.cookie('token','abcdifg', {
     domain: 'asdaewr', 
     path: 'C/answers_client/app',
     secure: true,
     expires: 6000
     });
   res.clearCookie('token',{ path })
 res.send('Hellow cookie')
})  */


/* 
// Завершение запроса
 app.get('/hello', (req, res) => {
//res.status(404).end()
  res.end();
}) */
  



  /* app.listen(port,() => {
    console.log(` Сервер запущен на  http://localhost:${port}`);
  })
 */






















