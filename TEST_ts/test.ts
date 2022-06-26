//console.log('ess')
/*    let a: number = 5;               //число
   let b: string = 'sdfr';          //строка
  
   let c: number = a + Number(b); // сложение
   let d  = true ;

   let name_1: string[] = ['wer' ,'oiu'];   // массив строк
   let ages: number[] = [3,4,5];            // массив чисел
   
   let  tup: [number , string] = [4, 'hgf']  //Массив. Только число и строка в 1 экземпляре.
   tup.push('hgt') // Добавлять эл. можно , но обращаться к ним нельзя
      
   let e: any = 3; // всё что угодно
   e =  'uyt';
   e = true;
   
   let anyArr: any[] = ['asd' , 5 , false]; //массив с любыми значениями
   
   // Функция. Что входит и что выходит
   function greet(name:string):string {
    return name + 'Hi'
   }

   name_1.map((x: string) => x);// анонимная функ.

   //Функ. lot  не обязателен
   function coord(coord:{lat:number, lot?:number}) {
    
   } */
//  57. Union типы

/*   let union: number|string = 5;
  union = 'faif';
  
   function nameId (id: number|string) {
      if (typeof id == 'string') {
         console.log(id.toUpperCase) 
      }else(console.log(id))
   }
nameId('123')

   function nameArr(user:string|string[]) {
      if (Array.isArray(user)) {
         console.log(user.join(', ') + 'Ess')
      }else{console.log(user + "Now")}
   }

   nameArr(['vasia','vova']) */

//58. Interfaces и Types

/* type ID = number|string
type cor = {lat:number, long:number};

 interface ICor {
   lat:number,
   long: number
 }

  //function comput( coord:cor *) {  }
  function comput( coord: ICor) {  }
  interface Animal { name:string }
  interface Dog extends Animal { age: number }
    const Cack:Dog = {
    name:'Cack',
    age:5
  } 
    console.log(Cack.name)

          //-------------------------------------------------

type anymal_1 = {  name:string  }
type Mous = anymal_1 & { tail:boolean  }
const Miki:Mous ={
   name:'miki',
   tail:true
}
console.log(Miki.tail)
 
            // ----------------------------------------------

 interface cat { name:string }
 interface cat { tail: boolean }
 const Cat:cat = {
   name:"Vasia",
   tail:true
 }
 console.log(Cat.name, Cat.tail) 
 
                 // 59. Литеральные типы
                   //String литералы
 type dir = 'left' | 'right';

                  // number литералы
 function Dog (direct:dir): 1 |-1 |0 {
   switch(direct){
    case 'left':
        return -1;
    case 'right':
        return  1;
     default: return 0;  
      
   }
 }

               // Комбинируем Литеральные типы
                   //подключение к базе данных
 interface Icon {
   host:string
   port:number
 }
   function connect( connektion: Icon | 'default') {
 }
 connect('default')
 
                    // Кастование типов
 //Кастомный (от англ. «custom») — переделанный под индивидуальные требования определенного пользователя, сделанный на заказ.

 const kast = {
 host: ' ytre',
 protocol: 'https'  as 'https'
 }
   function  kastom (host:string, protocol: 'http'|'https') {
}
 kastom(kast.host, kast.protocol);

  let f: any = 5
  let m = f as number

  //-------------------------------------------------
                           // 60. Enum
   
  enum dirEnum {
  Left,
  Right
 }

 function  comp (direkt: dirEnum) {
  switch(direkt){
   case dirEnum.Left:
    return 1;
    case dirEnum.Right:
    return -1
    default: return 0
  }
 }

 function  objMod(obj: {Left:number}) {}
 objMod(dirEnum );

                 // Константный enum "более быстрый"
  const enum Direction_2 {
  Up,
  Down 
 }
 let myDirection = Direction_2.Up 

    // ---------------------------------------------
                        // 61. Generics

 function Log <T>(obj: T):T {
  return obj
 }
 Log<string>('uyt');
 Log<number>(9)


  function arrayLog <T, A>(obj: T, array:A[]):A[] {
  return array
 }
   arrayLog<string,number>('absd', [6,2])


  interface HasLangth{
    length: number
  }
  function objLength<T extends HasLangth, A> (obj:T, arr:A[]):A[]  {
    obj.length
    return arr 
  }

                      // Generics в нутри  interface
  
 interface IUser{
  name:string,
  bid:<T>(sum:T) => boolean
 }
 //Аналог interface IUser
 function bid<T>(sum:T):boolean {
  return true
 } */

// ------------------------------------------
// 62. Классы
// protected  Доступен только в родителе и дочерних, НЕ доступен извне
 class Coord {
  lat:number;
  long: number;

   protected test(){
   if (this.lat > 0) {
   console.log('first')
 }
  }
  compute (newLat:number, newLong: number): number {
    //this.test()
    return 0
  }
  constructor(lat:number, long:number) {
    this.lat = lat;
    this.long = long
  }
}
const point = new Coord(1,9)
//----------------------------------------------

                  // override метод
   // Обработка ТОЛЬКО родительского метода  

 class Maplokation extends Coord {
  private _name: string;
  get name(){
    return this._name
  }
  //Обращаться  Coord.name
  set name(s: string){
  this._name = s + 'hello';
  }

 override  compute (newLat:number, newLong: number): number {
  console.log(this._name)
  //this.test()
    return 1
  }

  constructor(lat:number , long: number  , name: string){
  super(lat,long)
  }
}
  const log = new Maplokation(1, 4 ,'name');
 //  log.test()  " test() не доступен "


//----------------------------------------------
                  // implements  "реализует"
                       // void  "пустота"  
                // public "Этот Loger публичный"
                       
interface LoggerService {
  log:(s: string) => void;
}

class Logger implements LoggerService{
  public log(s:string) {
    console.log(s )
  }

  private error() {
 }
  private a = '';
  
}
              
      // ---------------------------------------------
                         // Статика
  class Myclass {
    static a = '1'
    //static { }
  }         
  Myclass.a

      // -----------------------------------------------
                // class  вместе с Generics 
  class myClass <T> {
   a: T;
  }
  const j = new myClass<string>()
  j.a
              //    Абстрактные классы
   abstract class Base {
  ptint(s: string) {
    console.log(s)
  }
  // метод  abstract обязательно должен быть запущен в дочернем классе BaseExtends 

  abstract error ( s: string): void
   }

  class BaseExtends extends Base {
  error (s: string) { }
   }
  new BaseExtends().ptint('iuy');

             // Расширение и сужение классов

  class Animal { name: string }

  class Dog_1 {
  name: string
  tail: boolean
 }
  const puppy:Animal = new Dog_1(); 

 //         63. Другие типы и возможности
                  //typeof
 let a = 'asdf';
 let b: typeof a ;
//------------------------------------------
                //keyof
 type Coord_2 = {
  lat:number,
  lot: number
 }
 type P = keyof Coord_2;
 let l: P = 'lat';
//------------------------------------------
                  // null fbd void
  function  Log (a: string | null): void {
    if (a === null) {
      //console.log('null');
    } else {
      a.toUpperCase();
    }
    // аналог a?.toUpperCase()
    // аналог a!.toUpperCase()
  }
//-------------------------------------------
                //  BigInt and Symbol       
 const Big: bigint = BigInt(100);
 
     // Symbol создаёт уникальный объект, например ID
 const sym: symbol = Symbol('absd')
































