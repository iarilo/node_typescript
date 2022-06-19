import { factorial } from "./factorial.js";
import {parentPort , workerData} from 'worker_threads'

const comp = ({array}) => {

 const arr = [];
   for (let i = 0; i < 10000000; i++){
   arr.push(i * i);
 };
 return array.map( el => factorial(el))
 }

parentPort.postMessage(comp(workerData))























 
 