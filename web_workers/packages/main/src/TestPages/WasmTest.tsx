import React, { useEffect, useState } from "react";

//@ts-ignore
// import {loadWasm} from '@wasm/wasm-func' 

export const WasmTest: React.FC = () => {
  const [wasm,setWasm]= useState<any>(null)

  useEffect(()=>{
    //@ts-ignore
    import('@wasm/wasm-func').loadWasm().then((wasm)=>{
      console.log("WASM IS ",wasm)
      wasm.greet()
    })

  import('rust-wasm-react-calculator').then((calc)=>{
      console.log("calc ",calc)
      console.log(calc.calculate("14+15"))
  })
  },[])

  return (
    <div>
      <h3> WASM TEST</h3>
    </div>
  );
};
