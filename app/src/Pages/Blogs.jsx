import React, { useContext, useReducer } from 'react'
import { AppContext } from '../Context/AppContext'

const inilState =1;
const reducer = (state,action)=> {
  if(action.type === "Increment"){
    return state =state+1
  }
}
export default function Blogs() {
  const [state, dispatch] = useReducer(reducer, inilState);
    console.log(state);
  return (
    <div>
      {state}
        <button onClick={()=> dispatch({type:"Increment"})}>inc</button>
    </div>
  )
}
