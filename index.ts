 import  express,{Request,Response,NextFunction} from "express";
import { userRouter } from "./users_ts/user.js"; 

const app = express();
const port = 8000;


 app.use( (req,res,next) => {
 console.log('Время',Date.now());
 next();
 });  

/* app.use('hello',(req, res, next) => {
  console.log('Время', Date.now());
  next();
});  */

   app.get('/hello',(req,res) => {
 // res.send('Hellow Get');
  //res.end()
  throw new Error('Get  errror !!!')
 });

 app.use('/users', userRouter)


  app.use((err: Error, req: Request, res: Response, next: NextFunction) => { 
  console.log( err.message);
  res.status(401).send(err.message)

});


 app.listen(port, () => {
 console.log(`Сервер запущен на http://localhost:${port} `);
 }); 