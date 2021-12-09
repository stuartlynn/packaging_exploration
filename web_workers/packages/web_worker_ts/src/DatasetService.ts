const list: Array<string> = []
interface DatasetServiceInterface{
  doSomethingBig: (input:string)=>Promise<Array<string>>
}

export const DatasetService : DatasetServiceInterface ={
  async doSomethingBig(input:String){
    list.push("test")
    // return input.split(" ").join("___:-_)") 
    return list
  }
}
