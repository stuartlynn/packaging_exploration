import Worker from "./src/simple.worker.ts"
import ComlinkWorker, {DatasetServiceType} from './src/comlink.worker.ts'

import  * as Comlink from 'comlink'

export const getWorker =()=>{
  return new Worker()
}

export const getComlinkWorker = ()=>{
  return Comlink.wrap<DatasetServiceType>( new ComlinkWorker()) 
}

export const runWorkerFromLib =()=>{
  return new Promise((resolve,_)=>{
    const worker  = new Worker()
    worker.addEventListener('message',(e:any)=>{
      resolve(e.data)
    }) 
    worker.postMessage("this is all happening in the lib")
  }) 
}

export const someOtherFunc =()=>{
  console.log("other func")
}
