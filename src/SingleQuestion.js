import React from 'react'
import { useState} from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


function SingleQuestion({questions}) {
 const [showInfo, setShowInfo] = useState(false);

const handleClick = ()=>{
  setShowInfo(!showInfo)
}
  return (
   <article className='question'>
    <header>
      <h4>{questions.title}</h4>
      <button className='btn' onClick= {handleClick}>
       {showInfo? <AiOutlineMinus/>: <AiOutlinePlus/>}
      </button>
    </header>
  
      {showInfo && <p>{questions.info}</p>}
   </article>
  )
}

export default SingleQuestion