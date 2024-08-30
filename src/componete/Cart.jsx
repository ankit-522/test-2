import React,{useContext} from "react";
import './Cart.css'

import { Globle } from "../App";

export default function Cart(){

    let {Display,Gap,setGap,setDisplay}= useContext(Globle)


    function handleDelete(id){
    let NewDisplay = Display.filter(item => item.id !== id);
    setDisplay(NewDisplay)
    }

    if(Display.length===0){
        return(
            <div className="loader">
                <h1>Loading...</h1>
            </div>
        )
    }

    return(
        <>
        <div className="main">
            {
               Display.map((e,i)=>(
                    <div key={i} className="cartList">
                       <button onClick={()=>handleDelete(e.id)} className="close">X</button>
                        <h3>UserId = {e.userId}</h3>
                        <h4> Id = {e.id}</h4>
                        <img id="cartimg" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"/>
                        <p> <span>Title</span>  = {e.title}</p>
                        <p> <span>Body</span> = {e.body}</p>
                    </div>
                ))
            }
       
        </div>


        <div className="btnGroup">
         <button onClick={()=>setGap(Math.max(0,Gap-6))}>less</button>
         <button onClick={()=>setGap(Gap+6)}>More</button>
         
         </div>
        </>
    )
}