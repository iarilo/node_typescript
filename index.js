import  express  from "express";
import { userRouter } from "./users/user.js"; 
const app = express();
const port = 8000;


 app.use( (req,res,next) => {
 console.log('Время',Date.now());
 next();
 }); 

/* app.use('hello',(req, res, next) => {
  console.log('Время', Date.now());
  next();
}); */
 
 app.get('/hello',(req,res) => {
 // res.send('Hellow Get');
  //res.end()
  throw new Error('Get  errror !!!')
 });

 app.use('/users', userRouter)


app.use((err,req,res,next) => {
console.log( err.message);
  res.status(401).send(err.message)

});

 app.listen(port, () => {
 console.log(`Сервер запущен на http://localhost:${port} `);
 });











































