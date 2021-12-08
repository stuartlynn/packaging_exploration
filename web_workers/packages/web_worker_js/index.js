import  Worker from "./src/simple.worker"
import ComlinkWorker from './src/comlink.worker'

import  * as Comlink from 'comlink'

export const getWorker =()=>{
  return new Worker()
}

export const getComlinkWorker = ()=>{
  return Comlink.wrap( new ComlinkWorker()) 
}

export const runWorkerFromLib =()=>{
  return new Promise((resolve,reject)=>{
    const worker  = new Worker()
    worker.addEventListener('message',(e)=>{
      resolve(e.data)
    }) 
    worker.postMessage("this is all happening in the lib")
  }) 
}

export const someOtherFunc =()=>{
  console.log("other func")
}
