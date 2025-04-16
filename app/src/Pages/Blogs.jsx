import { useReducer } from "react"

const initialState = [
  {
    id: new Date(),
    name:"Mukesh",
    email:"mukesh@gmail.com"
  },
  {
    id: new Date(),
    name:"Raghav",
    email:"raghav@gmail.com"
  }
]

const reducer =(state,action)=>{
  switch (action.type) {
    case "Increment":
      return state =state+1;
      break;
    default:
      break;
  }
}
export default function Blogs() {
    const [state, dispatch] = useReducer(reducer,initialState);
    console.log(state);
  return (
    <>
        <button className="btn" onClick={()=> dispatch({type:'Increment'})}>Increment</button>
    </>
  )
}
