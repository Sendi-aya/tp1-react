import React, { useState } from 'react'
import "./Calcul.css"

export default function Calc() {

const [exp,setExp]=useState('');


const clear=()=>{

 setExp('');
}

const result=()=>{
  try {
  let v=exp;
    setExp(eval(v));
    
   }
  catch(error){
    setExp('expression non valide')
  }
}
const tapecar=(e)=>{


let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}

  return (
    <div className='calculator'>
      <form >
      <div class="form"> 
      < input value={exp} type="text"  />
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" value="1" />
      <input onClick={(e)=>tapecar(e)} type="button" value="2" />
      <input onClick={(e)=>tapecar(e)} type="button" value="3" />
      <input onClick={(e)=>tapecar(e)} type="button" value="+" />
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" value="4" />
      <input onClick={(e)=>tapecar(e)} type="button" value="5" />
      <input onClick={(e)=>tapecar(e)} type="button" value="6" />
      <input onClick={(e)=>tapecar(e)} type="button" value="-" />
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" value="7" />
      <input onClick={(e)=>tapecar(e)} type="button" value="8" />
      <input onClick={(e)=>tapecar(e)} type="button" value="9" />
      <input onClick={(e)=>tapecar(e)} type="button" value="*" />
      <br />
      <input class='zero' onClick={(e)=>tapecar(e)} type="button" value="0" />
      <input onClick={(e)=>tapecar(e)} type="button" value="." />
      <input onClick={(e)=>tapecar(e)} type="button" value="/" />
      <br />
      <input class='zero' id='cc' onClick={clear} type="button" value="C" />
      <input class='zero' onClick={result} type="button" value="=" />
      <br /> 
      </div>
      </form>
 


    
    </div>
  )
}
