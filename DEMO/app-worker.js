
import { Worker } from "worker_threads";

const computed = (array) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: {
        array: array
      }
    });

    worker.on('message', (msg) => {
      console.log(worker.threadId);
      resolve(msg);
    })

    worker.on('error', (err) => {
      reject(err)
    });

    worker.on('exit', () => {
      console.log('Процесс завершон');
    });
  });
};

const main = async () => {
  performance.mark('start');

  const result = await Promise.all([
    computed([25, 20, 19, 48, 30, 50]),
    computed([25, 20, 19, 48, 30, 50]),
    computed([25, 20, 19, 48, 30, 50]),
    computed([25, 20, 19, 48, 30, 50]),
  ])
  console.log(result);

  performance.mark('end');
  performance.measure('main', 'start', 'end')
  console.log(performance.getEntriesByName('main').pop())
};

main();




















