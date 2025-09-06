import { useState } from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[count,setcount]= useState(15)
  let[color,setcolor]=useState("red")

  // let count=18;
  const addcount=()=>{
    count++;
    console.log(count);
    setcount(count);
  }

  const removevalue=()=>{
     count--;
    console.log(count);
    setcount(count);

  }

  return (
    <>
     <h1 className='bg-green-400'>this is starting</h1>
     <h3 className='bg-amber-500'>Count Value:{count}</h3>
    <div className='w-2xl  h-max' style={{backgroundColor:color}} >
      <button
      onClick={()=>{setcolor("blue")}} className='bg-white-500 justify-center flex-8'>blue</button>
      <button onClick={()=>{setcolor("green")}}  className='bg-white-500 justify-center flex-8' >green</button>
      <button onClick={()=>{setcolor("yellow")}}  className='bg-white-500 justify-center flex-8' style={{backgroundColor:color}}>Yellow</button>
    
    </div>
     <button
     onClick={addcount}
     >Add button</button>
     <button 
     onClick={removevalue}>remove button</button>
    
<Card />
    </>
  )
}

export default App