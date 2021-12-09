import React,{useEffect,useState} from 'react'
//@ts-ignore
import  {someOtherFunc,getWorker, runWorkerFromLib, getComlinkWorker} from '@workers/web_worker_js'

export const SimpleWorkerJS: React.FC = ()=>{
  const [workerResult, setWorkerResult ]= useState(null)
  const [inLibResult, setInLibResult]= useState(null)
  const [comlinkResult, setComlinkResult]= useState(null)
  console.log(someOtherFunc)
  useEffect(()=>{
    const worker =getWorker()
    worker.addEventListener('message',(e:any)=>{
      console.log("Got back response ")
      setWorkerResult(e.data)
    })
    worker.postMessage("test")
  },[])

  const result =someOtherFunc()
  const worker = getWorker()

  useEffect(()=>{
    runWorkerFromLib().then((m:any)=>setInLibResult(m))
  },[])

  useEffect(()=>{
    const worker = getComlinkWorker();
    worker.doSomethingBig("this is a string").then((result:any)=>{
      setComlinkResult(result) 
    })
  },[])

  return(
    <div>
      <h3>Simple worker JS</h3>
      <p>Simple lib call {result}</p>
      {workerResult &&
      <p>Worker result :{workerResult}</p>
      }
      {inLibResult &&
      <p>inLib result :{inLibResult}</p>
      }
      {comlinkResult &&
      <p>comlink result :{comlinkResult}</p>
      }
    </div>
  )
} 
