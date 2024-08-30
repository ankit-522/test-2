import React,{useState,useEffect,createContext} from "react";

import { BrowserRouter,Router,Route } from "react-router-dom";

import Cart  from "./componete/Cart";

export let Globle = createContext()
export default function App(){

  let [MyData,setMyData] = useState([])
 
  let [Gap,setGap] = useState(6)
  let [Display,setDisplay] = useState([])

  useEffect(()=>{
    setInterval(()=>{
    async function GetDataApi() {
      let Data = await fetch(' https://jsonplaceholder.typicode.com/posts')
        Data = await Data.json()

      console.log(Data)
      

      setMyData(Data)
      
    }
      GetDataApi()

    },5000)
  },[])

useEffect(()=>{

  
  let filterCart = MyData.filter(e => e.id <= Gap)
   setDisplay(filterCart)
  
  
},[Gap,MyData])


  return(
    <>
    <h1 className="heading">Product</h1>

  
<Globle.Provider value={{Display,Gap,setGap,setDisplay}}>

<Cart/>
   
</Globle.Provider>
    </>
  )
}