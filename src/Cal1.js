import React, { useState } from 'react'
import "./Calcul1.css"

export default function Cal1() {
    const [n1,setn1]=useState(0)
    const [n2,setn2]=useState(0)
    const [res,setres]=useState()
    


    const sum=()=>{

       setres(Number(n1)+Number(n2)) 
    }
    const min=()=>{

      setres(Number(n1)-Number(n2)) 
   }
   const devis=()=>{

    setres(Number(n1)/Number(n2)) 
    }
    const multi=()=>{

      setres(Number(n1)*Number(n2)) 
   }
   const clear=()=>{
    setn2('');
    setn1('');
    setres('');
   }

  return (
    <div className='cal'>
      <form >
        <h1> Exemple de calcul : </h1>

        <p>Nombre 1:</p>
        <input type="text" onChange={(e)=>{setn1(e.target.value)}} value={n1}/>
        <br />

        <p>Nombre 2:</p>
        <input type="text"  onChange={(e)=>{setn2(e.target.value)}}  value={n2} />
        <br />

        <input type="button" value=" Somme"  onClick={sum} />
        <input type="button" value="Soustraction"  onClick={min} />
        <input type="button" value="Devision"  onClick={devis} />
        <input type="button" value="multiplication"  onClick={multi} />
        <input class='reload' onClick={clear} type="button" value="Réinitialiser" />
        <br />

        <p>Resultat :</p>
        <input type="text"  value={res} disabled/> 
      </form>

    </div>
  )
}
